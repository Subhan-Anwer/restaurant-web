import HomePageNavbar from "@/components/HomePageNavbar";
import Hero from "@/components/hero";
import AboutUs from "@/components/AboutUs";
import FoodCategory from "@/components/FoodCategory";
import WhyChooseUs from "@/components/WhyChooseUs";
import Stats from "@/components/Stats";
import OurMenu from "@/components/OurMenu";
import Chefs from "@/components/Chefs";
import Testimonials from "@/components/Testimonials";
import CreativeProcess from "@/components/CreativeProcess";
import Blog from "@/components/Blog";
import { client } from '@/sanity/lib/client'



export default  function Home() {

  return (
    <div>
      <header className="overflow-hidden">
        <HomePageNavbar />
        <Hero />
        <AboutUs />
        <FoodCategory />
        <WhyChooseUs />
        <Stats />
        <OurMenu />
        <Chefs />
        <Testimonials color="text-[#fff]" />
        <CreativeProcess />
        <Blog />
      </header>
    </div>
  );
}
