import {Meta} from 'src/components/Meta'
import type {FC} from "react";
import {MainHeroModule} from "../modules/Hero/MainHero";

export const Catalog: FC = () => {
    return (
        <>
            <Meta title="Каталог" description='Страница, на которой демонстрируется товар производимый Sport-Next'/>
            <MainHeroModule backgroundImageUrl='assets/hero/catalogBackground.png'/>
        </>
    );
}