import item1 from "../assets/images/collections/item1.png";
import item2 from "../assets/images/collections/item2.png";
import item3 from "../assets/images/collections/item3.png";
import item4 from "../assets/images/collections/item4.png";
import item5 from "../assets/images/collections/item5.png";
import item6 from "../assets/images/collections/item6.png";

import styles from "./postsapa.module.css";

const posts = [
  {
    image: item1,

    name: "@Instagram-user",
  },
  {
    image: item2,

    name: "@jennie_kim",
  },
  {
    image: item3,

    name: "@JohnDoe",
  },
  {
    image: item4,

    name: "@justinbebe",
  },
  {
    image: item5,

    name: "@IKennyWalker",
  },
  {
    image: item6,

    name: "@GreenLeaf",
  },
];
export default function PostSapa() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.title}>
          <h3>#laxsik_ecolodge_sapa</h3>
          <p>
            🌿 Beyond the limit of a place for relaxing, we bring you a must-try
            experience in Sapa by Sapa people! 🌿
          </p>
        </div>
        <div className={styles.list}>
          {posts.map((post, index) => (
            <div className={styles.box} key={index}>
              <img src={post.image} alt="" />
              <div className={styles.name}>{post.name}</div>
            </div>
          ))}
        </div>
        <div className={styles["line"]}></div>
      </div>
    </div>
  );
}
