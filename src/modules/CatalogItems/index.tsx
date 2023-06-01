import type { FC } from "react";
import { CatalogItem } from "./CatalogItem";
import { Heading } from "../../ui/Heading";
import { useStyles } from "./styles";

export const CatalogItems: FC = () => {
  const { classes } = useStyles();

  return (
    <>
      <Heading text="каталог" />
      <div className={classes.container}>
        <CatalogItem />
      </div>
    </>
  );
};
