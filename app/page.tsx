import Hero from "@/components/hero";
import Image from "next/image";
import HomePageNavbar from "@/components/HomePageNavbar";

export default function Home() {
  return (
    <div>
      <header className="max-h-[950px] relative  overflow-hidden">
        <HomePageNavbar />
        <Hero />
        
      </header>
    </div>
  );
}
