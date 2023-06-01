import type { FC, PropsWithChildren } from "react";
import type { IHeadingProps } from "./types";
import { useStyles } from "./styles";

export const Heading: FC<PropsWithChildren<IHeadingProps>> = ({ text }) => {
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      <h1 className={classes.heading}>{text}</h1>
    </div>
  );
};
