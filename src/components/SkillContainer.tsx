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
      className={`grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 w-full ${className}`}
    >
      {children}
    </div>
  );
};
