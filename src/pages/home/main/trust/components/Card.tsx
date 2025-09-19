import React from "react";
import s from "../Trust.module.css";
import { TrustData } from "../../../../../data/home/TrustData";

export const Card = () => {
  return (
    <div className={s.cards}>
      {TrustData.map((card) => (
        <div className={s.card} key={card.id}>
          <img className={s.card_img} src={card.img} />
          <h2 className={s.title}>{card.title}</h2>
          <u className={s.subtitle}>{card.subtitle}</u>
          <p className={s.text}>{card.text}</p>
        </div>
      ))}
    </div>
  );
};
