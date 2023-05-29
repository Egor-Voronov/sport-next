import { Meta } from "src/components/Meta";
import { BaseHeroModule } from "../modules/Hero/BaseHero";
import { homeTxt } from "../modules/Hero/BaseHero/props";
import type { FC } from "react";

export const Home: FC = () => {
  return (
    <>
      <Meta
        title="Главная"
        description="Универсальное торговое предложение, которое может дать Sport-Next"
      />
      <BaseHeroModule
        backgroundImageUrl="assets/hero/homeBackground.jpg"
        text={homeTxt}
        btnPath="/catalog"
      />
    </>
  );
};
