import ic_wifi from "../../assets/images/icon/ic-wifi.png";
import ic_desk_bell from "../../assets/images/icon/ic-desk-bell.png";
import ic_parking from "../../assets/images/icon/ic-parking.png";
import ic_chef from "../../assets/images/icon/ic-chef.png";
import ic_swim from "../../assets/images/icon/ic-swim.png";
import ic_spa from "../../assets/images/icon/ic-spa.png";

export interface Facility {
  title: string;
  img: string;
  desc: string;
} //ctdl của facility

export const facilities: Facility[] = [
  { title: "Free Wi-fi", img: ic_wifi, desc: "Unique cocktail & fresh juice" },
  {
    title: "room-services",
    img: ic_desk_bell,
    desc: "Unique cocktail & fresh juice",
  },
  { title: "car park", img: ic_parking, desc: "Unique cocktail & fresh juice" },
  { title: "restaurant", img: ic_chef, desc: "Unique cocktail & fresh juice" },
  { title: "pool", img: ic_swim, desc: "Unique cocktail & fresh juice" },
  { title: "SPA", img: ic_spa, desc: "Unique cocktail & fresh juice" },
];
