import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./GallerySlide.module.css";
import restaurant from "../assets/images/restaurant.png";
import slider4 from "../assets/images/slider4.png";
import slider5 from "../assets/images/slider5.png";

export default function GallerySlide() {
  const images = [
    {
      image: restaurant,
    },
    {
      image: slider4,
    },
    {
      image: slider5,
    },
    {
      image: restaurant,
    },
    {
      image: slider4,
    },
    {
      image: slider5,
    },
  ];
  return (
    <div className={styles["container"]}>
      <h3 className={styles["title"]}>Muong Hoa’s Gallery</h3>
      <div>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{
          0: {
            slidesPerView: 1, // mobile
            centeredSlides: false,
          },
          1024: {
            slidesPerView: 3, // desktop
            centeredSlides: true,
          },
        }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image.image}
                alt=""
                className={styles["image-gallery"]}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
