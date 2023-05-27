import { ActionIcon, Group } from "@mantine/core";
import { IToggleProps } from "./types";
import type { FC, PropsWithChildren } from "react";

export const Toggle: FC<PropsWithChildren<IToggleProps>> = ({
  onClick,
  children,
}) => {
  return (
    <Group position="center" my="xl">
      <ActionIcon
        onClick={onClick}
        size="lg"
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
          color:
            theme.colorScheme === "dark"
              ? theme.colors.yellow[4]
              : theme.colors.blue[6],
        })}
      >
        {children}
      </ActionIcon>
    </Group>
  );
};
