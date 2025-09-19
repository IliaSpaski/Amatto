import { InformationData } from "../../../../../data/blog/InformationData";
import s from "../Information.module.css";

export const Card = () => {
  return (
    <div className={s.wrapper__card}>
      {InformationData.map((list) => (
        <div key={list.id} className={s.card}>
          <ul className={s.text}>
            {list.text.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
          <img src={list.background} alt="" />
        </div>
      ))}
    </div>
  );
};
