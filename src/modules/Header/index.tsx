import {Burger, Container, Group, Header, Paper, Transition,} from '@mantine/core';
import Link from "next/link";
import Image from 'next/image'
import {useDisclosure} from '@mantine/hooks';
import {HEADER_HEIGHT, useStyles} from "./styles";
import type {ILinksProps} from "./components/Links/types";
import {Links} from "./components/Links";
import type {ISocialProps} from "./components/Socials/types";
import {Socials} from "./components/Socials";
import {ThemeToggle} from "./components/toggles";
import type {FC, PropsWithChildren} from "react";

export const HeaderModule: FC<PropsWithChildren<ILinksProps & ISocialProps>> = ({links, socials}) => {
    const [opened, {toggle, close}] = useDisclosure(false);
    const {classes, cx} = useStyles();

    return (
        <Header id='top' height={HEADER_HEIGHT} mb={40} className={classes.root}>
            <Container className={classes.header}>
                <Group spacing={5} className={classes.linksDesktop}>
                    <Links links={links}/>
                </Group>
                <Link href='#top'>
                    <Image priority width={30} height={30} src='/assets/logo.svg' alt="img"/>
                </Link>

                <Group className={classes.socialsDesktop}>
                    <Socials socials={socials}/>
                </Group>
                <Group spacing={5}>
                    <ThemeToggle/>
                </Group>

                <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm"/>

                <Transition transition="pop-top-right" duration={200} mounted={opened}>
                    {(styles) => (
                        <Paper className={classes.dropdown} withBorder style={styles}>
                            <Links links={links} onClose={close}/>
                            <Socials socials={socials}/>
                        </Paper>
                    )}
                </Transition>
            </Container>
        </Header>
    );
}