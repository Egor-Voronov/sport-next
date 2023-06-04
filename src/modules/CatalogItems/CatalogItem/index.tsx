import { Image, Card, Text, Group } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { useStyles } from "./styles";
import type { FC, PropsWithChildren } from "react";
import type { ICatalogItemProps } from "./types";

export const CatalogItem: FC<PropsWithChildren<ICatalogItemProps>> = ({
  id,
  images,
  heading,
  paragraph,
  clarification,
}) => {
  const { classes } = useStyles();

  const slides = images.map((image) => (
    <Carousel.Slide key={id}>
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

      <Group spacing={5}>
        <Text fz="xs" fw={500} className={classes.clarificationContainer}>
          {clarification?.map((el) => (
            <span key={id}>
              <b className={classes.clarificationBold}>{el.heading}</b> -{" "}
              {el.description}
            </span>
          ))}
        </Text>
      </Group>

      <Text fz="sm" c="dimmed" mt="sm">
        {paragraph}
      </Text>
    </Card>
  );
};
