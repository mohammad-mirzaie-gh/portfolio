import Link from "next/link";

import LogoWithShadow from "@/components/animation/LogoAnimation";
import Reveal from "@/components/motion/Reveal";
import BlurText from "@/components/text/BlurText";
import ShinyText from "@/components/text/ShinyText";

function MainBanner() {
  return (
    <div className="w-full flex md:flex-row-reverse flex-col justify-center items-end sm:gap-15 gap-7 relative max-w-7xl top-16">
      <Reveal
        trigger="mount"
        direction="up"
        distance={50}
        duration={1.5}
        className="mx-auto"
      >
        <LogoWithShadow />
      </Reveal>

      <Reveal
        trigger="mount"
        direction="up"
        distance={50}
        duration={1}
        className="flex flex-col justify-center md:gap-10 gap-4 items-start px-5 max-w-7xl"
      >
        <BlurText
          text="I'm Mohammad Mirzaie"
          delay={300}
          animateBy="words"
          direction="top"
          className="md:text-6xl text-3xl font-bold text-color-theme text-end max-w-xl max-md:mx-auto max-md:text-center max-md:flex max-md:justify-center max-md:items-center"
        />

        <div className="flex flex-col sm:gap-5 gap-2 max-md:text-center">
          <h2 className="text-2xl font-bold text-white">
            <ShinyText text="Software Developer" speed={4} />
          </h2>
          <p className="font-semibold text-white-p max-w-2xl md:w-full md:mb-20 mb-5">
            Greetings! I&apos;m Mohammad Mirzaie — a Programmer, Designer, and
            Software Developer. I strive to build well-crafted and precise
            applications that deliver the best possible results. Feel free to
            explore and learn more about me below.
          </p>
          <div>
            <Link
              href="#contact"
              className="rounded-4xl bg-color-theme px-5 py-2 !text-bg-theme font-bold text-xl transition-transform hover:scale-[1.02] text-left"
            >
              Let&apos;s Connect
            </Link>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

export default MainBanner;
