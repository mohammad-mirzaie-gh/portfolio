import MainBanner from "@/components/banner/MainBanner";
import MainNavbar from "@/components/navbar/MainNavbar";

function MainHeader() {
  return (
    <section id="top" className="w-full flex flex-col min-h-screen scroll-mt-0">
      <div className="w-full shrink-0">
        <MainNavbar />
      </div>

      <div className="flex-1 flex justify-center items-center w-full px-4 sm:px-8">
        <MainBanner />
      </div>
    </section>
  );
}

export default MainHeader;
