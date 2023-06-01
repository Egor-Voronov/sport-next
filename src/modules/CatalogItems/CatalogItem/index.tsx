import { Image, Card, Text, Group } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { useStyles } from "./styles";
import type { FC, PropsWithChildren } from "react";
import type { ICatalogItemProps } from "./types";

export const CatalogItem: FC<PropsWithChildren<ICatalogItemProps>> = ({
  images,
  heading,
  paragraph,
}) => {
  const { classes } = useStyles();

  const slides = images.map((image) => (
    <Carousel.Slide key={image}>
      <Image
        onClick={(e) => {
          e.stopPropagation();
        }}
        alt="Изображение товара в каталоге"
        src={image}
        height={650}
      />
    </Carousel.Slide>
  ));

  return (
    <Card radius="md" withBorder padding="xl" className={classes.container}>
      <Card.Section>
        <Carousel
          withIndicators
          loop
          classNames={{
            root: classes.carousel,
            controls: classes.carouselControls,
            indicator: classes.carouselIndicator,
          }}
        >
          {slides}
        </Carousel>
      </Card.Section>

      <Group position="apart" mt="lg">
        <h1 className={classes.heading}>{heading}</h1>
      </Group>

      <Text fz="sm" c="dimmed" mt="sm">
        {paragraph}
      </Text>
    </Card>
  );
};
