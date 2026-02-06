import styles from "./roomlist.module.css";
import { rooms } from "../data/Room/RoomInfo";
import InfoRoom from "./InfoRoom";

export default function RoomList() {
  return (
    <div className={styles["card"]}>
      <div className={styles['text']}>
        <h3 className={styles["title"]}>check our rooms</h3>
        <p className={styles["desc"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in
          magna id diam viverra egestas vel nec magna. In lacinia libero at
          libero scelerisque, quis malesuada lectus tincidunt. Donec a justo
          egestas, pellentesque dui malesuada, mattis urna.
        </p>
      </div>
      {rooms.map((room) => (
        <div className={styles["box"]}>
          <InfoRoom key={room.id} room={room} />
        </div>
      ))}
    </div>
  );
}
