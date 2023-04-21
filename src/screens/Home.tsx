import {Meta} from 'src/components/Meta'
import {HeroModule} from "../modules/Hero";

export const Home = () => {
    return (
        <>
            <Meta title='Главная' description='Универсальное торговое предложение, которое может дать Sport-Next'/>
            <HeroModule />
        </>
    );
}