import { Routes, Route } from "react-router-dom";
import HomePage from "../features/home/HomePage";
import ContactPage from "../features/contact/ContactPage";
import CaseStudiesPage from "../features/case-studies/CaseStudiesPage";
import ServicesPage from "../features/services/ServicesPage";
import NotFound from "../features/not-found/NotFound";
import About from "../features/about/About";
import Blog from "../features/blog/Blog";


export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/case-studies" element={<CaseStudiesPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />


      {/* fallback */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
