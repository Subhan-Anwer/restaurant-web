import AboutUs from "@/components/AboutUs";
import Chefs from "@/components/Chefs";
import FoodCategory from "@/components/FoodCategory";
import Hero from "@/components/hero";
import HomePageNavbar from "@/components/HomePageNavbar";
import OurMenu from "@/components/OurMenu";
import Stats from "@/components/Stats";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <header className="overflow-hidden">
        <HomePageNavbar />
        <Hero />
        <AboutUs />
        <FoodCategory />
        <WhyChooseUs />
        <Stats/>
        <OurMenu/>
        {/* <Chefs/> */}
      </header>
    </div>
  );
}
