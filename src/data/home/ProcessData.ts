interface process {
  id: number;
  bg: string;
  number: string;
  title: string;
  text: string;
}

export const ProcessData: process[] = [
  {
    id: 0,
    bg: "/public/home/process/record.jpg",
    number: "1",
    title: "Запись",
    text: "Запишитесь на консультацию по телефону или онлайн",
  },
  {
    id: 1,
    bg: "/public/home/process/metering.jpg",
    number: "2",
    title: "Замер",
    text: "Снимем замеры стен и потолков, рекомендуем, как провести коммуникации, определим размещение секции",
  },
  {
    id: 2,
    bg: "/public/home/process/design.jpg",
    number: "3",
    title: "Дизайн",
    text: "Дизайнер разрабатывает дизайн проект по вашим пожеланиям, подбирает материалы, учитывая планировку и ваш бюджет",
  },
  {
    id: 3,
    bg: "/public/home/process/production.jpg",
    number: "4",
    title: "Производство",
    text: "Срок изготовления кухни от 25 дней",
  },
  {
    id: 4,
    bg: "/public/home/process/installation.jpg",
    number: "5",
    title: "Монтаж",
    text: "Быстро и качественно установим мебель и встраиваемую технику",
  },
];
