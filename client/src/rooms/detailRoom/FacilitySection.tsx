
import type { Facility } from "../../data/Room/FacilityData";
import styles from "./FacilitySection.module.css";
import FacilityItem from "./FacilityItem";
import Contact from "../../dining/Contact";
interface FacilitiProps {
  facilities: Facility[];
}

function FacilitySection({ facilities }: FacilitiProps) {
  return (
    <div className={styles["container"]}>
      <h3>FACILITIES</h3>
      <div className={styles["box-service"]}>
        {facilities.map((item, index) => (
          <FacilityItem key={index} item={item}></FacilityItem>
        ))}
      </div>
      <div className={styles["contact"]}>
        <Contact />
      </div>
    </div>
  );
}

export default FacilitySection;
