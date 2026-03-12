import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ImageWithFallback from "../../components/common/ImageWithFallback";

export default function CaseStudy() {
  return (
    <section id="case-studies" className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left - Mockup */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1752650732799-6e81d5f4c398?auto=format&fit=crop&w=1080&q=80"
                alt="Featured project showcase"
                className="h-auto w-full"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-[#FCE445] opacity-30 blur-3xl" />
            <div className="absolute -top-4 -left-4 h-32 w-32 rounded-full bg-[#833AB4] opacity-20 blur-3xl" />
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2">
              {["Design", "Branding", "Software", "Marketing"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-[#833AB4]/10 px-3 py-1 text-xs text-[#833AB4]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h2 className="text-3xl text-slate-900 lg:text-4xl">
              Elevating a SaaS platform from startup to market leader
            </h2>

            <p className="text-lg leading-relaxed text-slate-600">
              We partnered with GrowthLabs to reimagine their brand, rebuild
              their web platform, and launch high-impact campaigns that drove
              exponential growth.
            </p>

            <div className="space-y-3">
              {[
                "+245% increase in user conversions",
                "3.2M+ impressions in first quarter",
                "92% improvement in page speed",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#833AB4]" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            <Link
              to="/case-studies"
              className="group inline-flex items-center gap-2 text-[#833AB4] hover:text-[#6a2d99]"
            >
              View full case study
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
