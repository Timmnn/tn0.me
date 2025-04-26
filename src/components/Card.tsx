import { ReactNode } from "react";

type CardProps = {
  children?: ReactNode;
  className?: string;
};

export const Card = ({ children = "", className = "" }: CardProps) => {
  return (
    <div
      className={` p-6 rounded-2xl border border-slate-600 bg-gradient-to-br from-ctp-crust to-slate-900 ${className}`}
    >
      {children}
    </div>
  );
};
