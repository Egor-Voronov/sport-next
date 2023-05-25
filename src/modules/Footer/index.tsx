import {createStyles, Anchor, Group, ActionIcon, rem} from '@mantine/core';
import Link from "next/link";
import Image from "next/image";
import type {ILinksProps} from "../../components/Links/types";
import {Links} from "../../components/Links";
import {LinksContext} from "../../components/Links/LinksContext";
import type {ISocialProps} from "../../components/Socials/types";
import {Socials} from "../../components/Socials";
import {FC, PropsWithChildren, useContext} from "react";
import {Logo} from "../../components/Logo";

const useStyles = createStyles((theme) => ({
    footer: {
        marginTop: rem(120),
        borderTop: `${rem(1)} solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
        }`,
    },

    inner: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: `${theme.spacing.md} ${theme.spacing.md}`,

        [theme.fn.smallerThan('sm')]: {
            flexDirection: 'column',
        },
    },

    link: {
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
        textDecoration: 'none',
    },

    links: {
        [theme.fn.smallerThan('sm')]: {
            marginTop: theme.spacing.lg,
            marginBottom: theme.spacing.sm,
        },
    },
}));


export const FooterModule: FC<PropsWithChildren<ILinksProps & ISocialProps>> = ({links, socials}) => {
    const {classes} = useStyles()
    const {active, setActiveLink} = useContext(LinksContext);
    const items = links.map((link) => (
        <Link href={link.link} key={link.label} className={classes.link}>
            <Anchor<'a'>
                onClick={() => setActiveLink(link.link)}
                color="dimmed"
                sx={{ lineHeight: 1 }}
                size="sm"
            >
                {link.label}
            </Anchor>
        </Link>
    ));

    return (

        <div className={classes.footer}>
            <div className={classes.inner}>

                <Group className={classes.links}>{items}</Group>

                <Logo/>

                <Group spacing="xs" position="right" noWrap>
                    <Socials socials={socials}/>
                </Group>
            </div>
        </div>
    );
}