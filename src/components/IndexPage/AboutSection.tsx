import { useI18n } from "@/i18n";
import { Card } from "../Card";
import { scrollToSection } from "@/lib/scrollToElement";

export const AboutSection = () => {
  const { t } = useI18n();

  return (
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">
        My Professional Background
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 ">
        <Card className="bg-gradient-to-br from-ctp-crust to-slate-900 transition-colors duration-300 h-full hover:to-slate-900/70">
          <div className="p-6">
            <div className="text-indigo-400 mb-4">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">
              Experience
            </h3>
            <p className="text-slate-300">{t.about.experience}</p>
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-ctp-crust to-slate-900 transition-colors duration-300 h-full hover:to-slate-900/70">
          <div className="p-6">
            <div className="text-indigo-400 mb-4">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">
              Development Philosophy
            </h3>
            <p className="text-slate-300">{t.about.philosophy}</p>
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-ctp-crust to-slate-900 transition-colors duration-300 h-full hover:to-slate-900/70">
          <div className="p-6">
            <div className="text-indigo-400 mb-4">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">
              Problem Solving
            </h3>
            <p className="text-slate-300">{t.about.problem_solving}</p>
          </div>
        </Card>
      </div>

      <Card className="bg-gradient-to-br from-ctp-crust to-slate-900 transition-colors duration-300 h-full hover:to-slate-900/70 mb-12">
        <div className="p-8">
          <h3 className="text-2xl font-bold text-white mb-6">
            Technical Leadership
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-indigo-300 mb-3">
                Project Approach
              </h4>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start">
                  <span className="text-indigo-400 mr-2">✓</span>
                  Requirements analysis and technical planning
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-400 mr-2">✓</span>
                  Architecture design and technology selection
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-400 mr-2">✓</span>
                  Implementation with best practices
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-indigo-300 mb-3">
                Collaboration Style
              </h4>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start">
                  <span className="text-indigo-400 mr-2">✓</span>
                  Clear technical communication
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-400 mr-2">✓</span>
                  Documentation-focused
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-400 mr-2">✓</span>
                  Knowledge sharing and mentoring
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Card>

      <div className="text-center">
        <h3 className="text-xl font-semibold text-white mb-4">
          Want to know more about my work?
        </h3>
        <p className="text-slate-300 mb-6 max-w-2xl mx-auto">{t.about.cta}</p>
        <button
          onClick={() => scrollToSection("projects")}
          className="px-6 py-3 bg-ctp-blue hover:bg-ctp-blue-700 text-black rounded-lg transition-colors duration-300 inline-flex items-center"
        >
          View Projects
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
