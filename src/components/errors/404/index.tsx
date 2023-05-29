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
        <Title className={classes.title}>Вы нашли секретное место.</Title>
        <Text
          color="dimmed"
          size="lg"
          align="center"
          className={classes.description}
        >
          К сожалению, это всего лишь страница 404. Возможно, вы неправильно
          ввели адрес, или страница была перемещена на другой URL.
        </Text>
        <Group position="center">
          <Link href="/">
            <Button variant="subtle" size="md">
              Вернуться на главную
            </Button>
          </Link>
        </Group>
      </Container>
    </>
  );
};
