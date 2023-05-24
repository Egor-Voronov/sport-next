import { createStyles, Anchor, Group, ActionIcon, rem } from '@mantine/core';
import Link from "next/link";
import Image from "next/image";
import type {ILinksProps} from "../../components/Links/types";
import {Links} from "../../components/Links";
import type {ISocialProps} from "../../components/Socials/types";
import {Socials} from "../../components/Socials";
import {FC, PropsWithChildren} from "react";

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

    links: {
        [theme.fn.smallerThan('sm')]: {
            marginTop: theme.spacing.lg,
            marginBottom: theme.spacing.sm,
        },
    },
}));

interface FooterCenteredProps {
    links: { link: string; label: string }[];
}

export const FooterModule: FC<PropsWithChildren<ILinksProps & ISocialProps>> = ({links, socials}) => {
    const { classes } = useStyles();
    const items = links.map((link) => (
        <Anchor<'a'>
            color="dimmed"
            key={link.label}
            href={link.link}
            sx={{ lineHeight: 1 }}
            size="sm"
        >
            {link.label}
        </Anchor>
    ));

    return (
        <div className={classes.footer}>
            <div className={classes.inner}>

                <Group className={classes.links}>{items}</Group>

                <Link href='#top'>
                    <Image width={30} height={30} src='/assets/logo.svg' alt="img"/>
                </Link>

                <Group spacing="xs" position="right" noWrap>
                  <Socials socials={socials} />
                </Group>
            </div>
        </div>
    );
}