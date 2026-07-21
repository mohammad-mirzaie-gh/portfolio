import Link from "next/link";
import { ArrowUpRight, FileDown } from "lucide-react";

import LogoWithShadow from "@/components/animation/LogoAnimation";
import Reveal from "@/components/motion/Reveal";
import BlurText from "@/components/text/BlurText";
import ShinyText from "@/components/text/ShinyText";

const STATS = [
  { value: "3+", label: "years building software" },
  { value: "10+", label: "technologies shipped with" },
  { value: "1", label: "biomedical eng. focus" },
];

function MainBanner() {
  return (
    <div className="w-full flex flex-col relative max-w-7xl pt-28 pb-16 sm:pt-32">
      <div className="w-full flex md:flex-row-reverse flex-col justify-center items-center md:items-end sm:gap-14 gap-10">
        <Reveal
          trigger="mount"
          direction="up"
          distance={40}
          duration={1.3}
          className="mx-auto shrink-0"
        >
          <LogoWithShadow />
        </Reveal>

        <Reveal
          trigger="mount"
          direction="up"
          distance={40}
          duration={0.9}
          delay={0.15}
          className="flex flex-col justify-center md:gap-7 gap-5 items-start px-5 max-w-7xl w-full"
        >
          <div className="max-md:mx-auto inline-flex items-center gap-2 rounded-full border border-color-theme/25 bg-color-theme/[0.06] px-3.5 py-1.5">
            <span className="status-dot" aria-hidden="true" />
            <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-color-theme">
              Open to new opportunities
            </span>
          </div>

          <div className="flex flex-col gap-1 max-md:mx-auto max-md:text-center">
            <span className="eyebrow text-xs text-ink-dim max-md:text-center">
              {"// hello, world"}
            </span>
            <BlurText
              text="I'm Mohammad Mirzaie"
              delay={280}
              animateBy="words"
              direction="top"
              className="md:text-6xl text-4xl font-bold text-white text-left max-w-2xl tracking-tight max-md:mx-auto max-md:text-center max-md:flex max-md:justify-center max-md:items-center"
            />
          </div>

          <div className="flex flex-col sm:gap-5 gap-3 max-md:text-center max-md:mx-auto">
            <h2 className="text-xl sm:text-2xl font-bold">
              <ShinyText text="Software Developer & Backend Architect" speed={4} />
            </h2>
            <p className="font-medium text-white-p max-w-2xl leading-7 md:w-full">
              I design and build full-stack applications end to end — from
              database schema to pixel-level UI — with a bias toward clean
              architecture, measured performance, and code that&apos;s built to
              last. Currently blending software engineering with biomedical
              engineering to build tools for human-centered systems.
            </p>
          </div>

          <div className="max-md:w-full flex sm:flex-row flex-col items-center max-md:justify-center gap-3 mt-1 md:items-center">
            <Link
              href="#contact"
              className="group rounded-xl bg-color-theme px-6 py-3 !text-bg-theme font-bold text-base transition-all duration-300 hover:shadow-[0_0_0_1px_rgba(45,212,199,0.4),0_12px_30px_-8px_rgba(45,212,199,0.55)] hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              Let&apos;s work together
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
            <a
              href="/Mohammad_Mirzaie_Resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/12 bg-white/[0.02] px-6 py-3 font-semibold text-base text-white transition-all duration-300 hover:border-color-theme/40 hover:bg-white/[0.05] flex items-center justify-center gap-2"
            >
              <FileDown size={17} />
              Download resume
            </a>
          </div>

          <div className="flex flex-wrap sm:gap-8 gap-x-6 gap-y-3 mt-2 max-md:mx-auto max-md:justify-center md:items-center">
            {STATS.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-6">
                {i !== 0 && (
                  <span
                    className="h-8 w-px bg-white/10 max-sm:hidden"
                    aria-hidden="true"
                  />
                )}
                <div className="flex flex-col">
                  <span className="font-mono text-2xl font-bold text-color-theme">
                    {stat.value}
                  </span>
                  <span className="text-xs text-ink-dim max-w-[9rem]">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
}

export default MainBanner;
