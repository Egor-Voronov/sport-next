import {Burger, Container, Group, Header} from '@mantine/core';
import {useDisclosure} from '@mantine/hooks';
import type {ILinksProps} from "./components/Links/types"
import {Links} from './components/Links'
import {useStyles} from "./styles";

// import {IconBrandInstagram, IconBrandTwitter, IconBrandYoutube} from '@tabler/icons-react';
// import { MantineLogo } from '@mantine/ds';

export function HeaderModule({links}: ILinksProps) {
    const [opened, {toggle}] = useDisclosure(false);
    const {classes, cx} = useStyles();

    return (
        <Header height={56} mb={120}>
            <Container className={classes.inner}>
                <Burger opened={opened} onClick={toggle} size="sm" className={classes.burger}/>
                <Links links={links}/>

                <img src="./favicon.svg" alt='img'/>
                {/*size={28}*/}

                <Group spacing={0} className={classes.social} position="right" noWrap>
                    {/*<ActionIcon size="lg">*/}
                    {/*    <IconBrandTwitter size="1.1rem" stroke={1.5}/>*/}
                    {/*</ActionIcon>*/}
                    {/*<ActionIcon size="lg">*/}
                    {/*    <IconBrandYoutube size="1.1rem" stroke={1.5}/>*/}
                    {/*</ActionIcon>*/}
                    {/*<ActionIcon size="lg">*/}
                    {/*    <IconBrandInstagram size="1.1rem" stroke={1.5}/>*/}
                    {/*</ActionIcon>*/}
                </Group>
            </Container>
        </Header>
    );
}