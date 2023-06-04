import { Meta } from "src/components/Meta";
import type { FC } from "react";
import { AboutHero } from "../modules/Hero/AboutHero";

export const About: FC = () => {
  return (
    <>
      <Meta title="О нас" description="Описание преимуществ Sport-Next" />
      <AboutHero />
    </>
  );
};
