import React from "react";
import { ChoiceCard } from "./components/ChoiceCard";
import s from "./Choice.module.css";

export const Choice = () => {
  return (
    <div className={s.choice}>
      <div className="container">
        <div className={s.choice__content}>
          <div className={s.choice__title}>
            <h1 className="title">
              Все еще не можете определиться с выбором кухни?
            </h1>
          </div>
          <ChoiceCard />
        </div>
      </div>
    </div>
  );
};

// rafc
