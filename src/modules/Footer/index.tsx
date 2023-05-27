import { createStyles, Anchor, Group, ActionIcon, rem } from "@mantine/core";
import { useStyles } from "./styles";
import Link from "next/link";
import Image from "next/image";
import type { ILinksProps } from "../../components/Links/types";
import { Links } from "../../components/Links";
import { LinksContext } from "../../components/Links/LinksContext";
import type { ISocialProps } from "../../components/Socials/types";
import { Socials } from "../../components/Socials";
import { FC, PropsWithChildren, useContext } from "react";
import { Logo } from "../../components/Logo";

export const FooterModule: FC<
  PropsWithChildren<ILinksProps & ISocialProps>
> = ({ links, socials }) => {
  const { classes } = useStyles();
  const { active, setActiveLink } = useContext(LinksContext);
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
