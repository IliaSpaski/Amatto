import React from "react";
import { ChoiceData } from "../../../../../data/home/ChoiceData";
import s from "../Choice.module.css";

export const ChoiceCard = () => {
  return (
    <div className={s.cards}>
      {ChoiceData.map((card) => (
        <div
          className={s.card}
          key={card.id}
          style={{ backgroundImage: `url(${card.background})` }}
        >
          <span>
            <p className={s.card__text}>
              {card.title}
              <br />
              {card.titleL2}

              <u>{card.highlight}</u>
              <br />
              {card.subtitle ? card.subtitle : ""}
            </p>
          </span>
        </div>
      ))}
    </div>
  );
};
