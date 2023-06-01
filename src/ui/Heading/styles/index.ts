import { createStyles, rem } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  container: {
    width: "100%",
    textTransform: "uppercase",
    fontWeight: 900,

    display: "flex",
    justifyContent: "center",
  },

  heading: {
    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(20),
    },
  },
}));
