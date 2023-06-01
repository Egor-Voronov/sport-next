import { createStyles, rem } from "@mantine/core";

export const useStyles = createStyles(() => ({
  container: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    gap: rem(90),
  },
}));
