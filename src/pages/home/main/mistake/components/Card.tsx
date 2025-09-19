import { MistakeData } from "../../../../../data/home/MistakeData";
import s from "../Mistake.module.css";

export const Card = () => {
  return (
    <ul className={s.wrapper__card}>
      {MistakeData.map((card) => (
        <li className={s.card} key={card.id}>
          <img className={s.card__icon} src={card.icon} alt="" />
          <h3 className={s.card__title}>{card.title}</h3>
          <p className={s.card__text}>{card.text}</p>
        </li>
      ))}
    </ul>
  );
};
