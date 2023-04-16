import React, {useState} from 'react';
import {useStyles} from "./styles";
import type {ILinksProps} from "./types";

export const Links = ({links, onClose}: ILinksProps) => {
    const [active, setActive] = useState(links[0].link);
    const {classes, cx} = useStyles();

    return (
        <>
            {links.map((link) => (
                <a
                    key={link.label}
                    href={link.link}
                    className={cx(classes.link, {[classes.linkActive]: active === link.link})}
                    onClick={(event) => {
                        event.preventDefault();
                        setActive(link.link);
                        if (onClose) {
                            onClose()
                        }
                    }}
                >
                    {link.label}
                </a>
            ))}
        </>
    );
}