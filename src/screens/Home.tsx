import {HeaderMiddle} from "../modules/Header";

export const Home = () => {
    const links = [
        { link: "/", label: "Home" },
        { link: "/about", label: "About" },
        { link: "/contact", label: "Contact" },
    ];

    return (
        <HeaderMiddle links={links} />
    );
}