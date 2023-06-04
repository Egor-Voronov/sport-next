import type { FC } from "react";
import { CatalogItem } from "./CatalogItem";
import { Heading } from "../../ui/Heading";
import { useStyles } from "./styles";
import { props } from "./props";

export const CatalogItems: FC = () => {
  const { classes } = useStyles();

  return (
    <>
      <Heading text="каталог" />
      <div className={classes.container} id="catalog">
        {props.map((item) => {
          return (
            <CatalogItem
              key={item.id}
              id={item.id}
              images={item.images}
              heading={item.heading}
              paragraph={item.paragraph}
              clarification={item.clarification}
            />
          );
        })}
      </div>
    </>
  );
};
