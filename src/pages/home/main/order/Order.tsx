import s from "./Order.module.css";

export const Order = () => {
  return (
    <div className={s.order}>
      <div className={s.inner}>
        <h2 className={s.title}>Закажи кухню</h2>
        <h3 className={s.subtitle}>И получи 10% скидку</h3>
        <p className={s.text}>На всю бытовую технику в сети Bomba и Maximum</p>
        <button className={s.button}>Заказать Кухню</button>
      </div>
    </div>
  );
};
