import {
  Burger,
  Container,
  Group,
  Header,
  Paper,
  Transition,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { HEADER_HEIGHT, useStyles } from "./styles";
import type { INavigationLinksProps } from "../../ui/NavigationLinks/types";
import { NavigationLinks } from "../../ui/NavigationLinks";
import type { ISocialProps } from "../../ui/Socials/types";
import { Socials } from "../../ui/Socials";
import { ThemeToggle } from "./components/toggles";
import type { FC, PropsWithChildren } from "react";
import React, { useContext } from "react";
import { LinksContext } from "../../ui/NavigationLinks/LinksContext";
import { Logo } from "../../ui/Logo";

export const HeaderModule: FC<
  PropsWithChildren<INavigationLinksProps & ISocialProps>
> = ({ links, socials }) => {
  const [opened, { toggle, close }] = useDisclosure(false);
  const { classes, cx } = useStyles();

  const { active, setActiveLink } = useContext(LinksContext);

  return (
    <Header id="top" height={HEADER_HEIGHT} mb={40} className={classes.root}>
      <Container className={classes.header}>
        <Group spacing={5} className={classes.linksDesktop}>
          <NavigationLinks links={links} />
        </Group>

        <Logo />

        <Group className={classes.socialsDesktop}>
          <Socials socials={socials} />
        </Group>
        <Group spacing={5}>
          <ThemeToggle />
        </Group>

        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
        />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              <NavigationLinks links={links} onClose={close} />
              <Socials socials={socials} />
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
};
