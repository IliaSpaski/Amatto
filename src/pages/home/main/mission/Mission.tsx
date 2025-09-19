import s from "./Mission.module.css";
export const Mission = () => {
  return (
    <div className={s.mission}>
      <div className="container">
        <div className={s.inner}>
          <h2 className="title">Миссия Amatto</h2>
          <p className={s.text}>
            Мы стремимся создать идеальное пространство в котором человеку будет
            комфортно находиться, отдыхать, готовить и весело проводить время со
            своими друзьями и близкими.
          </p>
          <div className={s.wrapper__video}>
            <iframe
              className={s.video}
              src="https://www.youtube.com/embed/z7mAqJE2sHo?si=pM_3FnRZ9bzVi_dS"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
