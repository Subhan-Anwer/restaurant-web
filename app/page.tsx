import AboutUs from "@/components/AboutUs";
import Hero from "@/components/hero";
import HomePageNavbar from "@/components/HomePageNavbar";

export default function Home() {
  return (
    <div>
      <header className="max-h-[950px] relative  overflow-hidden">
        <HomePageNavbar />
        <Hero />
        <AboutUs/>
      </header>
    </div>
  );
}
