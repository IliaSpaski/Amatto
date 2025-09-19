import { Card } from "./components/card";
import s from "./Mistake.module.css";

export const Mistake = () => {
  return (
    <div className={s.mistake}>
      <div className="conatiner">
        <h2 className={s.title}>Четыре ошибки при выборе кухни</h2>
        <Card />
      </div>
    </div>
  );
};
