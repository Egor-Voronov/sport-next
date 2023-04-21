import {ActionIcon, Group} from '@mantine/core';
import {IToggleProps} from './types'

export const Toggle = ({onClick, children}: IToggleProps) => {
    return (
        <Group position="center" my="xl">
            <ActionIcon
                onClick={onClick}
                size="lg"
                sx={(theme) => ({
                    backgroundColor:
                        theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
                    color: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.blue[6],
                })}
            >
                {children}
            </ActionIcon>
        </Group>
    );
}