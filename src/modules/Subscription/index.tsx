import {
  createStyles,
  Text,
  Title,
  TextInput,
  Button,
  Image,
  rem,
} from "@mantine/core";
import image from "public/assets/subscription/banner.svg";
import type { FC } from "react";
import { Heading } from "../../ui/Heading";

const useStyles = createStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  wrapper: {
    maxWidth: rem(1280),
    display: "flex",
    alignItems: "center",
    padding: `calc(${theme.spacing.xl} * 2)`,
    borderRadius: theme.radius.md,
    border: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[3]
    }`,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column-reverse",
      padding: theme.spacing.xl,
    },
  },

  image: {
    maxWidth: "40%",

    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%",
    },
  },

  body: {
    paddingRight: `calc(${theme.spacing.xl} * 4)`,

    [theme.fn.smallerThan("sm")]: {
      paddingRight: 0,
      marginTop: theme.spacing.xl,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
    marginBottom: theme.spacing.md,
  },

  controls: {
    display: "flex",
    marginTop: theme.spacing.xl,
  },

  inputWrapper: {
    width: "100%",
    flex: "1",
  },

  input: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderRight: 0,
  },

  control: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
}));

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

            <div className={classes.controls}>
              <TextInput
                placeholder="Your email"
                classNames={{
                  input: classes.input,
                  root: classes.inputWrapper,
                }}
              />
              <Button className={classes.control}>Subscribe</Button>
            </div>
          </div>
          <Image src={image.src} className={classes.image} />
        </div>
      </div>
    </>
  );
};
