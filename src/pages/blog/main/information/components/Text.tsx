import { DescriptionData } from "../../../../../data/blog/InformationData";
import s from "../Information.module.css";

export const Description = () => {
  return (
    <div className={s.description}>
      <ul className={s.wrapper__text}>
        {DescriptionData.map((text) => (
          <li key={text.id}>{text.title}</li>
        ))}
      </ul>
    </div>
  );
};
