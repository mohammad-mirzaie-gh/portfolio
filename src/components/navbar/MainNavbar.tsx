import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";

import MLogo from "@public/logo.webp";

const NAV_LINKS = [
  { href: "#about", index: "01", label: "About" },
  { href: "#project", index: "02", label: "Work" },
  { href: "#contact", index: "03", label: "Contact" },
];

function MainNavbar() {
  return (
    <div className="w-full fixed top-0 left-1/2 -translate-x-1/2 z-50">
      <nav
        className="flex flex-row justify-between items-center lg:w-[80vw] w-[92%] mx-auto mt-3 sm:mt-4
                   rounded-2xl border border-white/8 bg-bg-sunken/70 backdrop-blur-xl
                   px-4 sm:px-6 py-3 shadow-[0_8px_30px_-15px_rgba(0,0,0,0.6)]"
      >
        <Link
          href="#top"
          className="flex flex-row justify-start items-center gap-2.5 group"
          aria-label="Back to top"
        >
          <Image
            alt="Mohammad Mirzaie logo"
            width={28}
            height={28}
            src={MLogo}
            className="transition-transform duration-300 group-hover:scale-110"
          />
          <span className="font-semibold max-sm:text-sm cursor-default tracking-tight">
            <span className="text-color-theme">M</span>ohammad{" "}
            <span className="text-color-theme">M</span>irzaie
          </span>
        </Link>

        <div className="flex flex-row justify-end items-center sm:gap-8 gap-4">
          <div className="md:flex hidden flex-row justify-center items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group font-medium flex flex-row justify-center items-baseline gap-1.5 text-sm text-white/85 transition-colors duration-200 hover:text-white"
              >
                <span
                  className="font-mono text-[10px] text-color-theme/70 group-hover:text-color-theme transition-colors duration-200"
                  aria-hidden="true"
                >
                  {link.index}
                </span>
                <span className="link-underline">{link.label}</span>
              </Link>
            ))}
          </div>

          <div className="h-4 w-px bg-white/10 md:block hidden" aria-hidden="true" />

          <div className="flex flex-row justify-center items-center gap-4">
            <Link
              href="https://github.com/mohammad-mirzaie-gh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-white/70 hover:text-color-theme transition-colors duration-200"
            >
              <FaGithub size={17} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/mohammad-mirzaie/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-white/70 hover:text-color-theme transition-colors duration-200 max-sm:hidden"
            >
              <FaLinkedinIn size={17} />
            </Link>
            <Link
              href="mailto:mohammad.mirzaie.ghei@gmail.com"
              aria-label="Send an email"
              className="text-color-theme hover:text-signal-glow transition-colors duration-200"
            >
              <MdOutlineAlternateEmail size={19} />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default MainNavbar;
