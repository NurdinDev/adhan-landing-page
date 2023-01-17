import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function MySwiper() {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src="./cover1.1.png" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./cover2.2.png" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./cover3.3.png" />
      </SwiperSlide>
    </Swiper>
  );
}
