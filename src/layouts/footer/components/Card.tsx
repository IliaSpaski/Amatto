import { FooterData } from "../../../data/home/FooterData";
import s from "../Footer.module.css";

export const Card = () => {
  return (
    <div>
      <ul className={s.wrapper__card}>
        {FooterData.map((card) => (
          <li key={card.id}>
            <h3 className={s.card__title}>{card.title}</h3>
            <div className={s.wrapper__text}>
              {card.text.map((item) => (
                <p className={s.card__text} key={item.id}>
                  <img className={s.card__icon} src={item.icon} alt="" />
                  {item.adress}
                </p>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
