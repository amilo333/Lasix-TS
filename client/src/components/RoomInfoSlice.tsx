import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import 'swiper/css';
import room1 from "../assets/images/rooms/room.png";
import room2 from "../assets/images/rooms/room_img.png";
import styles from "./roomInfoSlide.module.css";

const rooms = [
  {
    title: "DELUXE BANCONY",
    image: room1,
    desc: "The spacious double room features air conditioning, a private entrance, a  terrace with garden views as well as a private bathroom boasting a  shower. The unit has 1 bed.",
  },
  {
    title: "KING ROOM WITH BALCONY",
    image: room2,
    desc: "The spacious double room features air conditioning, a private entrance, a  terrace with garden views as well as a private bathroom boasting a  shower. The unit has 1 bed.",
  },
  {
    title: "BUNGALOW",
    image: room1,
    desc: "The spacious double room features air conditioning, a private entrance, a  terrace with garden views as well as a private bathroom boasting a  shower. The unit has 1 bed.",
  },
  {
    title: "DELUXE BANCONY",
    image: room1,
    desc: "The spacious double room features air conditioning, a private entrance, a  terrace with garden views as well as a private bathroom boasting a  shower. The unit has 1 bed.",
  },
  {
    title: "KING ROOM WITH BALCONY",
    image: room2,
    desc: "The spacious double room features air conditioning, a private entrance, a  terrace with garden views as well as a private bathroom boasting a  shower. The unit has 1 bed.",
  },
  {
    title: "BUNGALOW",
    image: room1,
    desc: "The spacious double room features air conditioning, a private entrance, a  terrace with garden views as well as a private bathroom boasting a  shower. The unit has 1 bed.",
  },
];

export default function RoomInfoSlide() {
  return (
    <div className={styles["room-info-slide-container"]}>
      <h3>Room & Sutes</h3>
      <Swiper
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={5}
        centeredSlides
        initialSlide={Math.floor(rooms.length / 2)}
        pagination={{ clickable: true }}
        breakpoints={{
          0: {
            slidesPerView: 1, // mobile
            centeredSlides: false,
          },

          768: {
            slidesPerView: 3, // tablet
            centeredSlides: true,
          },
          1024: {
            slidesPerView: 5, // desktop
            centeredSlides: true,
          },
        }}
      >
        {rooms.map((item, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <div className={styles["slide-container"]}>
                <img src={item.image} alt="image" />

                {isActive && (
                  <>
                    <div className={styles["slide-title"]}>{item.title}</div>
                    <div className={styles["slide-desc"]}>{item.desc}</div>
                    <button className={styles["btn-ex"]}>EXPLORE</button>
                  </>
                )}
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
