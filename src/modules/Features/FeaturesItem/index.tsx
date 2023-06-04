import React, { FC } from "react";
import { Card, rem, Text } from "@mantine/core";
import { useStyles } from "./style";
import type { IFeaturesItemProps } from "./types";

export const FeaturesItem: FC<IFeaturesItemProps> = ({ feature }) => {
  const { classes } = useStyles();

  return (
    <Card
      key={feature.title}
      shadow="md"
      radius="md"
      className={classes.card}
      padding="xl"
    >
      <feature.icon size={rem(50)} />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  );
};
