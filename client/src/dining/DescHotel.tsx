import styles from "./DescHotel.module.css";

interface DescHotelProps {
  title: string;
  desc: string;
}
export default function DescHotel({ title, desc }: DescHotelProps) {
  return (
    <div className={styles["container"]}>
      <div className={styles["box"]}>
        <h1 className={styles["title"]}>{title}</h1>
        <p className={styles["desc"]}>{desc}</p>
      </div>
    </div>
  );
}
