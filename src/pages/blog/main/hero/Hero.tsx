import s from "./Hero.module.css";

export const Hero = () => {
  return (
    <div className={s.hero}>
      <div className="container">
        <h1 className={s.title}>Из чего складывается стоимость кухни?</h1>
      </div>
    </div>
  );
};
