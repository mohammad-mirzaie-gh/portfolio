import Link from "next/link";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { RiTelegram2Line } from "react-icons/ri";
import { ArrowUpRight, Mail } from "lucide-react";

import Reveal from "@/components/motion/Reveal";

const CHANNELS = [
  {
    label: "Email",
    value: "mohammad.mirzaie.ghei@gmail.com",
    href: "mailto:mohammad.mirzaie.ghei@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "mohammad-mirzaie-gh",
    href: "https://github.com/mohammad-mirzaie-gh",
    icon: FiGithub,
  },
  {
    label: "LinkedIn",
    value: "mohammad-mirzaie",
    href: "https://www.linkedin.com/in/mohammad-mirzaie/",
    icon: FiLinkedin,
  },
  {
    label: "Telegram",
    value: "@mohammad_mirzaie_ghei",
    href: "https://t.me/mohammad_mirzaie_ghei",
    icon: RiTelegram2Line,
  },
];

function MainFooter() {
  return (
    <section
      id="contact"
      className="flex flex-col justify-end items-center w-full gap-5 scroll-mt-[100px] px-5"
    >
      <div className="max-w-4xl w-full py-16 sm:py-20">
        <Reveal distance={20} className="flex flex-col items-center gap-4 text-center mb-12">
          <span className="eyebrow text-xs text-color-theme">{"// 03 — get in touch"}</span>
          <h2 className="text-3xl sm:text-5xl text-center font-bold text-white tracking-tight">
            Got a project in mind?
          </h2>
          <p className="text-white-p text-base sm:text-lg text-center max-w-lg">
            Let&apos;s build something remarkable together — reach out through
            whichever channel works best for you.
          </p>
        </Reveal>

        <Reveal distance={20} delay={0.1} className="grid sm:grid-cols-2 gap-3">
          {CHANNELS.map((channel) => (
            <Link
              key={channel.label}
              href={channel.href}
              target={channel.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={channel.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              aria-label={channel.label}
              className="group lift-card flex items-center justify-between gap-3 rounded-xl border border-white/8 bg-white/[0.02] px-5 py-4 hover:border-color-theme/35 hover:bg-color-theme/[0.05]"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <span className="shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-color-theme/10 text-color-theme group-hover:bg-color-theme group-hover:text-bg-theme transition-colors duration-300">
                  <channel.icon size={18} />
                </span>
                <span className="flex flex-col min-w-0">
                  <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-dim">
                    {channel.label}
                  </span>
                  <span className="text-white font-medium truncate">
                    {channel.value}
                  </span>
                </span>
              </div>
              <ArrowUpRight
                size={18}
                className="shrink-0 text-white/30 group-hover:text-color-theme transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          ))}
        </Reveal>
      </div>

      <div className="w-full max-w-7xl flex flex-col items-center gap-4 pb-8">
        <p className="font-mono text-sm text-white-p">
          Dream in code, live in logic
        </p>
        <span className="text-color-theme/50 text-xs tracking-[0.3em]">
          — — — — — — — — — — —
        </span>
        <div className="font-medium text-xs text-ink-dim py-1 w-full text-center">
          © {new Date().getFullYear()} Mohammad Mirzaie. All rights reserved.
        </div>
      </div>
    </section>
  );
}

export default MainFooter;
