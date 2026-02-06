import React from "react";
import { facilities } from "../data/Room/FacilityData";
import styles from "./facility.module.css";

export default function Facilities() {
  return (
    <div className={styles["container"]}>
      <h3 className={styles["desc"]} >FACILITIES</h3>
      <div className={styles["box"]}>
        {facilities.map((facility, index) => (
          <div className={styles["item"]} key={index}>
            <img src={facility.img} alt="" className={styles["img"]} />
            <p className={styles["title"]}>{facility.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
