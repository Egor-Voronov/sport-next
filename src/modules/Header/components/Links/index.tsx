import React, { useState } from 'react';
import { Group } from '@mantine/core';
import { useStyles } from "./styles";
import {ILinksProps} from "./types";
export const Links = ({ links }: ILinksProps) => {
    const [active, setActive] = useState(links[0].link);
    const { classes, cx } = useStyles();

    return (
        <Group className={classes.links} spacing={5}>
            {links.map((link) => (
                <a
                    key={link.label}
                    href={link.link}
                    className={cx(classes.link, { [classes.linkActive]: active === link.link })}
                    onClick={(event) => {
                        event.preventDefault();
                        setActive(link.link);
                    }}
                >
                    {link.label}
                </a>
            ))}
        </Group>
    );
}