import { Button, Container, Group, Text, Title } from "@mantine/core";
import { useRouter } from "next/router";
import { useStyles } from "./styles";
import { Meta } from "src/components/Meta";
import type { FC } from "react";

export const ServerError: FC = () => {
  const { classes } = useStyles();
  const router = useRouter();

  return (
    <>
      <Meta title="Error 500 - Server Error" />
      <div className={classes.root}>
        <Container>
          <div className={classes.label}>500</div>
          <Title className={classes.title}>Случилось что то нехорошее...</Title>
          <Text size="lg" align="center" className={classes.description}>
            Наши серверы не смогли обработать ваш запрос. Не волнуйтесь, наша
            команда разработчиков уже была уведомлена. Попробуйте обновить
            страницу.
          </Text>
          <Group position="center">
            <Button variant="white" size="md" onClick={() => router.reload()}>
              Обновить страницу
            </Button>
          </Group>
        </Container>
      </div>
    </>
  );
};
