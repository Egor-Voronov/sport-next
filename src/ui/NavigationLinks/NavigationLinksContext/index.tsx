import React, { createContext, useState, PropsWithChildren } from "react";
import type { LinksProviderProps, LinksContextProps } from "./types";

export const LinksContext = createContext<LinksContextProps>({
  active: "",
  setActiveLink: () => {},
});

export const LinksProvider: React.FC<PropsWithChildren<LinksProviderProps>> = ({
  children,
}) => {
  const [active, setActive] = useState("");

  const setActiveLink = (link: string) => {
    setActive(link);
  };

  return (
    <LinksContext.Provider value={{ active, setActiveLink }}>
      {children}
    </LinksContext.Provider>
  );
};
