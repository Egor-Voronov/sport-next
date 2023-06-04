import { TbThumbUp, TbMoodCheck } from "react-icons/all";
import { FaRubleSign } from "react-icons/fa";

let id = 0;

export const props = [
  {
    id: id++,
    title: "Высокое качество",
    description: `Наша команда постоянно отбирает только
      самые качественные спортивные товары, чтобы обеспечить вам
      надежность, долговечность и удовлетворение в каждой покупке.`,
    icon: TbThumbUp,
  },
  {
    id: id++,
    title: "Доступные цены",
    description: `Мы гордимся предлагаемыми нами
      конкурентоспособными ценами, чтобы сделать спортивные товары
      доступными для всех.`,
    icon: FaRubleSign,
  },
  {
    id: id++,
    title: "Клиенториентированность",
    description: `
      Клиентоориентированность - является одним из наших основных преимуществ. 
       Все наши действия и решения направлены на удовлетворение потребностей и ожиданий наших 
       клиентов.`,
    icon: TbMoodCheck,
  },
];
