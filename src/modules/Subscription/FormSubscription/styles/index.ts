import { createStyles, rem } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
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
    backgroundColor: theme.colors.blue[6],
    border: "none",
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
}));
