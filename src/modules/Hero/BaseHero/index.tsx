import { Button, Container, Overlay, Text, Title } from "@mantine/core";
import { useStyles } from "./styles";
import type { FC } from "react";
import { PropsWithChildren, useContext } from "react";
import { IBaseHeroProps } from "./types";
import Link from "next/link";
import { LinksContext } from "../../../ui/NavigationLinks/NavigationLinksContext";

export const BaseHeroModule: FC<PropsWithChildren<IBaseHeroProps>> = ({
  backgroundImageUrl,
  text,
  btnPath,
}) => {
  const { classes } = useStyles();
  const { active, setActiveLink } = useContext(LinksContext);
  const splitHeading = text.heading.split("\n");

  return (
    <div
      className={classes.hero}
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container}>
        {splitHeading.map((line, index) => (
          <Title
            key={index}
            className={classes.title}
            style={{ display: "block" }}
          >
            {line}
          </Title>
        ))}
        <Text className={classes.description} size="xl" mt="xl">
          {text.paragraph}
        </Text>

        <Link
          href={btnPath}
          onClick={
            btnPath.includes("/") ? () => setActiveLink(btnPath) : undefined
          }
        >
          <Button
            variant="gradient"
            size="xl"
            radius="xl"
            className={classes.control}
          >
            {text.button}
          </Button>
        </Link>
      </Container>
    </div>
  );
};
