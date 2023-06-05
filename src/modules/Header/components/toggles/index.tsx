import { useMantineColorScheme } from "@mantine/core";
import { TbMoonStars, TbSun } from "react-icons/tb";
import { Toggle } from "./ui/baseToggle";
import type { FC } from "react";

export const ThemeToggle: FC = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Toggle onClick={() => toggleColorScheme()}>
      {colorScheme === "dark" ? (
        <TbSun size="1.1rem" />
      ) : (
        <TbMoonStars size="1.2rem" />
      )}
    </Toggle>
  );
};

