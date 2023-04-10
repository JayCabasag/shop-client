import { Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
import Image from "next/image";
const ShopSwiper = () => {

  const banners = ['/banner1.webp','/banner2.webp','/banner3.jpg']

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 10000
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {banners.map((image: string, index: number) => {
          return (
            <SwiperSlide key={index}>
            <Image 
              src={image}
              height={750}
              width={750}
              alt="banner1"
            />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  );
};

export default ShopSwiper