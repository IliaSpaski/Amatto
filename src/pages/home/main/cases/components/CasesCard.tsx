import { CasesData } from "../../../../../data/home/CasesData";
import s from "../Cases.module.css";

export const CasesCard = () => {
  return (
    <div className={s.cases__card}>
      <ul className={s.wrapper__video}>
        {CasesData.map((video) => (
          <li key={video.id}>
            <iframe
              src={video.video}
              className={`${video?.video ? s.video : s.plug}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </li>
        ))}
      </ul>
    </div>
  );
};
