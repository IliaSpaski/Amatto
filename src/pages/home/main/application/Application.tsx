import s from "./Application.module.css";
import { Request } from "./components/Request";

export const Application = () => {
  return (
    <div className={s.application}>
      <div className="container">
        <h2 className="title">Покупай в рассрочку!</h2>
        <div className={s.inner}>
          <Request />
          <div className={s.inner__img}><img src="/public/home/application/background.png" alt="" /></div>
        </div>
      </div>
    </div>
  );
};
