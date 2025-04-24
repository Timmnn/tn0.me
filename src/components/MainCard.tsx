import type { ReactNode } from "react";

type MainCardProps = {
  children: ReactNode;
};

export const MainCard = ({ children }: MainCardProps) => {
  return (
    <div className="text-center z-10 backdrop-blur-sm bg-gradient-to-br from-ctp-crust to-slate-900/40 p-8 md:p-12 rounded-2xl max-w-3xl mx-auto border border-slate-600/50 shadow-2xl">
      {children}
    </div>
  );
};
