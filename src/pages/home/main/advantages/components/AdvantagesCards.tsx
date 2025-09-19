import { AdvantagesData } from "../../../../../data/home/AdvantagesData";
import s from "../Advantages.module.css";

export const AdvantagesCards = () => {
  return (
    <div>
      <ul className={s.wrapper__card}>
        {AdvantagesData.map((card) => (
          <li key={card.id} className={s.card}>
            <img className={s.icon} src={card.icon} alt="" />
            <h3 className={s.title__card}>{card.title}</h3>
            <p className={s.text}>{card.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
