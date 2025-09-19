import s from "./Separator.module.css";

export const Separator = () => {
  return (
    <div className={s.separator}>
      <div className={s.inner}>
        <div className={s.text}>
          <h2 className={s.title}>
            Получите бесплатно дизайн проект кухни и консультацию дизайнера
          </h2>
          <h4 className={s.subtitle}>
            Вы узнаете точную <strong>стоимость вашей кухни</strong> и получите{" "}
            <strong>3D-проект</strong>
          </h4>
          <div className={s.form}>
            <input className={s.input} type="text" placeholder="Ваш Телефон" />
            <button className={s.button}>Записаться</button>
          </div>
        </div>
      </div>
    </div>
  );
};
