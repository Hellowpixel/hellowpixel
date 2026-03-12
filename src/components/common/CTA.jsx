import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function CTA({ to, label }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-2 rounded-lg bg-[#FCE445] px-6 py-3 text-slate-900 hover:bg-[#edd93d] transition"
    >
      {label}
      <ArrowRight className="w-4 h-4" />
    </Link>
  );
}
