import {Burger, Container, Group, Header, Paper, Transition,} from '@mantine/core';
import {useDisclosure} from '@mantine/hooks';
import {HEADER_HEIGHT, useStyles} from "./styles";
import {Links} from "./components/Links";
import type {ILinksProps} from "./components/Links/types";


export function HeaderModule({links}: ILinksProps) {
    const [opened, {toggle, close}] = useDisclosure(false);
    const {classes, cx} = useStyles();

    return (
        <Header height={HEADER_HEIGHT} mb={120} className={classes.root}>
            <Container className={classes.header}>
                <img src="./favicon.svg" alt="img"/>
                <Group spacing={5} className={classes.links}>
                    <Links links={links}/>
                </Group>

                <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm"/>

                <Transition transition="pop-top-right" duration={200} mounted={opened}>
                    {(styles) => (
                        <Paper className={classes.dropdown} withBorder style={styles}>
                            <Links links={links} onClose={close}/>
                        </Paper>
                    )}
                </Transition>
            </Container>
        </Header>
    );
}