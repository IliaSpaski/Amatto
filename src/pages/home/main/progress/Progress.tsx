import { ProgressCard } from "./components/ProgressCard";
import s from "./Progress.module.css";

export const Progress = () => {
  return (
    <div className={s.progress}>
      <div className="container">
        <h2 className="title">Наши работы</h2>
        <ProgressCard />
      </div>
      <button className={s.button__more}>Раскрыть Ещё</button>
    </div>
  );
};
