"use client";

import { useState, useEffect } from "react";

const en = {
  language_picker: {
    english: "English",
    german: "German",
  },
  home: {
    title: "Hi, I'm Timm",
    subtitle: "I'm a Software Engineer",
    slogan:
      "Passionate about creating elegant solutions to complex problems with clean, maintainable code.",
  },
  nav: {
    home: "Home",
    about: "About",
    skills: "Skills",
    projects: "Projects",
    cv: "Download CV",
  },
  about: {
    section_title: "About Me",
    subtitle: "Passionate developer creating digital experiences",
    title: "Technology Enthusiast",
    text: `I'm a passionate programmer with 9 years of experience, primarily focused on web development. I thrive on building clean, efficient solutions and never settle for "just okay"—there's always a better way to do things. Curiosity drives me; I’m constantly learning and experimenting with new technologies to sharpen my skills and push boundaries. Whether it's refining code or tackling complex problems, I love the challenge of making things work right. Let's build something great together.`,
    experience:
      "With [X] years in the industry, I've delivered solutions for clients ranging from startups to enterprises, specializing in [your specialties].",
    philosophy:
      "I focus on creating maintainable, efficient systems with clean architecture. My approach balances technical excellence with practical business needs.",
    problem_solving:
      "I thrive on tackling complex technical challenges and finding elegant solutions that scale. My strength is breaking down problems into manageable components.",
    cta: "Browse my projects below or get in touch to discuss how I can help with your next initiative.",
  },

  projects: {
    title: "Projects",
    wip: "Work in Progress",
    stats: {
      experience: "Years Experience",
      cans_redbull: "Cand of Red Bull",
      hours_coded: "Hours Coded",
    },
    see_projects: "View Projects",
    about_me: "About Me",
  },
  skills: {
    title: "Skills",
    categories: {
      languages: "Programming Languages",
      cloud: "Cloud Providers",
      frameworks: "Frameworks / Libraries",
      databases: "Databases",
      tools: "Tools",
    },
  },
};

const de: typeof en = {
  language_picker: {
    english: "Englisch",
    german: "Deutsch",
  },
  home: {
    title: "Hi, ich bin Timm",
    subtitle: "Ich bin Software Engineer",
    slogan:
      "Leidenschaft für elegante Lösungen komplexer Probleme – mit sauberem, wartbarem Code",
  },
  nav: {
    home: "Start",
    about: "Über Mich",
    skills: "Skills",
    projects: "Projekte",
    cv: "Lebenslauf",
  },
  about: {
    section_title: "Über Mich",
    subtitle: "Passionate developer creating digital experiences",
    title: "Technologie-Enthusiast",
    text: `Seit 9 Jahren programmiere ich mit Leidenschaft – vor allem im Web. Für mich gibt es kein "das reicht schon": Ich liebe es, elegante Lösungen zu finden und Code immer weiter zu verbessern. Die Tech-Welt verändert sich ständig – und ich verändere mich mit ihr. Neue Technologien, bessere Ansätze, frische Herausforderungen? Immer her damit! Denn für mich ist Programmieren kein Job, sondern eine ständige Lernreise.`,
    experience:
      "With [X] years in the industry, I've delivered solutions for clients ranging from startups to enterprises, specializing in [your specialties].",
    philosophy:
      "I focus on creating maintainable, efficient systems with clean architecture. My approach balances technical excellence with practical business needs.",
    problem_solving:
      "I thrive on tackling complex technical challenges and finding elegant solutions that scale. My strength is breaking down problems into manageable components.",
    cta: "Browse my projects below or get in touch to discuss how I can help with your next initiative.",
  },
  projects: {
    title: "Projekte",
    wip: "In Arbeit",
    stats: {
      experience: "Jahre Erfahrung",
      cans_redbull: "Dosen Red Bull",
      hours_coded: "Stunden Programmiert",
    },
    see_projects: "Projekte ansehen",
    about_me: "Über Mich",
  },
  skills: {
    title: "Fähigkeiten",
    categories: {
      languages: "Programmiersprachen",
      cloud: "Cloud-Anbieter",
      frameworks: "Frameworks / Libraries",
      databases: "Datenbanken",
      tools: "Tools",
    },
  },
};

export enum Language {
  EN = "en",
  DE = "de",
}

// Custom event name for language changes
const LANGUAGE_CHANGE_EVENT = "languageChange";

export const useI18n = () => {
  const [, forceUpdate] = useState({});

  // Get language from sessionStorage or default to EN
  const getStoredLanguage = (): Language => {
    if (typeof sessionStorage !== "undefined") {
      return (sessionStorage.getItem("language") as Language) || Language.EN;
    }
    return Language.EN;
  };

  useEffect(() => {
    const handleLanguageChange = () => {
      forceUpdate({});
    };

    // Listen for the custom event
    window.addEventListener(LANGUAGE_CHANGE_EVENT, handleLanguageChange);

    // Clean up
    return () => {
      window.removeEventListener(LANGUAGE_CHANGE_EVENT, handleLanguageChange);
    };
  }, []);

  const language_map = {
    [Language.EN]: en,
    [Language.DE]: de,
  };

  const setLanguage = (language: Language) => {
    if (typeof sessionStorage !== "undefined") {
      sessionStorage.setItem("language", language);
    }
    // Dispatch event to notify all components
    window.dispatchEvent(new Event(LANGUAGE_CHANGE_EVENT));
  };

  const currentLanguage = getStoredLanguage();

  return {
    setLanguage,
    t: () => language_map[currentLanguage],
    language: currentLanguage,
  };
};
