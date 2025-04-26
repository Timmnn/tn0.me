import { ReactNode } from "react";

type SkillContainerProps = {
  children: ReactNode;
  className?: string;
};

export const SkillContainer = ({
  children,
  className = "",
}: SkillContainerProps) => {
  return (
    <div
      className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 ${className}`}
    >
      {children}
    </div>
  );
};
