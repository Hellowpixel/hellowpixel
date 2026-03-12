export default function TrustStrip() {
  const logos = [
    { name: "TechCorp", width: "w-24" },
    { name: "Innovate", width: "w-28" },
    { name: "Nexus", width: "w-20" },
    { name: "Vertex", width: "w-26" },
    { name: "Quantum", width: "w-28" },
    { name: "Axiom", width: "w-22" },
  ];

  return (
    <section className="border-y border-gray-100 bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="mb-12 text-center text-sm text-slate-500">
          Trusted by teams building modern brands and products
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 opacity-40">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className={`${logo.width} h-8 rounded bg-slate-300 flex items-center justify-center`}
            >
              <span className="text-xs font-semibold text-slate-600">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
