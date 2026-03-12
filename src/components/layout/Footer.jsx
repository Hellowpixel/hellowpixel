import {
  Linkedin,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/hellowpixel-only-logo.svg";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-12 grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          
          <div>
            <div className="mb-4 flex items-center gap-2">
              <img
                src={logo}
                alt="hellowPixel"
                className="h-8 w-auto"
              />
              <span className="tracking-tight text-xl font-semibold text-white">
                hellowPixel
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Creative design and powerful software for growing brands. We help
              teams dominate their markets.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-4 text-white">Navigation</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/services" className="transition-colors hover:text-[#833AB4]">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="transition-colors hover:text-[#833AB4]">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/about" className="transition-colors hover:text-[#833AB4]">
                  About
                </Link>
              </li>
              <li>
                <Link to="/blog" className="transition-colors hover:text-[#833AB4]">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/careers" className="transition-colors hover:text-[#833AB4]">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-white">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#833AB4]" />
                <a
                  href="mailto:hello@hellowpixel.com"
                  className="transition-colors hover:text-[#833AB4]"
                >
                  inquiry@hellowpixel.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#833AB4]" />
                <a
                  href="tel:+15551234567"
                  className="transition-colors hover:text-[#833AB4]"
                >
                  +91 878889 4645
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-[#833AB4]" />
                <span>
                  Kothrud,Pune
                  <br />
                  Maharashtra, India
                </span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 text-white">Follow us</h4>
            <div className="flex gap-4">
              {[Linkedin, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 transition-colors hover:bg-[#833AB4]"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 text-sm text-slate-500 md:flex-row">
          <p>© {currentYear} hellowPixel. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="transition-colors hover:text-[#833AB4]">
              Privacy Policy
            </Link>
            <Link to="/terms" className="transition-colors hover:text-[#833AB4]">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
