import { createStyles, rem } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: rem(120),
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: `${theme.spacing.md} ${theme.spacing.md}`,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: rem(30),
    },
  },

  link: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    textDecoration: "none",

    "&:hover": {
      textDecoration: "underline",
    },
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "flex",
      justifyContent: "center",
      width: '100%',
      marginTop: theme.spacing.lg,
      marginBottom: theme.spacing.sm,
    },
  },
}));
