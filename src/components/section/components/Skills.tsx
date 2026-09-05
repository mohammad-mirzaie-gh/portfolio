import Image, { StaticImageData } from "next/image";
import { FileDown, GithubIcon, MapPin } from "lucide-react";

import ExpendedBox from "@/components/box/ExpendedBox";
import SpotlightCard from "@/components/box/SpotlightCard";
import Reveal from "@/components/motion/Reveal";
import logo from "@public/logo.webp";

type Props = {
  name?: string;
  title?: string;
  location?: string;
  yearsExp?: number;
  bio?: string[];
  skillGroups?: SkillGroup[];
  profileImageSrc?: StaticImageData;
  resumeHref?: string;
  githubHref?: string;
};

type SkillGroup = {
  label: string;
  skills: string[];
};

const DEFAULT_BIO = [
  "A passionate software developer and biomedical engineering student. I combine software engineering with biomedical engineering to build meaningful tools for health and human-centered systems.",
  "Experienced across full-stack development, database design, server architecture, and cross-platform apps — comfortable owning a feature from schema to shipped UI.",
];

const DEFAULT_SKILL_GROUPS: SkillGroup[] = [
  {
    label: "Languages",
    skills: ["JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    label: "Frontend",
    skills: [
      "React",
      "Next.js",
      "Redux",
      "Zustand",
      "React Query",
      "Bootstrap",
      "MUI",
    ],
  },
  {
    label: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "Nest.js",
      "Fastify",
      "REST",
      "GraphQL",
      "WebSocket",
      "gRPC",
      "Socket.IO",
    ],
  },
  {
    label: "Data",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "SQLite",
      "Prisma",
      "Sequelize",
    ],
  },
  {
    label: "Tooling & quality",
    skills: [
      "Docker",
      "Git",
      "GitHub",
      "GitLab",
      "Jest",
      "Vitest",
      "E2E testing",
      "Figma",
    ],
  },
];

const SKILL_BADGE_CLASSES =
  "text-xs px-3 py-1.5 font-medium rounded-lg border border-white/8 bg-white/[0.03] text-white-p " +
  "transition-all duration-300 ease-out " +
  "hover:border-color-theme/40 hover:bg-color-theme/[0.08] hover:text-color-theme hover:-translate-y-0.5";

function SkillGroupBlock({ group }: { group: SkillGroup }) {
  return (
    <div className="flex flex-col gap-2.5">
      <h4 className="font-mono text-[11px] tracking-[0.14em] uppercase text-ink-dim">
        {group.label}
      </h4>
      <ul className="flex flex-wrap gap-2" aria-label={`${group.label} skills`}>
        {group.skills.map((skill) => (
          <li key={skill}>
            <span className={SKILL_BADGE_CLASSES}>{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SkillGroupsList({ groups }: { groups: SkillGroup[] }) {
  return (
    <div className="grid sm:grid-cols-2 gap-5 mt-4">
      {groups.map((group) => (
        <SkillGroupBlock key={group.label} group={group} />
      ))}
    </div>
  );
}

export default function AboutSection({
  name = "Mohammad Mirzaie",
  title = "Software Developer",
  location = "Tehran, Iran",
  yearsExp = 3,
  bio = DEFAULT_BIO,
  skillGroups = DEFAULT_SKILL_GROUPS,
  profileImageSrc = logo,
  resumeHref = "/Mohammad_Mirzaie_Resume.pdf",
  githubHref = "https://github.com/mohammad-mirzaie-gh",
}: Props) {
  return (
    <div className="max-w-7xl mx-auto md:px-10 px-5 py-12">
      <Reveal distance={20} className="flex flex-col gap-3 text-center mb-12">
        <span className="eyebrow text-xs text-color-theme">{"// 01 — about"}</span>
        <h2 className="text-3xl md:text-4xl font-semibold text-white">
          Who I am
        </h2>
      </Reveal>

      <SpotlightCard
        className="custom-spotlight-card rounded-[20px]"
        spotlightColor="rgba(45, 212, 199, 0.16)"
      >
        <div className="bg-white/[0.025] backdrop-blur rounded-[20px] p-6 md:p-10 shadow-lg border border-white/8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 items-start">
            <Reveal
              distance={20}
              className="flex flex-col items-center md:items-start gap-4"
            >
              <div className="md:w-full sm:w-40 max-sm:w-32 aspect-square rounded-xl overflow-hidden border border-white/8 relative bg-gradient-to-br from-color-theme/[0.08] to-bg-sunken flex items-center justify-center p-8">
                <Image
                  src={profileImageSrc}
                  alt={`${name} logo mark`}
                  width={200}
                  className="object-contain w-full h-full drop-shadow-[0_0_24px_rgba(45,212,199,0.25)]"
                />
              </div>
              <div className="flex items-center gap-1.5 text-sm text-ink-dim">
                <MapPin size={14} className="text-color-theme shrink-0" />
                {location}
              </div>
            </Reveal>

            <Reveal distance={20} className="md:col-span-2">
              <header>
                <h3 id="about-heading" className="text-2xl md:text-3xl font-semibold mb-2 text-white">
                  {name}
                </h3>
                <p className="text-sm font-mono text-color-theme/80">
                  {title} · {yearsExp}+ years of experience
                </p>
              </header>

              <div className="mt-5 space-y-3 text-[15px] leading-7 text-white-p">
                {bio.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>

              <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:gap-3 gap-3">
                <a
                  href={resumeHref}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 bg-color-theme text-bg-theme font-semibold text-sm shadow hover:shadow-[0_10px_25px_-8px_rgba(45,212,199,0.55)] hover:-translate-y-0.5 transition-all duration-300"
                  aria-label="Download resume (PDF)"
                >
                  <FileDown size={16} aria-hidden="true" />
                  Resume
                </a>

                <a
                  href={githubHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 border border-white/12 text-sm font-medium hover:border-color-theme/40 hover:bg-white/[0.03] transition-all duration-300"
                  aria-label="View GitHub profile"
                >
                  <GithubIcon size={16} aria-hidden="true" />
                  GitHub
                </a>
              </div>
            </Reveal>

            <Reveal distance={20} className="md:col-span-3 mt-2 pt-6 border-t border-white/8">
              <h4 className="font-semibold text-xl text-white">
                Technical toolkit
              </h4>

              <div className="sm:block hidden">
                <SkillGroupsList groups={skillGroups} />
              </div>

              <div className="w-full sm:hidden">
                <ExpendedBox>
                  <SkillGroupsList groups={skillGroups} />
                </ExpendedBox>
              </div>
            </Reveal>
          </div>
        </div>
      </SpotlightCard>
    </div>
  );
}
