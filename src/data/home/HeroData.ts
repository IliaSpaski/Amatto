type Service = {
  id: number;
  icon: string;
  prefix: string;
  highlight: string;
};

export type Slider = {
  id: number;
  bg: string;
  title: string;
  subtitle: string;
  service: Service[];
  button: string;
};

export const SliderData: Slider[] = [
  {
    id: 0,
    bg: "/public/home/hero/background_first.jpg",
    title: "КУХНИ НА ЗАКАЗ",
    subtitle: "Стильная кухня от производителя по цене на 20% ниже рынка",
    service: [
      {
        id: 0,
        icon: "/public/home/hero/heart.svg",
        prefix: "Бесплатный",
        highlight: "дизайн проект",
      },
      {
        id: 1,
        icon: "/public/home/hero/heart.svg",
        prefix: "Гарантия",
        highlight: "лучшей Цены",
      },
      {
        id: 2,
        icon: "/public/home/hero/heart.svg",
        prefix: "Производство от",
        highlight: "25 до 45 дней",
      },
      {
        id: 3,
        icon: "/public/home/hero/heart.svg",
        prefix: "Гарантийное",
        highlight: "обслуживание 5 лет",
      },
    ],
    button: "бесплатная консультация дизайнера ",
  },
  //   {
  //     id: 1,
  //     bg: "/public/home/hero/background_second.jpg",
  //     title: "КУХНИ НА ЗАКАЗ",
  //     subtitle: "Стильная кухня от производителя по цене на 20% ниже рынка",
  //     service: [
  //       {
  //         id: 0,
  //         icon: "/public/home/hero/heart.svg",
  //         prefix: "Бесплатный",
  //         highlight: "дизайн проект",
  //       },
  //       {
  //         id: 1,
  //         icon: "/public/home/hero/heart.svg",
  //         prefix: "Гарантия",
  //         highlight: "лучшей Цены",
  //       },
  //       {
  //         id: 2,
  //         icon: "/public/home/hero/heart.svg",
  //         prefix: "Производство от",
  //         highlight: "25 до 45 дней",
  //       },
  //       {
  //         id: 3,
  //         icon: "/public/home/hero/heart.svg",
  //         prefix: "Гарантийное",
  //         highlight: "обслуживание 5 лет",
  //       },
  //     ],
  //     button: "бесплатная консультация дизайнера ",
  //   },
];
