import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  social: {
    width: "auto",

    [theme.fn.smallerThan("sm")]: {
      width: "auto",
      display: "flex",
      justifyContent: "center",
    },
  },
}));
