import {useMantineColorScheme} from '@mantine/core';
import {TbMoonStars, TbSun} from "react-icons/tb";
import {Toggle} from "../ui/baseToggle"

export const LangToggle = () => {
    const {colorScheme, toggleColorScheme} = useMantineColorScheme();

    return (
        <Toggle onClick={() => {}}>
            {colorScheme === 'dark' ? 'ру' : 'en'}
        </Toggle>
    );
}