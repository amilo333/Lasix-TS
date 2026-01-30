import styles from "./service.module.css";
import pool from "../assets/images/view.png";
import restaurant from "../assets/images/restaurant.png";

const services = [
  {
    title: "Laxsik wellness",
    image: pool,
    desc: "Maintaining exercise to have a good body is indispensable when traveling. Besides the retreat activity, Lasik provides a complimentary Gym, Yoga, and an infinity pool for in-house guests.",
  },
  {
    title: "Muong Hoa Restaurant",
    image: restaurant,
    desc: "Muong Hoa restaurant is the heart of Laxsik, owning a full view of the valley. The design of Muong Hoa restaurant is inspired by the old stilt house, focusing on creating a cozy space with a friendly service style.",
  },
];

export default function ServiceSection() {
  return (
    <div className={styles.sec}>
      <section className={styles.main}>
        <h3>Laxsik Ecolodge</h3>
        <div className={styles.container}>
          {services.map((service, index) => (
            <div className={styles.box} key={index}>
              <div className={styles.imgService}>
                <img src={service.image} alt={service.title} />
              </div>

              <div className={styles.content}>
                <h4 className={styles.title}>{service.title}</h4>
                <p className={styles.desc}>{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
