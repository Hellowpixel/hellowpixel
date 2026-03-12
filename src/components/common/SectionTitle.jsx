export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-16 text-center">
      <h2 className="mb-4 text-3xl text-slate-900 lg:text-4xl">
        {title}
      </h2>
      <p className="mx-auto max-w-2xl text-lg text-slate-600">
        {subtitle}
      </p>
    </div>
  );
}
