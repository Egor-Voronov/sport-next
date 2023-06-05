import Link from "next/link";
import Image from "next/image";
import { FC, useContext } from "react";
import { LinksContext } from "../NavigationLinks/NavigationLinksContext";

export const Logo: FC = () => {
  const { setActiveLink } = useContext(LinksContext);
  return (
    <Link href="/" onClick={() => setActiveLink("/")}>
      <Image width={30} height={30} src="/assets/logo.svg" alt="Логотип" />
    </Link>
  );
};
