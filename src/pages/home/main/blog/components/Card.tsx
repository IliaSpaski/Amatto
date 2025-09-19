import React from "react";
import s from "../Blog.module.css";
import { BlogData } from "../../../../../data/home/BlogData";

export const Card = () => {
  return (
    <div className={s.cards}>
      {BlogData.map((card) => (
        <div className={s.card} key={card.id}>
          <img className={s.card__img} src={card.img} />
          <span className={s.card__data}>{card.data}</span>
          <h1 className={s.card__title}>{card.title}</h1>
          <p className={s.card__text}>{card.text}</p>
          <button className={s.card__button}>{card.button}</button>
        </div>
      ))}
    </div>
  );
};
