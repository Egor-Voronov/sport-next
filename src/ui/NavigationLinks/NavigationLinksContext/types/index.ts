import type { ReactNode } from "react";

export interface LinksContextProps {
  active: string;
  // eslint-disable-next-line no-unused-vars
  setActiveLink: (link: string) => void;
}

export interface LinksProviderProps {
  children: ReactNode;
}
