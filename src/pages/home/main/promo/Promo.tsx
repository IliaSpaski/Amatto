import React from "react";
import s from "./Promo.module.css";
import { PromoCounter } from "./components/PromoCounter";

export const Promo = () => {
  return (
    <div className={s.promo}>
      <div className="container">
        <div className={s.promo__item}>
          <div className={s.promo__text}>
            <h1 className="title">
              Закажи<u>Кухню</u>
            </h1>
            <p className={s.subtitle}>До 31 марта</p>
            <h2 className={s.info}>Получи</h2>
            <span className={s.highlighted_info}>Посудомоечную Машину</span>
            <h2 className={s.info}> В подарок</h2>
            <PromoCounter />
          </div>
        </div>
      </div>
    </div>
  );
};
