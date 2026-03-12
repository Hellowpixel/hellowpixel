import { Search, Rocket, LineChart } from "lucide-react";

export default function Process() {
  const steps = [
    {
      icon: Search,
      title: "Discover & Design",
      description:
        "We dive deep into your brand, audience, and goals to craft a strategic foundation and stunning visual direction.",
    },
    {
      icon: Rocket,
      title: "Develop & Launch",
      description:
        "Our engineering and creative teams build, test, and deploy your solution with precision and speed.",
    },
    {
      icon: LineChart,
      title: "Analyze & Grow",
      description:
        "We monitor performance, gather insights, and continuously optimize to maximize your ROI and impact.",
    },
  ];

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl text-slate-900 lg:text-4xl">
            How we work
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            A proven process that delivers results
          </p>
        </div>

        <div className="relative grid gap-12 md:grid-cols-3">
          <div
            className="absolute left-[6rem] right-[6rem] top-16 hidden h-0.5 bg-gradient-to-r from-[#833AB4]/20 via-[#833AB4] to-[#833AB4]/20 md:block"
          />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="relative text-center">
                <div className="relative mb-6 inline-flex">
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#833AB4] to-[#6a2d99] shadow-lg">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-lg bg-[#FCE445] text-xs text-slate-900 shadow">
                    {index + 1}
                  </div>
                </div>
                <h3 className="mb-3 text-xl text-slate-900">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
