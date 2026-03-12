import { Lightbulb, Target, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

export default function AboutPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-3xl lg:text-4xl text-slate-900 mb-4">
          About hellowPixel
        </h2>
        <p className="text-slate-600 max-w-3xl mx-auto mb-10">
          A creative-tech studio blending design, development, and strategy
          to help brands grow online.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <Card icon={<Lightbulb />} title="Creative" />
          <Card icon={<Target />} title="Strategy" />
          <Card icon={<TrendingUp />} title="Growth" />
        </div>

        <Link
          to="/about"
          className="inline-flex items-center gap-2 text-[#833AB4] hover:text-[#6a2d99]"
        >
          Learn more about us →
        </Link>

      </div>
    </section>
  );
}

function Card({ icon, title }) {
  return (
    <div className="p-6 rounded-xl border bg-white shadow-sm">
      <div className="mx-auto mb-3 w-12 h-12 bg-[#833AB4]/10 flex items-center justify-center rounded-lg text-[#833AB4]">
        {icon}
      </div>
      <h3 className="text-slate-900 font-medium">{title}</h3>
    </div>
  );
}
