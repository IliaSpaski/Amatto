import { ProgressData } from "../../../../../data/home/ProgressData";
import s from "../Progress.module.css";

export const ProgressCard = () => {
  return (
    <ul className={s.wrapper_cards}>
      {ProgressData.map((card) => (
        <li
          key={card.id}
          style={{ backgroundImage: `url(${card.background})` }}
          className={s.card}
        >
          <h4 className={s.title__card}>{card.title}</h4>
          <div className={s.inner}>
            <div className={s.text}>
              <div className={s.price}>
                <div>
                  <h3 className={s.value}>{card.value}</h3>
                </div>
                <p className={s.currency}>{card.currency}</p>
              </div>
              <p className={s.circs}>{card.circs}</p>
            </div>
            <button className={s.button}>
              <img src={card.button} alt="arrow" />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};
