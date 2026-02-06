import { policies } from "../data/Room/PolicyData";
import styles from "./policy.module.css";
export default function Policy() {
  return (
    <div className={styles["container"]}>
      <h3 className={styles["policy"]}>Policies</h3>
      <div className={styles["box"]}>
        {policies.map((item, index) => (
          <div key={index} className={styles["item"]}>
            <div className={styles["secret"]}>
              <img src={item.img} alt="" className={styles["img"]} />
              <div className={styles["infor"]}>
                <p className={styles["title"]}>{item.title}</p>
                <p className={styles["desc"]}>{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
