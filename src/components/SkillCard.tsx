import { ReactNode } from "react";

type SkillCardProps = {
  icon: ReactNode;
  label: string;
  className?: string;
  url: string;
};

export const SkillCard = ({
  icon,
  label,
  className = "",
  url,
}: SkillCardProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-xl ${className}`}
    >
      <div className="h-full bg-slate-800/60 hover:bg-slate-700/70 border border-slate-700/60 p-4 rounded-xl transition-all duration-200 flex flex-col items-center justify-center gap-3 text-center hover:shadow-lg">
        <div className="w-14 h-14 flex items-center justify-center text-sky-400 group-hover:text-sky-300 transition-colors">
          {/* Directly render the icon prop without conditional logic */}
          {icon}
        </div>
        <p className="text-slate-200 group-hover:text-white text-sm font-medium transition-colors">
          {label}
        </p>
      </div>
    </a>
  );
};
