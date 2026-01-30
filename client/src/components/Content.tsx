import React from "react";
import "./content.css";
import screen from "../assets/images/bg-screen.jpg";

export default function Content() {
  const title = "At the doorstep of Sapa nature";
  const para =
    "Acenturies ago in Sa Pa appeared a mysterious tribe; they built their houses on the high mountains where the terrain is dangerous and turned those places into arable land of their tribe. Day after day, they became the largest tribe in Sapa. Al the scenes of that beautiful painting helped us to conceptualize Lasik Ecolodge following the original of an early 20th-century H'Mong village right in the heart of Muong Hoa Valley.";
  return (
    <div>
      <div className="content-info" style={{
        backgroundImage: `url(${screen})`,
      }}>
        <div className="info">
          
          <h3>{title}</h3>
          <p>{para}</p>
        </div>
      </div>
    </div>
  );
}
