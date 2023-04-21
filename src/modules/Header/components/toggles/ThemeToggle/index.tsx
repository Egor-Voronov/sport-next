import {useMantineColorScheme} from '@mantine/core';
import {TbMoonStars, TbSun} from "react-icons/tb";
import {Toggle} from "../ui/baseToggle"

export const ThemeToggle = () => {
    const {colorScheme, toggleColorScheme} = useMantineColorScheme();

    return (
        <Toggle onClick={() => toggleColorScheme()}>
            {colorScheme === 'dark' ? <TbSun size="1.1rem"/> : <TbMoonStars size="1.2rem"/>}
        </Toggle>
    );
}