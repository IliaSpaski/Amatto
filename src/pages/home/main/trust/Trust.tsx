import s from "./Trust.module.css";
import { Card } from "./components/Card";

export const Trust = () => {
  return (
    <div className={s.trust}>
      <div className="container">
        <div className={s.trust__item}>
          <h1 className="title">Доверьте вашу кухню профессионалам</h1>
          <Card />
        </div>
      </div>
    </div>
  );
};
