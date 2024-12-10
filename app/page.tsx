import AboutUs from "@/components/AboutUs";
import FoodCategory from "@/components/FoodCategory";
import Hero from "@/components/hero";
import HomePageNavbar from "@/components/HomePageNavbar";
import Stats from "@/components/Stats";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <header className=" relative  overflow-hidden">
        <HomePageNavbar />
        <Hero />
        <AboutUs />
        <FoodCategory />
        <WhyChooseUs />
        <Stats/>
      </header>
    </div>
  );
}
