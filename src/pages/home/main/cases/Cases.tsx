import { CasesCard } from "./components/CasesCard";
import s from "./Cases.module.css";

export const Cases = () => {
  return (
    <div className={s.cases}>
      <div className="container">
        <h2 className="title">Наши видео кейсы</h2>
        <CasesCard />
      </div>
    </div>
  );
};
