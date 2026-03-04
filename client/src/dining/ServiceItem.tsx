
import styles from './ServiceItem.module.css'

type ServiceItemprops = {
  item: {
    image: string;
    title: string;
    desc: string;
  };
};
export default function ServiceItem({ item }: ServiceItemprops) {
  return (
    <div className={styles["box"]}>
      <img src={item.image} alt="image" />
      <div className={styles['info']}>
        <p className={styles['title']}>{item.title}</p>
        <p className={styles['desc']}>{item.desc}</p>
      </div>
    </div>
  );
}
