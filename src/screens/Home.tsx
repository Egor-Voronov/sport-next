import {Meta} from 'src/components/Meta'
import {HeroModule} from "../modules/Hero";
import type {FC} from "react";

export const Home: FC = () => {
    return (
        <>
            <Meta title='Главная' description='Универсальное торговое предложение, которое может дать Sport-Next'/>
            <HeroModule/>
        </>
    );
}