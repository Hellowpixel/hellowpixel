import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo/hellowpixel-logo.png";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* LOGO (unchanged) */}
          <NavLink to="/" className="flex items-center gap-2">
            <img src={logo} alt="hellowPixel" className="h-8" />
          </NavLink>

          {/* CENTER LINKS */}
          <div className="hidden lg:flex items-center gap-8">
            {[
              { to: "/services", label: "Services" },
              { to: "/industries", label: "Industries" },
              { to: "/portfolio", label: "Portfolio" },
              { to: "/about", label: "About" },
              { to: "/blog", label: "Blog" },
              { to: "/contact", label: "Contact" },
            ].map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm transition-colors ${
                    isActive
                      ? "text-[#833AB4] font-medium"
                      : "text-slate-600 hover:text-[#833AB4]"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* RIGHT BUTTONS */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("/contact")}
              className="hidden md:inline-flex px-4 py-2 text-sm text-[#833AB4] border border-[#833AB4] rounded-lg hover:bg-[#833AB4]/5 transition"
            >
              Get a quote
            </button>

            <button
              onClick={() => navigate("/contact")}
              className="px-4 py-2 text-sm text-white bg-[#833AB4] rounded-lg hover:bg-[#6a2d99] transition shadow-sm"
            >
              Book a call
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}
