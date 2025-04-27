import {
  useState,
  useEffect,
  createContext,
  ReactNode,
  useContext,
} from "react";

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
    text: `I'm a passionate programmer with 9 years of experience, primarily focused on web development. I thrive on building clean, efficient solutions and never settle for "just okay"—there's always a better way to do things. Curiosity drives me; I'm constantly learning and experimenting with new technologies to sharpen my skills and push boundaries. Whether it's refining code or tackling complex problems, I love the challenge of making things work right. Let's build something great together.`,
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
      cans_redbull: "Cans of Red Bull",
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

const translationDictionary = {
  [Language.EN]: en,
  [Language.DE]: de,
};

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof en; // Direct access to the current translation object
  // String path translation function for fallback/dynamic access
}

export const I18nContext = createContext<I18nContextType>({
  language: Language.EN,
  setLanguage: () => {},
  t: en,
});

interface I18nProviderProps {
  children: ReactNode;
  defaultLanguage?: Language;
}

export const I18nProvider = ({
  children,
  defaultLanguage = Language.EN,
}: I18nProviderProps) => {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === "undefined") return defaultLanguage;

    const savedLanguage = localStorage.getItem("language") as Language | null;
    return savedLanguage && Object.values(Language).includes(savedLanguage)
      ? savedLanguage
      : defaultLanguage;
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("language", language);
    }
  }, [language]);

  const currentTranslations = translationDictionary[language];
  const value = {
    language,
    setLanguage,
    t: currentTranslations,
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

// Custom hook for using the i18n context
export const useI18n = () => {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
};
