import {Meta} from 'src/components/Meta'
import {MainHeroModule} from "../modules/Hero/MainHero";
import type {FC} from "react";

export const Home: FC = () => {
    return (
        <>
            <Meta title='Главная' description='Универсальное торговое предложение, которое может дать Sport-Next'/>
            <MainHeroModule />
        </>
    );
}