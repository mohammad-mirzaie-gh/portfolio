import Image, { StaticImageData } from "next/image";
import { Download, GithubIcon } from "lucide-react";

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
  skills?: string[];
  profileImageSrc?: StaticImageData;
  resumeHref?: string;
  githubHref?: string;
};

const DEFAULT_BIO = [
  "A passionate Software Developer and a Biomedical Engineering student.",
  "I combine software development with biomedical engineering to build meaningful tools for health and human-centered systems.",
  "Experienced in full-stack development, database design, server architecture, and cross-platform apps.",
];

const DEFAULT_SKILLS = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Bootstrap",
  "MUI",
  "Redux",
  "Zustand",
  "Axios",
  "React Query",
  "Node.js",
  "Express.js",
  "Nest.js",
  "Fastify",
  "Socket.IO",
  "REST",
  "GraphQL",
  "WebSocket",
  "gRPC",
  "Postgres",
  "MySQL",
  "MongoDB",
  "SQLite",
  "Sequelize",
  "Prisma.js",
  "Docker",
  "Git",
  "GitHub",
  "GitLab",
  "Jest",
  "Vitest",
  "Unit Test",
  "Integration Test",
  "E2E Test",
  "Figma",
];

const SKILL_BADGE_CLASSES =
  "text-xs px-3 py-1 font-semibold rounded-full border border-white/6 bg-white/6 text-color-theme " +
  "transition-all duration-300 ease-in-out " +
  "hover:bg-linear-to-r hover:from-teal-500 hover:to-cyan-500 " +
  "hover:text-white hover:scale-105 hover:shadow-lg";
function SkillsList({
  skills,
  className,
}: {
  skills: string[];
  className?: string;
}) {
  return (
    <ul className={className} aria-label="Technical skills">
      {skills.map((skill) => (
        <li key={skill}>
          <span className={SKILL_BADGE_CLASSES}>{skill}</span>
        </li>
      ))}
    </ul>
  );
}

export default function AboutSection({
  name = "Mohammad Mirzaie",
  title = "Software Developer",
  location = "Tehran, Iran",
  yearsExp = 3,
  bio = DEFAULT_BIO,
  skills = DEFAULT_SKILLS,
  profileImageSrc = logo,
  resumeHref = "/Mohammad-Mirzaie-Resume.pdf",
  githubHref = "https://github.com/mohammad-mirzaie-gh",
}: Props) {
  return (
    <div className="max-w-7xl mx-auto md:px-10 px-5 py-12">
      <SpotlightCard
        className="custom-spotlight-card"
        spotlightColor="rgba(0, 229, 255, 0.2)"
      >
        <div className="bg-white/5 backdrop-blur rounded-2xl p-5 md:p-10 shadow-lg border border-white/6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <Reveal
              distance={20}
              className="flex justify-center md:justify-center"
            >
              <div className="md:w-48 sm:w-40 max-sm:w-32 mt-5 rounded-xl overflow-hidden">
                <Image
                  src={profileImageSrc}
                  alt={`${name} profile photo`}
                  width={200}
                  className="object-cover w-full h-full"
                />
              </div>
            </Reveal>

            <Reveal distance={20} className="md:col-span-2">
              <header>
                <h2
                  id="about-heading"
                  className="text-3xl md:text-3xl font-semibold mb-5"
                >
                  About Me
                </h2>
                <p className="text-sm mt-1 text-muted-foreground">
                  {title} • {location} • {yearsExp}+ years
                </p>
              </header>

              <div className="mt-4 space-y-3 text-sm leading-relaxed text-gray-200">
                {bio.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>

              <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-3">
                <a
                  href={resumeHref}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md px-4 py-2 bg-linear-to-r from-teal-500 to-cyan-500 text-white font-medium shadow hover:scale-[1.01] transition-transform"
                  aria-label="Download resume (PDF)"
                >
                  <Download size={16} aria-hidden="true" />
                  Resume
                </a>

                <a
                  href={githubHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md px-4 py-2 border border-white/10 text-sm hover:bg-white/3 transition"
                  aria-label="View GitHub profile"
                >
                  <GithubIcon size={16} aria-hidden="true" />
                  GitHub
                </a>
              </div>
            </Reveal>

            <Reveal distance={20} className="md:col-span-3 mt-6">
              <h3 className="font-semibold text-2xl">Key Skills</h3>
              <SkillsList
                skills={skills}
                className="mt-3 sm:flex hidden flex-wrap gap-2"
              />

              <div className="w-full sm:hidden">
                <ExpendedBox>
                  <SkillsList
                    skills={skills}
                    className="mt-3 flex flex-wrap gap-2"
                  />
                </ExpendedBox>
              </div>
            </Reveal>
          </div>
        </div>
      </SpotlightCard>
    </div>
  );
}
