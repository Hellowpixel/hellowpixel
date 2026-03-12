import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function BlogPreview() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-3xl lg:text-4xl text-slate-900 mb-4">
          Insights & Resources
        </h2>
        <p className="text-slate-600 max-w-3xl mx-auto mb-10">
          Tips on UI/UX, branding, web performance & digital growth.
        </p>

        <Link
          to="/blog"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#833AB4] text-white rounded-lg hover:bg-[#6a2d99] shadow"
        >
          Visit Blog <ArrowRight className="w-4 h-4" />
        </Link>

      </div>
    </section>
  );
}
