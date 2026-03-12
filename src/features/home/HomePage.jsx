import Hero from "./Hero";
import TrustStrip from "./TrustStrip";
import ServicesOverview from "./ServicesOverview";
import CaseStudy from "./CaseStudy";
import Process from "./Process";
import Industries from "./Industries";
import Testimonials from "./Testimonials";
import CTABand from "./CTABand";
import About from "../about/About";
import Blog from "../blog/Blog";
import AboutPreview from "../about/AboutPreview";
import BlogPreview from "../blog/BlogPreview";



export default function HomePage() {
  return (
    <>
      <Hero />
       <TrustStrip />
       <ServicesOverview />
      <CaseStudy />
      <Process />
      <Industries />
      <Testimonials />
      <CTABand />
      <AboutPreview />
      <BlogPreview />
 </>
 
  );
}
