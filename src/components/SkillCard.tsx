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
      className="flex flex-col items-center bg-ctp-base  rounded-lg p-4 transition-colors duration-300 hover:to-slate-900/70"
    >
      <div className="w-12 h-12 mb-2">{icon}</div>
      <span className="text-slate-300">{label}</span>
    </a>
  );
};
