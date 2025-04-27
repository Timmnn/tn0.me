import { Language, useI18n } from "@/i18n";
import { Dropdown } from "@/components/Dropdown";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  PiGithubLogoFill,
  PiLinkedinLogoFill,
  PiStackOverflowLogoFill,
  PiX,
  PiList,
} from "react-icons/pi";
import { scrollToSection } from "@/lib/scrollToElement";

export const NavBar = ({ activeSection }: { activeSection: string }) => {
  const { t, setLanguage, language } = useI18n();

  const nav_items = [
    {
      name: t.nav.home,
      id: "home",
      icon: "🏠",
    },
    {
      name: t.nav.about,
      id: "about",
      icon: "👤",
    },
    {
      name: t.skills.title,
      id: "skills",
      icon: "🛠️",
    },
    {
      name: t.nav.projects,
      id: "projects",
      icon: "📂",
    },
  ];

  const social_icons = [
    {
      url: "https://github.com/Timmnn",
      icon: (
        <PiGithubLogoFill
          size={32}
          className="text-slate-400 hover:text-white transition-colors"
        />
      ),
      label: "GitHub",
    },
    {
      url: "https://www.linkedin.com/in/timm-nicolaizik/",
      icon: (
        <PiLinkedinLogoFill
          size={32}
          className="text-slate-400 hover:text-white transition-colors"
        />
      ),
      label: "LinkedIn",
    },
    {
      url: "https://stackoverflow.com/users/15545451/timm-nicolaizik",
      icon: (
        <PiStackOverflowLogoFill
          size={32}
          className="text-slate-400 hover:text-white transition-colors"
        />
      ),
      label: "Stack Overflow",
    },
  ];

  const [navOpen, setNavOpen] = useState(false);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const navElement = document.getElementById("mobile-nav");
      const burgerButton = document.getElementById("burger-button");

      if (
        navOpen &&
        navElement &&
        !navElement.contains(event.target as Node) &&
        burgerButton &&
        !burgerButton.contains(event.target as Node)
      ) {
        setNavOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [navOpen]);

  // Close mobile menu when a section is clicked
  const handleNavClick = () => {
    if (window.innerWidth < 768) {
      setNavOpen(false);
    }
  };

  return (
    <aside className="relative flex w-full flex-col border-r border-r-slate-600 bg-ctp-crust md:h-screen md:w-64 md:p-6">
      {/* Mobile Header */}
      <div className="flex h-16 items-center justify-between px-4 md:hidden">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex items-center space-x-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ctp-mantle border-2 border-ctp-surface0 shadow-sm transition-transform hover:scale-105">
            <span className="text-sm font-bold text-ctp-text">TN</span>
          </div>
          <span className="text-base font-semibold text-ctp-text tracking-tight">
            Timm Nicolaizik
          </span>
        </motion.div>

        <button
          id="burger-button"
          onClick={() => setNavOpen(!navOpen)}
          aria-label={navOpen ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center rounded-md hover:bg-slate-700 transition-colors md:hidden"
        >
          {navOpen ? (
            <PiX size={24} className="text-white" />
          ) : (
            <PiList size={24} className="text-white" />
          )}
        </button>
      </div>

      {/* Content area with conditional display for mobile */}
      <div
        id="mobile-nav"
        className={`${
          navOpen ? "flex" : "hidden md:flex"
        } flex-col h-full justify-between bg-ctp-crust p-4 md:p-0 md:pt-4 w-full absolute top-16 left-0 z-20 md:static md:top-0`}
      >
        {/* Logo and language selector */}
        <div className="flex flex-col items-center mb-6 md:mb-12">
          <div className="relative hidden md:flex h-16 w-16 items-center justify-center overflow-visible rounded-full border-2 bg-slate-950">
            <div className="absolute inset-0 top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 scale-110 animate-pulse rounded-full bg-gradient-to-r from-slate-400 to-slate-600 opacity-75 blur-lg"></div>
            <span className="relative z-10 text-2xl font-bold text-white">
              TN
            </span>
          </div>

          <h2 className="hidden md:block mt-4 text-xl font-semibold text-white">
            Timm Nicolaizik
          </h2>

          <div className="w-full max-w-xs mt-4">
            <Dropdown
              value={language}
              onChange={(val) => setLanguage(val)}
              options={[
                {
                  id: "en" as Language,
                  label: t.language_picker.english,
                },
                {
                  id: "de" as Language,
                  label: t.language_picker.german,
                },
              ]}
            />
          </div>
        </div>

        {/* Navigation items */}
        <nav className="flex-grow mb-6 md:mb-12">
          <ul className="flex flex-col gap-2">
            {nav_items.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    scrollToSection(item.id);
                    e.preventDefault();

                    handleNavClick();
                  }}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-colors ${
                    activeSection === item.id
                      ? "bg-ctp-blue text-black"
                      : "text-white hover:bg-ctp-blue-100 hover:text-black"
                  }`}
                >
                  <span className="flex-shrink-0">{item.icon}</span>
                  <span>{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social links */}
        <div className="mt-auto">
          <div className="flex justify-center gap-4 p-2">
            {social_icons.map((social) => (
              <a
                key={social.url}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="rounded-md p-2 hover:bg-slate-700 transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};
