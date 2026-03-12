import { Lightbulb, Target, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl text-slate-900 mb-4">
              About hellowPixel
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCE445] mx-auto rounded-full" />
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <p className="text-lg text-slate-700 leading-relaxed">
                hellowPixel is a creative‑tech studio that blends design, development, and strategy 
                to help brands look professional and grow online. We craft visual identities, websites, 
                and digital experiences that are clean, modern, and built to perform.
              </p>
              
              <p className="text-lg text-slate-700 leading-relaxed">
                From logos and brand systems to responsive websites, dashboards, and campaign creatives, 
                we focus on clarity, consistency, and real business outcomes. Every project is tailored 
                to your goals so your brand feels memorable, trustworthy, and ready to scale.
              </p>
              
              <p className="text-lg text-slate-700 leading-relaxed">
                Whether you are a startup, small business, creator, or public figure, hellowPixel works 
                with you as a long‑term partner – refining your visuals, improving your user experience, 
                and turning your online presence into an asset, not just a checkbox.
              </p>
            </div>

            {/* Value Props */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-slate-50 to-white border border-gray-100">
                <div className="w-12 h-12 bg-[#833AB4]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-6 h-6 text-[#833AB4]" />
                </div>
                <h3 className="text-slate-900 mb-2">Creative Excellence</h3>
                <p className="text-slate-600 text-sm">
                  Clean, modern designs that make your brand stand out
                </p>
              </div>

              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-slate-50 to-white border border-gray-100">
                <div className="w-12 h-12 bg-[#FD1D1D]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-[#FD1D1D]" />
                </div>
                <h3 className="text-slate-900 mb-2">Tailored Strategy</h3>
                <p className="text-slate-600 text-sm">
                  Every project aligned with your specific business goals
                </p>
              </div>

              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-slate-50 to-white border border-gray-100">
                <div className="w-12 h-12 bg-[#FCE445]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-[#833AB4]" />
                </div>
                <h3 className="text-slate-900 mb-2">Long-term Growth</h3>
                <p className="text-slate-600 text-sm">
                  Your partner in building a scalable online presence
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
