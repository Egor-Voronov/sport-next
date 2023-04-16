import {ActionIcon, Group, useMantineTheme} from "@mantine/core";
import {useStyles} from "./styles";
import type {ISocialProps} from './types'

export const Socials = ({socials}: ISocialProps) => {
    const theme = useMantineTheme();
    const {classes, cx} = useStyles();

    return (
        <Group spacing={5} className={classes.social} noWrap>
            {socials.map((social, index) => (
                <ActionIcon key={index} size="lg">
                    <a href={social.link}>
                        <social.Icon size="1.1rem" color={theme.colors.blue[6]}/>
                    </a>
                </ActionIcon>
            ))}
        </Group>
    );
};