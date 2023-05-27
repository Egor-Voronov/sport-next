import { Meta } from "src/components/Meta";
import { BaseHeroModule } from "../modules/Hero/BaseHero";
import type { FC } from "react";

export const Home: FC = () => {
  return (
    <>
      <Meta
        title="Главная"
        description="Универсальное торговое предложение, которое может дать Sport-Next"
      />
      <BaseHeroModule backgroundImageUrl="assets/hero/homeBackground.jpg" />
    </>
  );
};
