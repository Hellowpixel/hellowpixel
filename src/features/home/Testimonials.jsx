import { Quote } from "lucide-react";
import ImageWithFallback from "../../components/common/ImageWithFallback";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "hellowPixel transformed our entire digital presence. Their design work is stunning, and the software they built has scaled beautifully with our growth.",
      name: "Sarah Chen",
      role: "CEO",
      company: "GrowthLabs",
      image:
        "https://images.unsplash.com/photo-1623594675959-02360202d4d6?auto=format&fit=crop&w=1080&q=80",
    },
    {
      quote:
        "Working with hellowPixel felt like having an extension of our team. They understood our vision and delivered beyond expectations, on time and on budget.",
      name: "Michael Rodriguez",
      role: "Marketing Director",
      company: "Vertex Inc",
      image:
        "https://images.unsplash.com/photo-1752859951149-7d3fc700a7ec?auto=format&fit=crop&w=1080&q=80",
    },
    {
      quote:
        "The ROI we've seen from our campaigns with hellowPixel has been incredible. Their strategic approach to advertising and creative execution is unmatched.",
      name: "Emily Thompson",
      role: "Founder",
      company: "Innovate Co",
      image:
        "https://images.unsplash.com/photo-1652471943570-f3590a4e52ed?auto=format&fit=crop&w=1080&q=80",
    },
  ];

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl text-slate-900 lg:text-4xl">
            What our clients say
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Real results from real partnerships
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-gray-200 bg-white p-8 transition-shadow duration-300 hover:shadow-lg"
            >
              <Quote className="mb-4 h-10 w-10 text-[#833AB4]" />
              <p className="mb-6 leading-relaxed text-slate-700">
                “{t.quote}”
              </p>
              <div className="flex items-center gap-4">
                <ImageWithFallback
                  src={t.image}
                  alt={t.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <div className="text-slate-900">{t.name}</div>
                  <div className="text-sm text-slate-600">
                    {t.role}, {t.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
