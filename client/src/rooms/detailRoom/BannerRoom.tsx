import styles from "./BannerRoom.module.css";
import type { Room } from "../../data/Room/RoomInfo";

interface BannerRoomProps{
  room : Room;
}
export default function BannerRoom({room}: BannerRoomProps) {
  
  return (
    <section className={styles.banner}>
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <h2 className={styles.title}>
          {room.title}
        </h2>

        <p className={styles.description}>
          {room.desc}
        </p>

        <div className={styles.price}>
          <span>Avg. price per night</span>
          <strong>{room.price}.00$</strong>
        </div>

        <button className={styles.button}>BOOK NOW</button>
      </div>
    </section>
  );
}