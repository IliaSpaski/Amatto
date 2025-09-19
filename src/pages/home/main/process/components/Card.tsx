import { ProcessData } from "../../../../../data/home/ProcessData";
import s from "../Process.module.css";

export const Card = () => {
  return (
    <ul className={s.wrapper__cards}>
      {ProcessData.map((card) => (
        <li className={s.card} key={card.id}>
          <img src={card.bg} alt="" />
          <div className={s.wrapper__text}>
            <div className={s.title}>
              <h2 className={s.number}>{card.number}</h2>
              <h2 className={s.name}>{card.title}</h2>
            </div>
            <p className={s.text}>{card.text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};
