import { Meta } from "src/components/Meta";
import type { FC } from "react";
import { BaseHeroModule } from "../modules/Hero/BaseHero";

export const Catalog: FC = () => {
  return (
    <>
      <Meta
        title="Каталог"
        description="Страница, на которой демонстрируется товар производимый Sport-Next"
      />
      <BaseHeroModule backgroundImageUrl="assets/hero/catalogBackground.png" />
    </>
  );
};
