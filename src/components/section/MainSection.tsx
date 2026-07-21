import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import Skills from "@/components/section/components/Skills";
import Reveal from "@/components/motion/Reveal";
import coffeeLanding from "../../../public/mohammad_mirzaie_landing.png";

type Project = {
  title: string;
  kind: string;
  description: string;
  image: typeof coffeeLanding;
  href: string;
  tags: string[];
  status: "live" | "in-progress";
};

const PROJECTS: Project[] = [
  {
    title: "Misaghi Coffee House",
    kind: "Landing page · Specialty coffee roastery",
    description:
      "A bilingual Persian RTL landing page built for a specialty coffee roastery — warm editorial hero, animated menu sections, and a fully custom responsive layout from scratch.",
    image: coffeeLanding,
    href: "https://coffee-landing-sand.vercel.app/",
    tags: ["Vite", "ReactJs" , "Tailwind CSS", "TypeScript", "RTL"],
    status: "live",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal distance={24} delay={index * 0.1} className="h-full">
      <div className="lift-card group h-full flex flex-col rounded-[20px] overflow-hidden border border-white/10 bg-gradient-to-b from-color-theme/[0.05] to-white/[0.015]">
        <div className="relative aspect-[16/10] overflow-hidden border-b border-white/8">
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            className="object-cover object-top brightness-[0.55] saturate-[1.1] transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent from-40% to-bg-theme" />
          <span className="absolute top-4 left-4 flex items-center gap-1.5 font-mono text-color-theme text-[10px] tracking-widest px-3.5 py-1.5 rounded-full border border-color-theme/30 bg-black/40 backdrop-blur-md">
            <span className="status-dot" aria-hidden="true" />
            {project.status === "live" ? "LIVE PROJECT" : "IN PROGRESS"}
          </span>
        </div>

        <div className="p-7 sm:p-8 flex flex-col grow">
          <div className="flex items-baseline justify-between gap-3 mb-1.5">
            <h3 className="text-2xl font-semibold text-white">
              {project.title}
            </h3>
            <Link
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 flex items-center gap-1.5 text-sm text-color-theme border border-color-theme/35 rounded-full px-4 py-2 hover:bg-color-theme hover:text-bg-theme transition-colors duration-300"
            >
              Visit site
              <ArrowUpRight size={15} />
            </Link>
          </div>

          <p className="text-ink-dim text-sm mb-5 font-mono">{project.kind}</p>

          <p className="text-white/85 text-[15px] leading-7 mb-5 grow">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-color-theme bg-color-theme/[0.08] border border-color-theme/25 rounded-full px-3 py-1.5"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function MainSection() {
  return (
    <>
      <section id="about" className="w-full max-w-7xl relative my-10 scroll-mt-[100px]">
        <Skills />
      </section>

      <section
        id="project"
        className="w-full max-w-7xl mx-auto px-5 py-16 scroll-mt-[100px]"
      >
        <Reveal distance={20} className="flex flex-col items-center gap-3 text-center mb-14">
          <span className="eyebrow text-xs text-color-theme">{"// 02 — selected work"}</span>
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            <span className="shiny-text">Projects</span>
          </h2>
          <p className="text-white-p text-sm max-w-md">
            A look at what I&apos;ve shipped. More case studies land here as
            they go live.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-1 max-w-2xl mx-auto gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </section>
    </>
  );
}

export default MainSection;