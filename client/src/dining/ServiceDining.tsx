import type { Service } from "../data/DiningData";
import Contact from "./Contact";
import styles from "./ServiceDining.module.css";
import ServiceItem from "./ServiceItem";


interface ServiceDiningProps {
  services: Service[];
}
export default function ServiceDining({services}: ServiceDiningProps) {
  
  return (
    <div className={styles["container"]}>
      <h3>SERVICES</h3>
      <div className={styles["box-service"]}>
        {services.map((item,index)=>(
            <ServiceItem  key={index} item = {item}></ServiceItem>
        ))}
      </div>
      <div className={styles["contact"]}>
        <Contact></Contact>
      </div>
    </div>
  );
}
