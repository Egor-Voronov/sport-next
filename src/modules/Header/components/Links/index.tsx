import React, {useState} from 'react';
import {useStyles} from "./styles";
import type {ILinksProps} from "./types";
import Link from "next/link";

export const Links = ({links, onClose}: ILinksProps) => {
    const [active, setActive] = useState(links[0].link);
    const {classes, cx} = useStyles();

    return (
        <>
            {links.map((link) => (
                <Link
                    key={link.label}
                    href={link.link}
                    className={cx(classes.link, {[classes.linkActive]: active === link.link})}
                    onClick={(event) => {
                        setActive(link.link);
                        if (onClose) {
                            onClose()
                        }
                    }}
                >
                    {link.label}
                </Link>
            ))}
        </>
    );
}