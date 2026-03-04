import styles from "./FacilityItem.module.css";
import type { Facility } from "../../data/Room/FacilityData";

interface FacilityItemProps {
  item: Facility;
}

export default function FacilityItem({ item }: FacilityItemProps) {
  return (
    <div className={styles["box"]}>
      <img src={item.img} alt="image" className={styles["image"]} />
      <div className={styles["info"]}>
        <p className={styles["title"]}>{item.title}</p>
        <p className={styles["desc"]}>{item.desc}</p>
      </div>
    </div>
  );
}
