import LayoutClean from "@/components/layout/LayoutClean";
import HeroClean from "@/components/sections/HeroClean";
import Services from "@/components/sections/ServicesModern";
import Features from "@/components/sections/FeaturesModern";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <LayoutClean>
      <HeroClean />
      <Services />
      <Features />
      <About />
      <Contact />
    </LayoutClean>
  );
}