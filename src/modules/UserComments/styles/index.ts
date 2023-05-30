import { createStyles, rem } from "@mantine/core";

export const useStyles = createStyles(() => ({
  container: {
    paddingTop: 100,

    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: rem(50),
  },
}));
