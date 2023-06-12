let id = 0;

let sneakers = [];
for (let i = 1; i <= 3; i++) {
    sneakers.push(`https://raw.githubusercontent.com/Egor-Voronov/sport-next-client/master/public/assets/items/sneakers/${i}.webp`);
}

let weights = [];
let cardio = [];
for (let i = 1; i < 3; i++) {
    weights.push(`https://raw.githubusercontent.com/Egor-Voronov/sport-next-client/master/public/assets/items/weights/${i}.webp`);
    cardio.push(`https://raw.githubusercontent.com/Egor-Voronov/sport-next-client/master/public/assets/items/cardio/${i}.webp`);
}

let gloves = ["https://raw.githubusercontent.com/Egor-Voronov/sport-next-client/master/public/assets/items/gloves/2.webp"];

export const catalogItems = [
    {
        id: id++,
        images: sneakers,
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
            {
                heading: "цвет",
                description: "желтый",
            },
            {
                heading: "материал",
                description: "замша, полиэстер",
            },
        ],
    },
    {
        id: id++,
        images: weights,
        heading: "Гантели GRAVITY2",
        paragraph: `Гантели Gravity2 - прекрасный тренировочный инструмент,
     который объединяет функциональность и элегантный дизайн. Они представляют собой
      удобные и эргономичные гантели. Гантели Gravity2 оснащена удобной рукояткой
       и покрытием, обеспечивающим надежное сцепление и комфорт при тренировке`,
        clarification: [
            {
                heading: "1 блин",
                description: "10 кг",
            },
            {
                heading: "гриф",
                description: "5 кг",
            },
            {
                heading: "материал",
                description: "оцинкованная сталь, резина",
            },
        ],
    },
    {
        id: id++,
        images: cardio,
        heading: "Кардиомонитор DFC",
        paragraph: `Кардиомонитор DFC - классический вариант портативного монитора
    частоты сердечных сокращений. Состоит из датчика, крепящегося на груди на
    эластичном ремне, и приемника, который выполнен в виде часов и располагается на запястье.`,
        clarification: [
            {
                heading: "мониторинг",
                description: "сердечного ритма",
            },
            {
                heading: "цвет",
                description: "Оранжевый, черный",
            },
            {
                heading: "наличие дисплея",
                description: "да",
            },
            {
                heading: "материал",
                description: "резина, пластик",
            },
        ],
    },
    {
        id: id++,
        images: gloves,
        heading: "Боксерские перчатки GREEN HILL",
        paragraph: `Боксерские перчатки Green Hill - надежный выбор для тренировок и соревнований в боксе. Изготовленные из высококачественных материалов, они обеспечивают отличную защиту и комфорт.`,
        clarification: [
            {
                heading: "материал",
                description: "полиуретан, войлок",
            },
        ],
    },
];
