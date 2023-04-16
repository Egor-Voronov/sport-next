import {Group, ActionIcon, useMantineTheme} from "@mantine/core";
import {useStyles} from "./styles";
import { FaTelegramPlane } from 'react-icons/fa';

export const Socials = () => {
    const theme = useMantineTheme();
    const {classes, cx} = useStyles();
    return (
        <Group spacing={0} className={classes.social} position="right" noWrap>
            <ActionIcon size="lg">
                <FaTelegramPlane size="1.1rem" color={theme.colors.blue[6]} />
            </ActionIcon>
        </Group>
    )
}
