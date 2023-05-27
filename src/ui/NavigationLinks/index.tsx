import React, { useContext } from "react";
import { LinksContext } from "./NavigationLinksContext";
import { useStyles } from "./styles";
import { INavigationLinksProps } from "./types";
import Link from "next/link";

export const NavigationLinks: React.FC<INavigationLinksProps> = ({
  links,
  onClose,
}) => {
  const { active, setActiveLink } = useContext(LinksContext);
  const { classes, cx } = useStyles();

  const handleLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    link: string
  ) => {
    setActiveLink(link);
    if (onClose) {
      onClose();
    }
  };

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.label}
          href={link.link}
          className={cx(classes.link, {
            [classes.linkActive]: active === link.link,
          })}
          onClick={(event) => handleLinkClick(event, link.link)}
        >
          {link.label}
        </Link>
      ))}
    </>
  );
};
