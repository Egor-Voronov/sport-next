import { Button, Container, Group, Text, Title } from "@mantine/core";
import Link from "next/link";
import { useStyles } from "./styles";
import { Meta } from "src/components/Meta";
import type { FC } from "react";

export const NotFound: FC = () => {
  const { classes } = useStyles();

  return (
    <>
      <Meta title="Error 404 - Not Found" />
      <Container className={classes.root}>
        <div className={classes.label}>404</div>
        <Title className={classes.title}>You have found a secret place.</Title>
        <Text
          color="dimmed"
          size="lg"
          align="center"
          className={classes.description}
        >
          Unfortunately, this is only a 404 page. You may have mistyped the
          address, or the page has been moved to another URL.
        </Text>
        <Group position="center">
          <Link href="/">
            <Button variant="subtle" size="md">
              Take me back to home page
            </Button>
          </Link>
        </Group>
      </Container>
    </>
  );
};
