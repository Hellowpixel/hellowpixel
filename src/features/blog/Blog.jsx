import { BookOpen, Sparkles, ArrowRight } from 'lucide-react';

export default function Blog() {
  const topics = [
    'Best UI/UX practices',
    'Responsive web design',
    'Logo and brand design trends',
    'Landing page optimization',
    'SEO‑friendly website content',
    'Performance‑driven ad creatives'
  ];

  return (
    <section id="blog" className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#833AB4]/10 rounded-full mb-4">
              <BookOpen className="w-4 h-4 text-[#833AB4]" />
              <span className="text-sm text-[#833AB4]">Knowledge Hub</span>
            </div>
            <h2 className="text-3xl lg:text-4xl text-slate-900 mb-4">
              hellowPixel Blog
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Your hub for website design tips, branding insights, and digital marketing strategies 
              for startups and small businesses.
            </p>
          </div>

          {/* Main Content Card */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 lg:p-12">
            <div className="space-y-6">
              <p className="text-slate-700 leading-relaxed">
                Here we share practical guides on how to design professional websites, build strong 
                brand identities, and use social media graphics to increase reach and conversions.
              </p>

              <p className="text-slate-700 leading-relaxed">
                Our articles cover topics like best UI/UX practices, responsive web design, logo and 
                brand design trends, landing page optimization, SEO‑friendly website content, and 
                performance‑driven ad creatives. Whether you are launching a new business, revamping 
                your brand, or planning your next campaign, you will find actionable ideas to improve 
                your online presence and grow faster.
              </p>

              {/* Topics Grid */}
              <div className="pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-5 h-5 text-[#833AB4]" />
                  <h3 className="text-slate-900">What We Cover</h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {topics.map((topic, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-2 text-slate-600 group"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#833AB4] to-[#FD1D1D]" />
                      <span className="text-sm group-hover:text-[#833AB4] transition-colors">
                        {topic}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-6 flex justify-center">
                <button className="px-6 py-3 bg-[#833AB4] text-white rounded-lg hover:bg-[#6a2d99] transition-colors shadow-md hover:shadow-lg flex items-center gap-2 group">
                  Explore Articles
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
