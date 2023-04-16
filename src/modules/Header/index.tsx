import {Burger, Container, Group, Header} from '@mantine/core';
import {useDisclosure} from '@mantine/hooks';
import type {ILinksProps} from "./components/Links/types"
import {Links} from './components/Links'
import {Socials} from './components/Socials'
import {useStyles} from "./styles";
// import {IconBrandInstagram, IconBrandTwitter, IconBrandYoutube} from '@tabler/icons-react';

export function HeaderModule({links}: ILinksProps) {
    const [opened, {toggle}] = useDisclosure(false);
    const {classes, cx} = useStyles();

    return (
        <Header height={56} mb={120}>
            <Container className={classes.inner}>
                <Burger opened={opened} onClick={toggle} size="sm" className={classes.burger}/>
                <Links links={links}/>
                <img src="./favicon.svg" alt='img'/>
                <Socials />
            </Container>
        </Header>
    );
}