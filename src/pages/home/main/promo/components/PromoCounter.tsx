import React, { useState, useEffect } from "react";
import s from "../Promo.module.css";
import { CounterData } from "../../../../../data/home/CounterData";

export const PromoCounter = () => {
  const [timerLeft, setTimerLeft] = useState<number>(380072);
  const days = Math.floor(timerLeft / (24 * 3600));
  const hours = Math.floor((timerLeft % (24 * 3600)) / 3600);
  const minutes = Math.floor((timerLeft % 3600) / 60);
  const second = timerLeft % 60;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimerLeft((prev) => {
        if (prev <= 0) {
          clearInterval(intervalId);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const counter = [
    { value: days },
    { value: hours },
    { value: minutes },
    { value: second },
  ];

  return (
    <div className={s.promo__counter}>
      {CounterData.map((item) => (
        <div className={s.count} key={item.id}>
          <div className={s.count_item}>
            <p>{counter[item.id].value}</p>
            <u>{item.title}</u>
          </div>
        </div>
      ))}
    </div>
  );
};
