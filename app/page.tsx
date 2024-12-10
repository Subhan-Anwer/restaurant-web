import AboutUs from "@/components/AboutUs";
import FoodCategory from "@/components/FoodCategory";
import Hero from "@/components/hero";
import HomePageNavbar from "@/components/HomePageNavbar";

export default function Home() {
  return (
    <div>
      <header className=" relative  overflow-hidden">
        <HomePageNavbar />
        <Hero />
        <AboutUs/>
        <FoodCategory/>
      </header>
    </div>
  );
}
