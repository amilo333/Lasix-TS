import React from "react";
import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";
import img4 from "../assets/images/img4.png";
import ic_chef from "../assets/images/icon/ic_chef.png";
import ic_hiking from "../assets/images/icon/ic_hiking.png";
import ic_spa from "../assets/images/icon/ic_spa.png";
import ic_dance from "../assets/images/icon/ic_dance.png";
import ic_arrow from "../assets/images/icon/ic_arrow.png";
import styles from "./explore.module.css";
const explore1 = [
  {
    image: img1,
    icon: ic_chef,
    title: "H’Mong cuisine with chef",
    desc: "Hmong Cuisine with Chef is a special program conducted by Laxsik's chefs with all their passion for Sapa cuisine and the desire to give guests an experience of immersing themselves in the culinary culture of Sapa nature.",
  },
];
const explore2 = [
  {
    image: img2,
    icon: ic_hiking,
    title: "Trekking Tour",
    desc: "Muong Hoa Valley is masterpiece created by Hoang Lien son mountain range and Muong Hoa stream. This place is known as the Edin in Sapa because it owns the most beautiful terraced fields globally, recognized by UNESCO as a world heritage. Coming to Sa Pa, one of the activities you must try is discovering the beauty of Muong Hoa Valley and Hoang Lien Son mountain range on your feet",
  },
];
const explore3 = [
  {
    image: img3,
    icon: ic_spa,
    title: "Pơ Mu Spa",
    desc: "Our bodies have an innate gift - the capacity to heal by themselves.A touch is an effective too for triggering this naturalhealing response. tI enables the body to relax, creating a therapeutic environment for the healing function. At Pơ Mu Spa, we aim to promote the holistic health of our dear guests, which is the balance of body, mind, and spirit ni ahealthy environment.",
  },
];
const explore4 = [
  {
    image: img4,
    icon: ic_dance,
    title: "Wedding on the Cloud",
    desc: "The most important event for the bride and groom is a fabulous wedding marking a milestone for each person on the journey to find true happiness. A wedding held in the small village of clouds, filled with twinkling and melodious music, will bring the most uplifting emotions to all the guest.",
  },
];
export default function ExploreSapa() {
  return (
    <div className={styles.main}>
      <h3 className={styles.name}>Exploring Sapa</h3>
      <div className={styles.wrapper}>
        {explore1.map((explore, index) => (
          <div className={styles.box} key={index}>
            <img src={explore.image} alt="" />
            <div className={styles.content}>
              <img className={styles.icon} src={explore.icon} alt="" />
              <div className={styles.title}>{explore.title}</div>
              <div className={styles.desc}>{explore.desc}</div>
              <button className={styles.btn}>
                EXPLORE <img src={ic_arrow} alt="" />
              </button>
            </div>
          </div>
        ))}
        {explore2.map((explore, index) => (
          <div className={styles.box} key={index}>
            <img src={explore.image} alt="" />
            <div className={styles.content}>
              <img className={styles.icon} src={explore.icon} alt="" />
              <div className={styles.title}>{explore.title}</div>
              <div className={styles.desc}>{explore.desc}</div>
              <button className={styles.btn}>
                EXPLORE <img src={ic_arrow} alt="" />
              </button>
            </div>
          </div>
        ))}
        {explore3.map((explore, index) => (
          <div className={styles.box} key={index}>
            <img src={explore.image} alt="" />
            <div className={styles.content}>
              <img className={styles.icon} src={explore.icon} alt="" />
              <div className={styles.title}>{explore.title}</div>
              <div className={styles.desc}>{explore.desc}</div>
              <button className={styles.btn}>
                EXPLORE <img src={ic_arrow} alt="" />
              </button>
            </div>
          </div>
        ))}
        {explore4.map((explore, index) => (
          <div className={styles.box} key={index}>
            <img src={explore.image} alt="" />
            <div className={styles.content}>
              <img className={styles.icon} src={explore.icon} alt="" />
              <div className={styles.title}>{explore.title}</div>
              <div className={styles.desc}>{explore.desc}</div>
              <button className={styles.btn}>
                EXPLORE <img src={ic_arrow} alt="" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
