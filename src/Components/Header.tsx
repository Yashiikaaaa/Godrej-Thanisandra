import { useState } from "react";
import menuIcon from "../assets/header-menu.svg";
import { useNavigate, useLocation } from "react-router-dom";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { label: "Home", href: "/home" },
    { label: "Overview", href: "/overview" },
    { label: "Floor Plan", href: "/floorplan" },
    { label: "Location", href: "/location" },
    { label: "Amenities", href: "/amenities" },
    { label: "Gallery", href: "/gallery" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white border-white px-4 md:px-14 z-20">
      <div className="h-[69px] relative flex items-center justify-center">
        {/* Desktop Nav - Centered */}
        <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-4 lg:space-x-16 text-[#26650B] text-sm md:text-base font-base whitespace-nowrap">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => {
                const targetId = link.href.replace("/", "");
                const el = document.getElementById(targetId);
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                  window.history.pushState(null, "", link.href);
                }
                setIsOpen(false);
              }}
              className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#26650B] after:transition-all after:duration-300 hover:after:w-full cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Toggle - Right aligned */}
        <div
          className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 cursor-pointer md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {!isOpen ? (
            <img src={menuIcon} alt="Menu Icon" className="w-6 h-6" />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-green-900"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-[64px] left-0 w-full bg-white shadow-lg z-40 animate-fade-down backdrop-blur-sm">
          <div className="flex flex-col px-6 py-4 gap-4 text-green-900 text-base font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="hover:underline transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
