import MainFooter from "@/components/footer/MainFooter";
import MainHeader from "@/components/header/MainHeader";
import MainSection from "@/components/section/MainSection";
import "./index.css";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-start font-sans">
      <MainHeader />
      <MainSection />
      <MainFooter />
    </div>
  );
}
