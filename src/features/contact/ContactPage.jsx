import { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // Environment variables
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const AUTOREPLY_TEMPLATE_ID =
    import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      // 1️⃣ Send admin email
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        e.target,
        PUBLIC_KEY
      );

      // 2️⃣ Send auto-reply email
      const formData = new FormData(e.target);
      const userEmail = formData.get("email");
      const firstName = formData.get("first_name");

      await emailjs.send(
        SERVICE_ID,
        AUTOREPLY_TEMPLATE_ID,
        {
          email: userEmail,
          first_name: firstName,
        },
        PUBLIC_KEY
      );

      e.target.reset();

      // 3️⃣ Redirect to thank-you page
      navigate("/thank-you");
    } catch (err) {
      console.error(err);
      setError(true);
    }

    setLoading(false);
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white w-full max-w-xl rounded-xl shadow-lg border border-gray-200 p-8">

        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Get in Touch
        </h2>
        <p className="text-gray-600 mb-6">
          We’d love to hear from you. Fill out the form below.
        </p>

        {error && (
          <div className="mb-4 p-3 rounded bg-red-50 text-red-700 border border-red-200">
            ❌ Something went wrong. Please try again.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-600">First Name *</label>
              <input
                required
                name="first_name"
                placeholder="John"
                className="input"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Last Name *</label>
              <input
                required
                name="last_name"
                placeholder="Doe"
                className="input"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-600">Email *</label>
              <input
                required
                type="email"
                name="email"
                placeholder="john@example.com"
                className="input"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">
                Mobile (Optional)
              </label>
              <input
                type="tel"
                name="mobile"
                placeholder="+91 98765 43210"
                className="input"
              />
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-600">Message *</label>
            <textarea
              required
              name="message"
              rows="6"
              placeholder="Write your message here..."
              className="input min-h-[160px] resize-y"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-[#833AB4] text-white font-semibold rounded-lg hover:bg-[#6a2d99] transition disabled:opacity-70"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

        </form>
      </div>
    </section>
  );
}