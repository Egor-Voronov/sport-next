import { Meta } from "src/components/Meta";
import type { FC } from "react";
import { ReviewsHero } from "../modules/Hero/ReviewsHero";
import { UserComments } from "../modules/UserComments";

export const Reviews: FC = () => {
  return (
    <>
      <Meta
        title="Отзывы"
        description="Мнение пользователей о продукции, производимой Sport-Next"
      />
      <ReviewsHero />
      <UserComments />
    </>
  );
};
