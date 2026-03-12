import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function CTABand() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#833AB4] via-[#a855c4] to-[#FD1D1D] py-20 lg:py-24">
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#833AB4]/40 opacity-20 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[#FD1D1D]/40 opacity-20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
        <div className="mb-6 inline-flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-[#FCE445]" />
          <Sparkles className="h-4 w-4 text-[#FCE445]" />
        </div>

        <h2 className="mb-6 text-3xl leading-tight text-white lg:text-4xl xl:text-5xl">
          Have an idea to design or build?
          <br />
          Say hellow to every pixel of your dream.
        </h2>

        <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
          Let's turn your vision into reality. Book a free consultation to
          discuss your project.
        </p>

        <Link
          to="/contact"
          className="group mx-auto flex w-fit items-center gap-2 rounded-lg bg-[#FCE445] px-8 py-4 text-slate-900 shadow-xl transition-all duration-300 hover:scale-105 hover:bg-[#edd93d] hover:shadow-2xl"
        >
          Talk to us
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
