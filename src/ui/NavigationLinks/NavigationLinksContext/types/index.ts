import { ReactNode } from "react";

export interface LinksContextProps {
  active: string;
  setActiveLink: (link: string) => void;
}

export interface LinksProviderProps {
  children: ReactNode;
}
