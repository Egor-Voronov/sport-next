import { createStyles, rem } from "@mantine/core";

export const useStyles = createStyles(() => ({
  container: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: rem(50),
  },
}));
