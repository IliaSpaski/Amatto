import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { SliderData } from "../../../../../data/blog/InformationData";
import s from "../../information/Information.module.css";

export const Slider = () => {
  return (
    <>
      <Swiper
        className={s.slider__wrapper}
        modules={[Navigation, Pagination]}
        pagination={{ clickable: true }}
        loop={true}
        navigation={true}
        spaceBetween={50}
        slidesPerView={1}
      >
        {SliderData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className={s.slider}
              style={{ backgroundImage: `url(${slide.bg})` }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
