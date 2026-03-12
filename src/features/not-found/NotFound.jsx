import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="py-32 text-center">
      <h1 className="text-5xl font-bold">404</h1>
      <p className="mt-4 text-slate-600">Page not found</p>
      <Link to="/" className="mt-6 inline-block text-[#833AB4]">
        Go Home
      </Link>
    </section>
  );
}
