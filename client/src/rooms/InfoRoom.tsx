import styles from "./InfoRoom.module.css";
import type { Room } from "../data/Room/RoomInfo";
import arrow from "../assets/images/icon/ic_arrow.png";
interface InfoRoomProps {
  room: Room;
}

export default function InfoRoom({ room }: InfoRoomProps) {
  const { img, title, desc, price, infos } = room;
  return (
    <div className={styles["container"]}>
      <img src={img} alt="" className={styles["imgRoom"]} />
      <div className={styles["box"]}>
        <h3 className={styles["title"]}>
          {title} <img src={arrow} alt="" />
        </h3>
        <p className={styles["desc"]}>{desc}</p>
        {infos.map((infor, index) => (
          <div key={index} className={styles["iconRoom"]}>
            <img src={infor.icon} alt="" />
            <span>{infor.text}</span>
          </div>
        ))}
        <hr className={styles.divider} />
        <div className={styles.footer}>
          <div>
            <p className={styles.label}>Avg. price per night</p>
            <p className={styles.price}>$ {price}.00</p>
          </div>

          <button className={styles.btn}>BOOK NOW</button>
        </div>
      </div>
    </div>
  );
}
