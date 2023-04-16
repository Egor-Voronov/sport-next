import {HeaderModule} from "../modules/Header";


export const Home = () => {
    const linksProps = [
        {link: "/", label: "На главную"},
        {link: "/about", label: "О нас"},
        {link: "/catalog", label: "Каталог"},
    ];
    
    return (
        <HeaderModule links={linksProps}/>
    );
}