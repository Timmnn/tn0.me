import { ReactNode } from "react";

type CardProps = {
  children?: ReactNode;
  className?: string;
};

export const Card = ({ children = "", className = "" }: CardProps) => {
  return (
    <div
      className={`bg-slate-800 p-6 rounded-2xl border border-slate-600 ${className}`}
    >
      {children}
    </div>
  );
};
