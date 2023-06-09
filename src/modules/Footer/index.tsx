import { Group } from "@mantine/core";
import { useStyles } from "./styles";
import Link from "next/link";
import type { INavigationLinksProps } from "../../ui/NavigationLinks/types";
import { LinksContext } from "../../ui/NavigationLinks/NavigationLinksContext";
import type { ISocialProps } from "../../ui/Socials/types";
import { Socials } from "../../ui/Socials";
import { FC, PropsWithChildren, useContext } from "react";
import { Logo } from "../../ui/Logo";

export const FooterModule: FC<
  PropsWithChildren<INavigationLinksProps & ISocialProps>
> = ({ links, socials }) => {
  const { classes } = useStyles();
  const { setActiveLink } = useContext(LinksContext);
  const items = links.map((link) => (
    <Link
      href={link.link}
      key={link.label}
      className={classes.link}
      onClick={() => setActiveLink(link.link)}
      color="dimmed"
    >
      {link.label}
    </Link>
  ));

  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        <Group className={classes.links}>{items}</Group>

        <Logo />

        <Group spacing="xs" position="right" noWrap>
          <Socials socials={socials} />
        </Group>
      </div>
    </div>
  );
};
