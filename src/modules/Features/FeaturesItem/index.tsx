import React, { FC, PropsWithChildren } from "react";
import { Card, Text } from "@mantine/core";
import { rem } from "@mantine/styles";
import type { IFeaturesProps } from "./types";

export const FeaturesItem: FC<PropsWithChildren<IFeaturesProps>> = ({
  id,
  title,
  description,
  icon,
}) => {
  const Icon = icon;

  return (
    <Card shadow="md" radius="md" padding="xl">
      <Icon size={rem(50)} />
      <Text fz="lg" fw={500} mt="md">
        {title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {description}
      </Text>
    </Card>
  );
};
