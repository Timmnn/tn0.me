import { ReactNode } from "react";

type AppFrameProps = {
  nav: ReactNode;
  children: ReactNode;
};

export const AppFrame = ({ nav, children }: AppFrameProps) => {
  return (
    <div
      data-name="app-frame"
      className="flex flex-col items-stretch md:flex-row mocha"
    >
      {nav}
      {children}
    </div>
  );
};
