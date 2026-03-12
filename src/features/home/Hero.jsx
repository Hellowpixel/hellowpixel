import { ArrowRight, Code2, TrendingUp, Palette, Boxes } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* LEFT */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="tracking-tight text-4xl text-slate-900 lg:text-5xl xl:text-6xl">
                Creative design & powerful software for growing brands.
              </h1>
              <p className="text-lg leading-relaxed text-slate-600">
                We combine stunning graphics, strategic branding, performance
                advertising, and custom software solutions to help ambitious
                teams build and scale their digital presence.
              </p>
            </div>

            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              {/* Primary CTA */}
              <Link
                to="/contact"
                className="group flex items-center gap-2 rounded-lg bg-[#FCE445] px-6 py-3 text-slate-900 shadow-md transition hover:bg-[#edd93d] hover:shadow-lg"
              >
                Start a project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              {/* Secondary */}
              <Link
                to="/case-studies"
                className="group flex items-center gap-2 text-[#833AB4] hover:text-[#6a2d99]"
              >
                View case studies
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <div className="relative z-10 space-y-4">

              {/* Main Card */}
              <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-xl">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex gap-2">
                    <span className="h-2 w-20 rounded bg-gray-200" />
                    <span className="h-2 w-16 rounded bg-gray-200" />
                  </div>
                </div>

                <div className="flex aspect-video items-center justify-center rounded-lg bg-gradient-to-br from-[#833AB4]/10 to-[#FD1D1D]/10">
                  <Palette className="h-16 w-16 text-[#833AB4]" />
                </div>
              </div>

              {/* Floating Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="transform rounded-xl border border-gray-100 bg-white p-4 shadow-lg transition hover:scale-105">
                  <TrendingUp className="mb-2 h-6 w-6 text-green-500" />
                  <div className="space-y-2">
                    <div className="h-2 w-full rounded bg-gray-100" />
                    <div className="h-2 w-3/4 rounded bg-gray-100" />
                    <div className="mt-3 flex gap-1">
                      <span className="h-8 w-1.5 rounded bg-[#833AB4]" />
                      <span className="h-12 w-1.5 rounded bg-[#833AB4]" />
                      <span className="h-10 w-1.5 rounded bg-[#FD1D1D]" />
                      <span className="h-14 w-1.5 rounded bg-[#FCE445]" />
                    </div>
                  </div>
                </div>

                <div className="transform rounded-xl border border-gray-800 bg-slate-900 p-4 shadow-lg transition hover:scale-105">
                  <Code2 className="mb-2 h-6 w-6 text-[#833AB4]" />
                  <div className="space-y-2 font-mono text-xs">
                    <div className="flex gap-2">
                      <span className="text-[#833AB4]">const</span>
                      <span className="text-[#FCE445]">app</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-[#FD1D1D]">function</span>
                      <span className="text-green-300">()</span>
                    </div>
                    <div className="h-2 w-2/3 rounded bg-slate-700" />
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative */}
            <div className="absolute -top-4 -right-4 z-0 h-12 w-12">
              <Boxes className="h-full w-full text-[#833AB4]/30 opacity-50" />
            </div>
            <div className="absolute -bottom-6 -left-6 z-0 h-16 w-16">
              <Boxes className="h-full w-full text-[#FCE445]/50 opacity-50" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
