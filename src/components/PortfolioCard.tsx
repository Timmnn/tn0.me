import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useI18n } from "../i18n";
import { MainCard } from "./MainCard";
import { PiLightbulbFilament } from "react-icons/pi";
import { PiClock } from "react-icons/pi";
import { SiRedbull } from "react-icons/si";
import { PiCodeBold } from "react-icons/pi";
import { Button } from "./Button";
import { scrollToSection } from "@/lib/scrollToElement";

export default function PortfolioCard() {
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  const { t } = useI18n();
  const translate = t();

  const fullText = translate.home.subtitle;

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setShowCursor((prev) => !prev);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [typedText, fullText]);

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <MainCard>
        <div className="flex flex-col items-center gap-8 md:flex-row">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="h-40 w-40 overflow-hidden rounded-full border-4 border-ctp-crust shadow-xl">
              <img
                src="/profile.jpeg"
                alt="Profile"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 rounded-full border border-ctp-crust bg-ctp-mantle p-2 shadow-lg text-ctp-subtext0">
              <PiCodeBold color="currentColor" />
            </div>
          </motion.div>

          <div className="flex flex-col items-center space-y-4 md:items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-3xl font-bold text-ctp-subtext0 md:text-4xl">
                {translate.home.title} 👋
              </h1>
              <h2 className="mt-2 h-8 text-xl text-ctp-subtext1 md:text-2xl">
                {typedText}
                <span
                  className={`${showCursor ? "opacity-100" : "opacity-0"} transition-opacity text-ctp-subtext1`}
                >
                  |
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-2 flex w-full flex-col gap-3 md:flex-row"
            >
              <div className="rounded-lg border border-ctp-crust bg-ctp-base shadow-md">
                <div className="flex flex-col items-center p-4">
                  <div className="mb-2 rounded-full bg-ctp-mantle p-2 text-ctp-subtext0">
                    <PiLightbulbFilament color="currentColor" size={25} />
                  </div>
                  <div className="text-2xl font-bold text-ctp-subtext0">8+</div>
                  <div className="text-xs text-ctp-overlay1">
                    {translate.projects.stats.experience}
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-ctp-crust bg-ctp-base shadow-md">
                <div className="flex flex-col items-center p-4">
                  <div className="mb-2 rounded-full bg-ctp-mantle p-2 text-ctp-subtext0">
                    <PiClock color="currentColor" size={25} />
                  </div>
                  <div className="text-2xl font-bold text-ctp-subtext0">
                    10.000+
                  </div>
                  <div className="text-xs text-ctp-overlay1">
                    {translate.projects.stats.hours_coded}
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-ctp-crust bg-ctp-base shadow-md">
                <div className="flex flex-col items-center p-4">
                  <div className="mb-2 rounded-full bg-ctp-mantle p-2 text-ctp-subtext0">
                    <SiRedbull color="currentColor" size={25} />
                  </div>
                  <div className="text-2xl font-bold text-ctp-text">∞</div>
                  <div className="text-xs text-ctp-overlay0">
                    {translate.projects.stats.cans_redbull}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="w-full"
            >
              <div className="mt-2 text-center text-sm italic text-ctp-overlay1 md:text-left">
                &quot;{translate.home.slogan}&quot;
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-4 flex gap-4"
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("projects");
                }}
              >
                <Button>{translate.projects.see_projects}</Button>
              </a>

              <a href="#about">
                <Button variant="outline">{translate.projects.about_me}</Button>
              </a>
            </motion.div>
          </div>
        </div>
      </MainCard>
    </div>
  );
}
