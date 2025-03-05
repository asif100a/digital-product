import BookACall from "../../components/home/BookACall";
import CallToAction from "../../components/home/CallToAction";
import CaseStudies from "../../components/home/CaseStudies";
import FAQ from "../../components/home/FAQ";
import Hero from "../../components/home/Hero";
import LogoMarquee from "../../components/home/LogoMarquee";
import Pricing from "../../components/home/Pricing";
import Services from "../../components/home/Services";
import Showcase from "../../components/home/Showcase";
import Stats from "../../components/home/Stats";
import Testimonials from "../../components/home/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Showcase />
      <LogoMarquee />
      <Services />
      <Testimonials />
      <Stats />
      <CallToAction />
      <CaseStudies />
      <Pricing />
      <FAQ />
      <BookACall />
    </>
  );
}
