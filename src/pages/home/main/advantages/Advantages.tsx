import { AdvantagesCards } from "./components/AdvantagesCards";
import s from "./Advantages.module.css";

export const Advantages = () => {
  return (
    <div className={s.advantages}>
      <div className="container">
        <h2 className="title">Наши преймущества</h2>
        <AdvantagesCards />
      </div>
    </div>
  );
};
