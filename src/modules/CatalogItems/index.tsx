import type { FC } from "react";
import {useState, useEffect} from "react";
import { CatalogItem } from "./CatalogItem";
import { Heading } from "../../ui/Heading";
import { useStyles } from "./styles";
import { fetchCatalogItems } from "../../../api/operations/fetchData.mjs";
import type {ICatalogItem} from './types'

export const CatalogItems: FC = () => {
  const { classes } = useStyles();
  const [items, setItems] = useState<ICatalogItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedItems = await fetchCatalogItems();
      setItems(fetchedItems[0].catalogItems);
    };

    fetchData();
  }, []);


  return (
    <>
      <Heading text="каталог" />
      <div className={classes.container} id="catalog">
        {items.map((item) => {
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
