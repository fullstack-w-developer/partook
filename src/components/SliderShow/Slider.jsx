// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Slide from './Slide';
import imgInside from "../../assets/images/insideShop.jpg";
import imgOutside from "../../assets/images/outsideShop.jpg";
import bookSell from "../../assets/images/bookSell.jpg";

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      breakpoints={{
        260: 1
      }}
    >
      <SwiperSlide>
        <Slide imgSlide={imgInside} />
      </SwiperSlide>
      <SwiperSlide>
        <Slide imgSlide={imgOutside} />
      </SwiperSlide>
      <SwiperSlide>
        <Slide imgSlide={bookSell} />
      </SwiperSlide>
    </Swiper>
  );
};