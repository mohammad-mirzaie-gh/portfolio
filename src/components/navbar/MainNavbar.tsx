import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaProjectDiagram } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { PiPlugsConnectedBold } from "react-icons/pi";
import { SiHyperskill } from "react-icons/si";

import MLogo from "@public/logo.webp";

function MainNavbar() {
  return (
    <div className="w-full fixed left-[50%] -translate-x-1/2 z-50 bg-bg-theme">
      <nav className="flex flex-row p-2 justify-between items-center lg:w-[80vw] w-[90%] mx-auto py-5">
        <div className="flex flex-row justify-start items-center gap-3">
          <Image alt="Mohammad Mirzaie logo" width={30} src={MLogo} />
          <span className="font-semibold max-sm:text-sm cursor-default">
            <span className="text-[#3ccec6]">M</span>ohammad{" "}
            <span className="text-[#3ccec6]">M</span>irzaie
          </span>
        </div>
        <div className="flex flex-row justify-end items-center sm:gap-10 xs:gap-5 gap-2 ">
          <div className="md:hidden flex flex-row justify-center items-center xs:gap-5 gap-2">
            <Link
              href="https://github.com/mohammad-mirzaie-gh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="font-semibold"
            >
              <FaGithub size={18} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/mohammad-mirzaie/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="font-semibold"
            >
              <FaLinkedinIn size={20} />
            </Link>
          </div>
          <div className="md:flex hidden flex-row justify-center items-center gap-7">
            <Link
              href="#about"
              className="group font-semibold flex flex-row justify-center items-center gap-1 text-white transition-all duration-"
            >
              <span className="group-hover:text-color-theme transition-all duration-">
                About me
              </span>
            </Link>
            <Link
              href="#project"
              className="group font-semibold flex flex-row justify-center items-center gap-1 text-white transition-all duration-"
            >
              <span className="group-hover:text-color-theme transition-all duration-">
                Project
              </span>
            </Link>
            <Link
              href="#contact"
              className="group font-semibold flex flex-row justify-center items-center gap-1 text-white transition-all duration-"
            >
              <span className="group-hover:text-color-theme transition-all duration-">
                Contact
              </span>
            </Link>
          </div>
          <Link
            href="mailto:mohammad.mirzaie.ghei@gmail.com"
            aria-label="Send an email"
            className="flex flex-row justify-end items-center"
          >
            <MdOutlineAlternateEmail size={25} className="text-color-theme" />
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default MainNavbar;
