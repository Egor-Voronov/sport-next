import { Button, Container, Overlay, Text, Title } from "@mantine/core";
import { useStyles } from "./styles";
import type { FC } from "react";
import { PropsWithChildren } from "react";
import { IBaseHeroProps, ITextProps } from "./types";

export const BaseHeroModule: FC<
  PropsWithChildren<IBaseHeroProps & ITextProps>
> = ({ backgroundImageUrl, text }) => {
  const { classes } = useStyles();

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
        <Title className={classes.title}>{text.heading}</Title>
        <Text className={classes.description} size="xl" mt="xl">
          {text.paragraph}
        </Text>

        <Button
          variant="gradient"
          size="xl"
          radius="xl"
          className={classes.control}
        >
          {text.button}
        </Button>
      </Container>
    </div>
  );
};
