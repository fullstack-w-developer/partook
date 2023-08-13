import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
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
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      slidesPerView={1}
      spaceBetween={10}
      autoplay={{
        delay: 5500,
      }}
      loop={true}
      breakpoints={{
        260: 1
      }}
    >
      <SwiperSlide>
        <Slide imgSlide={imgInside} textMain="مطالعه، یگانه راهی است برای آشنایی و گفتگو با بزرگان روزگار که قرن‌ها پیش در دنیا به سر برده و اکنون در زیر خاک منزل دارند." />
      </SwiperSlide>
      <SwiperSlide>
        <Slide imgSlide={imgOutside} textMain="کتاب راستگوترین، بی‌توقع‌ترین، مفیدترین و همیشگی‌ترین رفیق برای هر انسان است." />
      </SwiperSlide>
      <SwiperSlide>
        <Slide imgSlide={bookSell} textMain="مراقب لحظات آزاد خود باشید. آن لحظات مانند الماس‌های نتراشیده‌اند؛ اگر آن‌ها را بتراشید و خرد کنید؛ ارزش حقیقی خود را از دست می‌دهند .اگر مراقب آن‌ها باشید؛ شفاف‌تر و درخشنده‌تر جلوه خواهند کرد" />
      </SwiperSlide>
    </Swiper>
  );
};