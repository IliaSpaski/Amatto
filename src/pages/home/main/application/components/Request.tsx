import { useState } from "react";
import s from "../Application.module.css";

export const Request = () => {
  const [budget, setBudget] = useState<string>("");
  const [interval, setInterval] = useState<string>("");
  const [contribution, setContribution] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const handleBudget = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBudget(event.target.value);
  };

  const handleInterval = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInterval(event.target.value);
  };

  const handleContribution = (event: React.ChangeEvent<HTMLInputElement>) => {
    const clear = event.target.value.replace(/\D/g, "");
    setContribution(clear);
  };

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handlePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };

  const result = (+budget - (+budget * +contribution) / 100) / +interval;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = { budget, interval, contribution, name, phone };
    console.log(data);
  };

  return (
    <div className={s.request}>
      <div className={s.request__inner}>
        <h3 className={s.title__request}>
          Ваша новая кухня без денег и предоплаты!
        </h3>
        <div className={s.subtitle__request}>
          <p className={s.text}>рассрочка 12 месяцев</p>
          <p className={s.text}>без комиссии и процентов</p>
        </div>
        <form action="payload" className={s.form}>
          <div className={s.calculate} id="budget">
            <label className={s.label__form}>Ваш Бюджет € :</label>
            <input
              className={s.input__form}
              type="text"
              placeholder="3000"
              onChange={handleBudget}
            />
          </div>
          <div className={s.calculate} id="interval">
            <label className={s.label__form}>
              Промежуток
              <br /> Рассрочки В Месяцах :
            </label>
            <input
              className={s.input__form}
              type="text"
              placeholder="6"
              onChange={handleInterval}
            />
          </div>
          <div className={s.calculate} id="contribution">
            <label className={s.label__form}>Первоначальный Взнос % :</label>
            <input
              className={s.input__form}
              type="text"
              placeholder="10%"
              onChange={handleContribution}
            />
          </div>
        </form>
      </div>
      <div className={s.separator}>
        <p className={s.separator__text}>ЕЖЕМЕСЯЧНЫЙ ПЛАТЁЖ:</p>
        <p className={s.separator__text}>{result ? result : "0"} €</p>
      </div>
      <div className={s.request__inner}>
        <form onSubmit={handleSubmit} className={s.form__payload}>
          <div className={s.payload__inputs}>
            <input
              className={s.input__form}
              type="text"
              name="name"
              placeholder="Ваше Имя:"
              onChange={handleName}
            />
            <input
              className={s.input__form}
              type="text"
              name="phone"
              placeholder="Ваш Телефон:"
              onChange={handlePhone}
            />
          </div>
          <button className={s.button}>Отправить Заявку На Рассрочку</button>
        </form>
      </div>
    </div>
  );
};
