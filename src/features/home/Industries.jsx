import {
  Rocket,
  Building2,
  Users,
  ShoppingCart,
  Smartphone,
  Briefcase,
} from "lucide-react";

export default function Industries() {
  const industries = [
    { icon: Rocket, name: "Startups" },
    { icon: Building2, name: "SMBs" },
    { icon: Users, name: "Agencies" },
    { icon: ShoppingCart, name: "E-commerce" },
    { icon: Smartphone, name: "SaaS" },
    { icon: Briefcase, name: "Enterprises" },
  ];

  return (
    <section id="industries" className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl text-slate-900 lg:text-4xl">
            Who we serve
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Partnering with ambitious teams across industries
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <div
                key={industry.name}
                className="group flex cursor-pointer flex-col items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-[#833AB4] hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#833AB4]/10 transition-colors group-hover:bg-[#833AB4]/20">
                  <Icon className="h-6 w-6 text-[#833AB4]" />
                </div>
                <span className="text-center text-sm text-slate-700">
                  {industry.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
