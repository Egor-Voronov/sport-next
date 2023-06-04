import sneakers1 from "public/assets/items/sneakers/1.webp";
import sneakers2 from "public/assets/items/sneakers/2.webp";
import sneakers3 from "public/assets/items/sneakers/3.webp";
// import weights1 from "public/assets/items/weights/1.webp";
// import weights2 from "public/assets/items/weights/2.webp";
// import cardio1 from "public/assets/items/cardio/1.webp";
// import cardio2 from "public/assets/items/cardio/2.webp";
// import gloves2 from "public/assets/items/gloves/2.webp";

let id = 0;

export const props = [
  {
    id: id++,
    images: [sneakers1.src, sneakers2.src, sneakers3.src],
    heading: "Кроссовки BOOST",
    paragraph: `BOOST - это кроссовки, которые объединяют
     стиль и комфорт в идеальном сочетании. Их инновационный дизайн обеспечивает 
     непревзойденную поддержку и амортизацию, делая каждую пробежку или тренировку комфортной и энергичной. 
     Удобная посадка и превосходная подошва обеспечивают надежное сцепление и амортизацию, чтобы вы могли 
     преодолевать любые преграды с легкостью.`,
    clarification: [
      {
        heading: "размеры",
        description: "Европейские S, M, L, XL, XXl",
      },
    ],
  },
  // {
  //   id: id++,
  //   images: [weights1.src, weights2.src],
  //   heading: "Гантели GRAVITY2",
  //   paragraph: `Гантели Gravity2 - прекрасный тренировочный инструмент,
  //    который объединяет функциональность и элегантный дизайн. Они представляют собой
  //     удобные и эргономичные гантели. Гантели Gravity2 оснащена удобной рукояткой
  //      и покрытием, обеспечивающим надежное сцепление и комфорт при тренировке`,
  //   clarification: "1 блин - 10 кг",
  // },
  // {
  //   id: id++,
  //   images: [cardio1.src, cardio2.src],
  //   heading: "Кардиомонитор DFC",
  //   paragraph: `Кардиомонитор DFC - классический вариант портативного монитора
  //   частоты сердечных сокращений. Состоит из датчика, крепящегося на груди на
  //   эластичном ремне, и приемника, который выполнен в виде часов и располагается на запястье.`,
  // },
  // {
  //   id: id++,
  //   images: [gloves2.src],
  //   heading: "Боксерские перчатки GREEN HILL",
  //   paragraph: `Боксерские перчатки Green Hill - надежный выбор для тренировок и соревнований в боксе. Изготовленные из высококачественных материалов, они обеспечивают отличную защиту и комфорт.`,
  // },
];
