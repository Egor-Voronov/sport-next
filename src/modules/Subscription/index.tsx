import { Text, Title, Image } from "@mantine/core";
import image from "public/assets/subscription/banner.svg";
import type { FC } from "react";
import { Heading } from "../../ui/Heading";
import { useStyles } from "./styles";
import { FormSubscription } from "./FormSubscription";

export const Subscription: FC = () => {
  const { classes } = useStyles();

  return (
    <>
      <Heading text="подписаться на рассылу" />
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <div className={classes.body}>
            <Title className={classes.title}>Заинтересовался товарами?</Title>
            <Text fw={500} fz="lg" mb={5}>
              Подпишись на нашу новостную рассылку!
            </Text>
            <Text fz="sm" c="dimmed">
              Подпишитесь на нашу новостную рассылку чтобы всегда знать
              актуальную информацию о спортивных товарах SPORT NEXT.
            </Text>
            <FormSubscription />
          </div>
          <Image alt="Баннер" src={image.src} className={classes.image} />
        </div>
      </div>
    </>
  );
};
