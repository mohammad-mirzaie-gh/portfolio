import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BarChart3,
  BookOpen,
  Car,
  Coffee,
  Gamepad2,
  LayoutDashboard,
  type LucideIcon,
} from "lucide-react";

import Skills from "@/components/section/components/Skills";
import OpenSource from "@/components/section/components/OpenSource";
import Reveal from "@/components/motion/Reveal";
import SpotlightCard from "@/components/box/SpotlightCard";
import gamevault from "@public/projects/gamevault/hero.png";
import regalTextEditor from "@public/projects/regal-text-editor/hero.png";
import autoSphereDealer from "@public/projects/autosphere-dealer/hero.png";
import autoSphere from "@public/projects/autosphere/hero.png";
import misaghiCoffee from "@public/projects/misaghi-coffee/hero.png";
import userium from "@public/projects/userium/hero.png";

type Category =
  | "Gaming"
  | "Documentation"
  | "Full-Stack"
  | "Automotive"
  | "Landing Page"
  | "Dashboard";

const CATEGORY_ICON: Record<Category, LucideIcon> = {
  Gaming: Gamepad2,
  Documentation: BookOpen,
  "Full-Stack": LayoutDashboard,
  Automotive: Car,
  "Landing Page": Coffee,
  Dashboard: BarChart3,
};

type Project = {
  title: string;
  kind: string;
  category: Category;
  description: string;
  image: typeof gamevault;
  href: string;
  tags: string[];
  status: "live" | "in-progress";
};

const PROJECTS: Project[] = [
  {
    title: "GameVault",
    kind: "Gaming marketplace · Frontend product",
    category: "Gaming",
    description:
      "A modern gaming storefront — animated hero, live deals, category browsing, and a full shadcn/ui component system driven by Zustand state and Zod-validated forms.",
    image: gamevault,
    href: "https://game-vault-fawn-nine.vercel.app/",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Zustand"],
    status: "live",
  },
  {
    title: "Regal Text Editor",
    kind: "Docs & marketing site · Open-source ecosystem",
    category: "Documentation",
    description:
      "The documentation and marketing site for my open-source rich text editor ecosystem — a live demo, full architecture docs, and every plugin package showcased in one place.",
    image: regalTextEditor,
    href: "https://regal-text-editor.vercel.app/",
    tags: ["Next.js 14", "React 18", "TypeScript", "Plugin architecture"],
    status: "live",
  },
  {
    title: "AutoSphere Dealer",
    kind: "Full-stack platform · Dealership management",
    category: "Full-Stack",
    description:
      "A full-stack dealership management platform with authenticated dashboards, Prisma-backed data, and real-time analytics — inventory, leads, and sales tracked from one command center.",
    image: autoSphereDealer,
    href: "https://auto-sphere-dealer.vercel.app/",
    tags: ["Next.js 16", "Prisma", "NextAuth", "Recharts", "Zod"],
    status: "live",
  },
  {
    title: "AutoSphere",
    kind: "Automotive marketplace · UI/UX",
    category: "Automotive",
    description:
      "A premium automotive marketplace focused on discovery — animated listings, brand and price filtering, and a polished shopping experience built with Radix UI and Framer Motion.",
    image: autoSphere,
    href: "https://auto-sphere-gamma.vercel.app/",
    tags: ["Next.js 16", "React 19", "Framer Motion", "Radix UI"],
    status: "live",
  },
  {
    title: "Misaghi Coffee House",
    kind: "Landing page · Specialty coffee roastery",
    category: "Landing Page",
    description:
      "A bilingual Persian RTL landing page built for a specialty coffee roastery — warm editorial hero, animated menu sections, and a fully custom responsive layout from scratch.",
    image: misaghiCoffee,
    href: "https://coffee-landing-sand.vercel.app/",
    tags: ["Vite", "React", "Tailwind CSS", "TypeScript", "RTL"],
    status: "live",
  },
  {
    title: "Userium",
    kind: "Task & project management platform",
    category: "Dashboard",
    description:
      "A comprehensive application for task and project management, input data analysis, and user management — velocity charts, status breakdowns, and role-based access in one workspace.",
    image: userium,
    href: "https://userium.vercel.app/",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    status: "live",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const CategoryIcon = CATEGORY_ICON[project.category];

  return (
    <Reveal distance={24} delay={index * 0.1} className="h-full">
      <SpotlightCard
        className="lift-card group h-full flex flex-col rounded-[20px] overflow-hidden border border-white/10 bg-gradient-to-b from-color-theme/[0.06] to-white/[0.015]"
        spotlightColor="rgba(45, 212, 199, 0.16)"
      >
        <div className="relative aspect-[16/10] overflow-hidden border-b border-white/8">
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            className="object-cover object-top brightness-[0.55] saturate-[1.1] transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent from-40% to-bg-theme" />
          <div className="absolute inset-0 flex items-start justify-between p-4">
            <span className="flex items-center gap-1.5 font-mono text-color-theme text-[10px] tracking-widest px-3.5 py-1.5 rounded-full border border-color-theme/30 bg-black/40 backdrop-blur-md">
              <span className="status-dot" aria-hidden="true" />
              {project.status === "live" ? "LIVE PROJECT" : "IN PROGRESS"}
            </span>
            <span className="flex items-center gap-1.5 font-mono text-white/80 text-[10px] tracking-widest px-3.5 py-1.5 rounded-full border border-white/20 bg-black/40 backdrop-blur-md">
              <CategoryIcon size={11} aria-hidden="true" />
              {project.category.toUpperCase()}
            </span>
          </div>
        </div>

        <div className="p-7 sm:p-8 flex flex-col grow">
          <div className="flex items-baseline justify-between gap-3 mb-1.5">
            <h3 className="text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-color-theme">
              {project.title}
            </h3>
            <Link
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 flex items-center gap-1.5 text-sm text-color-theme border border-color-theme/35 rounded-full px-4 py-2 hover:bg-color-theme hover:text-bg-theme transition-colors duration-300"
            >
              Visit site
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>

          <p className="text-ink-dim text-sm mb-5 font-mono">{project.kind}</p>

          <p className="text-white/85 text-[15px] leading-7 mb-5 grow">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-5 border-t border-white/8">
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
      </SpotlightCard>
    </Reveal>
  );
}

function MainSection() {
  return (
    <>
      <section
        id="about"
        className="w-full max-w-7xl relative my-10 scroll-mt-[100px]"
      >
        <Skills />
      </section>

      <section
        id="project"
        className="w-full max-w-7xl mx-auto px-5 py-16 scroll-mt-[100px]"
      >
        <Reveal
          distance={20}
          className="flex flex-col items-center gap-3 text-center mb-14"
        >
          <span className="eyebrow text-xs text-color-theme">
            {"// 02 — selected work"}
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            <span className="shiny-text">Projects</span>
          </h2>
          <p className="text-white-p text-sm max-w-md">
            A look at what I&apos;ve shipped. More case studies land here as
            they go live.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 mx-auto gap-8">
          {" "}
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </section>

      <section
        id="open-source"
        className="w-full max-w-7xl mx-auto px-5 py-16 scroll-mt-[100px]"
      >
        <OpenSource />
      </section>
    </>
  );
}

export default MainSection;
