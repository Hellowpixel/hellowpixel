import { Palette, Code, Megaphone, TrendingUp } from "lucide-react";

export default function ServicesOverview() {
  const services = [
    {
      icon: Palette,
      title: "Brand & Visual Design",
      description:
        "Striking logos, cohesive brand identities, and beautiful UI/UX that captivate your audience and elevate your presence.",
    },
    {
      icon: Code,
      title: "Web & Software Development",
      description:
        "Custom web applications, scalable platforms, and product engineering built with modern technologies and best practices.",
    },
    {
      icon: Megaphone,
      title: "Advertising & Social Media",
      description:
        "Data-driven campaigns, performance creatives, and engaging content that drive results and grow your brand awareness.",
    },
    {
      icon: TrendingUp,
      title: "Ongoing Support & Growth",
      description:
        "Continuous maintenance, optimization, and analytics to ensure your digital products keep performing at their peak.",
    },
  ];

  return (
    <section id="services" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl text-slate-900 lg:text-4xl">
            What we do
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            End-to-end solutions for brands ready to make their mark
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group cursor-pointer rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-[#833AB4] hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#833AB4]/10 transition-colors group-hover:bg-[#833AB4]">
                  <Icon className="h-6 w-6 text-[#833AB4] transition-colors group-hover:text-white" />
                </div>
                <h3 className="mb-2 text-lg text-slate-900">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
