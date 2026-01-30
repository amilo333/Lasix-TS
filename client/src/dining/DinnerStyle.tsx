import dinningEvenBig from "../assets/images/dinning/dinning-even-big.png";
import dinningEvenSmall from "../assets/images/dinning/dinning-even-small.png";
import dinningOddBig from "../assets/images/dinning/dinning-odd-big.png";
import dinningOddSmall from "../assets/images/dinning/dinning-odd-small.png";
import styles from "./DinnerStyle.module.css";

export default function DinnerStyle() {
  const dinners = [
    {
      title: "Romance Dining",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu dui  lacus. Praesent at euismod neque. Vestibulum gravida et felis eget  finibus. Ut nec mollis justo. Ut non ipsum id eros pharetra aliquet eget  nec dolor. Sed ac nunc a dolor posuere facilisis. Donec blandit mattis ultrices. In vel posuere leo.",
      img1: dinningOddSmall,
      img2: dinningOddBig,
    },
    {
      title: "H’Mong Flavor",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu dui  lacus. Praesent at euismod neque. Vestibulum gravida et felis eget  finibus. Ut nec mollis justo. Ut non ipsum id eros pharetra aliquet eget  nec dolor. Sed ac nunc a dolor posuere facilisis. Donec blandit mattis ultrices. In vel posuere leo.",
      img1: dinningEvenSmall,
      img2: dinningEvenBig,
    },
  ];
  return (
    <div className={styles["container"]}>
      {dinners.map((dinner, index) => (
        <div key={index} className={styles["box"]}>
          <div className={styles["infor"]}>
            <p className={styles["title"]}>{dinner.title}</p>
            <div className={styles["line"]}></div>
            <p className={styles["desc"]}>{dinner.desc}</p>
          </div>
          <div className={styles["img"]}>
            <img src={dinner.img1} alt="" className={styles["img1"]} />
            <img src={dinner.img2} alt="" className={styles["img2"]} />
          </div>
        </div>
      ))}
    </div>
  );
}
