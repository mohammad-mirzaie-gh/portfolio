import Skills from "@/components/section/components/Skills";

function MainSection() {
  return (
    <>
      <section id="about" className="max-w-7xl relative my-10 scroll-mt-[100px]">
        <Skills />
      </section>

      <section
        id="project"
        className="w-full max-w-7xl mx-auto px-5 py-16 scroll-mt-[100px]"
      >
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="text-3xl font-semibold text-white">Projects</h2>
          <p className="max-w-xl text-white-p">
            A curated selection of projects is on its way. In the meantime,
            feel free to explore my work on{" "}
            <a
              href="https://github.com/mohammad-mirzaie-gh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-color-theme underline underline-offset-4"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}

export default MainSection;
