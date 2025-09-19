import type { Slider } from "../../../../../data/home/HeroData";
import s from "../Hero.module.css";

interface HeroSlideProps {
  slide: Slider;
}

export const HeroSlide = ({ slide }: HeroSlideProps) => {
  return (
    <div className={s.slider} style={{ backgroundImage: `url(${slide.bg})` }}>
      <div className="container">
        <div className={s.slide}>
          <h1 className={s.title}>{slide.title}</h1>
          <h3 className={s.subtitle}>{slide.subtitle}</h3>
          <ul className={s.list}>
            {slide.service.map((item) => (
              <li key={item.id} className={s.list__item}>
                <img src={item.icon} alt="" />
                <span className={s.text}>
                  <p className={s.prefix}>{item.prefix}</p>
                  <p className={s.highlight}>
                    <u>{item.highlight}</u>
                  </p>
                </span>
              </li>
            ))}
          </ul>
          <button className={s.button}>{slide.button}</button>
        </div>
      </div>
    </div>
  );
};
