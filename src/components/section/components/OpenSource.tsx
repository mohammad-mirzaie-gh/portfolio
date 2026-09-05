import Link from "next/link";
import { ArrowUpRight, Boxes, GithubIcon, Package } from "lucide-react";

import Reveal from "@/components/motion/Reveal";
import InstallSnippet from "@/components/box/InstallSnippet";

type PackageData = {
  name: string;
  tagline: string;
  description: string;
  technologies: string[];
  installCommand: string;
  npmUrl: string;
  documentationUrl?: string;
  githubUrl?: string;
  version?: string;
  subPackages?: string[];
  featured?: boolean;
};

const PACKAGES: PackageData[] = [
  {
    name: "Regal Text Editor",
    tagline: "Modular rich text editor ecosystem",
    description:
      "A framework-honest rich text editor toolkit built from scratch — headless by default, React-ready out of the box, and extensible through a real plugin system of independently-installable packages.",
    technologies: ["TypeScript", "React", "Plugin system", "Headless core"],
    installCommand: "npm install @regal-text-editor/react",
    npmUrl: "https://www.npmjs.com/org/regal-text-editor",
    documentationUrl: "https://regal-text-editor.vercel.app/",
    version: "v0.1.1",
    subPackages: [
      "core",
      "browser",
      "react",
      "ui",
      "plugin-basic-blocks",
      "plugin-basic-marks",
      "plugin-code-block",
      "plugin-history",
      "plugin-image",
      "plugin-link",
      "plugin-lists",
    ],
    featured: true,
  },
  {
    name: "nestjs-smsir",
    tagline: "NestJS integration for SMS.ir",
    description:
      "A NestJS module for the SMS.ir REST API — dependency injection, forRoot/forRootAsync configuration, and a zero-dependency client that makes sending SMS and OTP codes structured and type-safe.",
    technologies: ["NestJS", "TypeScript", "SMS.ir"],
    installCommand: "npm install nestjs-smsir",
    npmUrl: "https://www.npmjs.com/package/nestjs-smsir",
    githubUrl: "https://github.com/mohammad-mirzaie-gh/nestjs-smsir",
    version: "v2.0.0",
  },
];

function PackageCard({ pkg, index }: { pkg: PackageData; index: number }) {
  const Icon = pkg.featured ? Boxes : Package;

  return (
    <Reveal
      distance={24}
      delay={index * 0.1}
      className={`h-full ${pkg.featured ? "lg:col-span-3" : "lg:col-span-2"}`}
    >
      <div className="lift-card h-full flex flex-col rounded-[20px] border border-white/10 bg-gradient-to-b from-accent-amber/[0.05] to-white/[0.015] p-7 sm:p-8">
        <div className="flex items-start justify-between gap-3 mb-5">
          <div className="flex items-center gap-3.5 min-w-0">
            <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-accent-amber/10 border border-accent-amber/25 text-accent-amber">
              <Icon size={22} aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <h3 className="text-xl sm:text-2xl font-semibold text-white leading-tight">
                {pkg.name}
              </h3>
              <p className="text-ink-dim text-sm font-mono">{pkg.tagline}</p>
            </div>
          </div>
          {pkg.version && (
            <span className="shrink-0 font-mono text-[11px] text-ink-dim border border-white/10 rounded-full px-2.5 py-1">
              {pkg.version}
            </span>
          )}
        </div>

        <p className="text-white/85 text-[15px] leading-7 mb-5">
          {pkg.description}
        </p>

        {pkg.subPackages && (
          <div
            className="flex flex-wrap gap-1.5 mb-5"
            aria-label={`${pkg.name} included packages`}
          >
            {pkg.subPackages.map((name) => (
              <span
                key={name}
                className="font-mono text-[11px] px-2.5 py-1 rounded-md border border-accent-amber/20 bg-accent-amber/[0.05] text-accent-amber/90"
              >
                {name}
              </span>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-5">
          {pkg.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs text-white-p bg-white/[0.03] border border-white/8 rounded-full px-3 py-1.5"
            >
              {tech}
            </span>
          ))}
        </div>

        <InstallSnippet command={pkg.installCommand} className="mb-6" />

        <div className="mt-auto flex flex-wrap items-center gap-3">
          <Link
            href={pkg.npmUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 bg-accent-amber text-bg-theme font-bold text-sm transition-all duration-300 hover:shadow-[0_10px_25px_-8px_rgba(242,177,85,0.55)] hover:-translate-y-0.5"
          >
            View on NPM
            <ArrowUpRight size={15} aria-hidden="true" />
          </Link>

          {pkg.documentationUrl && (
            <Link
              href={pkg.documentationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 border border-white/12 text-sm font-medium text-white hover:border-accent-amber/40 hover:bg-white/[0.03] transition-all duration-300"
            >
              Documentation
            </Link>
          )}

          {pkg.githubUrl && (
            <Link
              href={pkg.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${pkg.name} on GitHub`}
              className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 border border-white/12 text-sm font-medium text-white hover:border-accent-amber/40 hover:bg-white/[0.03] transition-all duration-300"
            >
              <GithubIcon size={16} aria-hidden="true" />
              GitHub
            </Link>
          )}
        </div>
      </div>
    </Reveal>
  );
}

export default function OpenSource() {
  return (
    <>
      <Reveal
        distance={20}
        className="flex flex-col items-center gap-3 text-center mb-14"
      >
        <span className="eyebrow text-xs text-accent-amber">
          {"// 03 — open source"}
        </span>
        <h2 className="text-3xl md:text-4xl font-semibold text-white">
          Open Source <span className="shiny-text">& Packages</span>
        </h2>
        <p className="text-white-p text-sm max-w-md">
          Reusable tools and developer-focused packages I&apos;ve designed,
          built, and published for the JavaScript ecosystem.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {PACKAGES.map((pkg, index) => (
          <PackageCard key={pkg.name} pkg={pkg} index={index} />
        ))}
      </div>
    </>
  );
}
