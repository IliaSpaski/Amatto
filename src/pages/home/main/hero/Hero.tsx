import { SwiperSlide, Swiper } from "swiper/react";
import { SliderData } from "../../../../data/home/HeroData";
import s from "./Hero.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { HeroSlide } from "./components/HeroSlide";

export const Hero = () => {
  return (
    <div className={s.hero}>
      <div>
        <Swiper
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={50}
          slidesPerView={1}
        >
          {SliderData.map((slide) => (
            <SwiperSlide key={slide.id}>
              <HeroSlide slide={slide} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
