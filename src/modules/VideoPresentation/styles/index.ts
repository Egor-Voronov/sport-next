import { createStyles, rem } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",

    width: "100%",

    [theme.fn.largerThan("sm")]: {
      marginBottom: 60,
    },
  },

  video: {
    maxWidth: rem(1280),

    [theme.fn.smallerThan("sm")]: {
      width: "100%",
    },
  },
}));
