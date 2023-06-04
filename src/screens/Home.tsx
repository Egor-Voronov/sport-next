import { Meta } from "src/components/Meta";
import { BaseHero } from "../modules/Hero/BaseHero";
import { homeTxt } from "../modules/Hero/BaseHero/props";
import type { FC } from "react";
import { VideoPresentation } from "../modules/VideoPresentation";
import { Subscription } from "../modules/Subscription";

export const Home: FC = () => {
  return (
    <>
      <Meta
        title="Главная"
        description="Универсальное торговое предложение, которое может дать Sport-Next"
      />
      <BaseHero
        backgroundImageUrl="assets/hero/homeBackground.jpg"
        text={homeTxt}
        btnPath="/catalog"
      />
      <VideoPresentation />
      <Subscription />
    </>
  );
};
