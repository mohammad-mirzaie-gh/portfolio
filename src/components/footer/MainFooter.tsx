import Link from "next/link";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { RiTelegram2Line } from "react-icons/ri";

function MainFooter() {
  return (
    <section
      id="contact"
      className="flex flex-col justify-end items-center w-full gap-5 scroll-mt-[100px]"
    >
      <div className="max-w-7xl py-10">
        <div className="flex flex-col justify-center gap-10">
          <div className="flex flex-col justify-center items-center gap-5 px-5">
            <h2 className="text-xl sm:text-5xl text-center font-bold text-color-theme">
              Got a project in mind?
            </h2>
            <p className="text-white text-xl sm:text-3xl  text-center">
              Let’s build something remarkable together . . .
            </p>
          </div>
          <div className="flex flex-row justify-center items-center gap-10">
            <Link
              className="group"
              href="https://github.com/mohammad-mirzaie-gh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
            >
              <FiGithub
                className="group-hover:text-white-p duration-300 transition-all"
                size={30}
              />
            </Link>
            <Link
              className="group"
              href="https://www.linkedin.com/in/mohammad-mirzaie/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              <FiLinkedin
                className="group-hover:text-white-p duration-300 transition-all"
                size={30}
              />
            </Link>
            <Link
              className="group"
              href="https://t.me/mohammad_mirzaie_ghei"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
            >
              <RiTelegram2Line
                className="group-hover:text-white-p duration-300 transition-all"
                size={30}
              />
            </Link>
            <Link
              className="group"
              href="mailto:mohammad.mirzaie.ghei@gmail.com"
              aria-label="Send an email"
            >
              <MdOutlineAlternateEmail
                className="group-hover:text-white-p duration-300 transition-all"
                size={30}
              />
            </Link>
          </div>
        </div>
      </div>

      <p className="font-semibold">Dream in code, live in logic</p>
      <span className="text-color-theme">_ _ _ _ _ _ _ _ _ _ _</span>
      <div className="font-semibold text-sm text-white-p py-1 w-full text-center">
        © {new Date().getFullYear()} Mohammad Mirzaie. All rights reserved
      </div>
    </section>
  );
}

export default MainFooter;
