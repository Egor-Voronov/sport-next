import {HeaderModule} from "../modules/Header";
import {FaGithub, FaLinkedinIn, FaTelegramPlane} from 'react-icons/fa';

export const Home = () => {
    const linksProps = [
        {link: "/", label: "На главную"},
        {link: "/about", label: "О нас"},
        {link: "/catalog", label: "Каталог"},
    ];

    const socialProps = [
        {Icon: FaTelegramPlane, link: "https://t.me/Egor_Voronov_Dev"},
        {Icon: FaGithub, link: "https://github.com/Egor-Voronov"},
        {Icon: FaLinkedinIn, link: "https://t.me/Egor_Voronov_Dev"},
    ];

    return (
        <HeaderModule links={linksProps} socials={socialProps}/>
    );
}