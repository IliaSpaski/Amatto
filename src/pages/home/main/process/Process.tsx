import { Card } from "./components/card";
import s from "./Process.module.css";

export const Process = () => {
  return (
    <div className={s.process}>
      <div className="container">
        <h2 className="title">
          Как выстроен процесс работы с нашими клиентами
        </h2>
        <Card />
      </div>
    </div>
  );
};
