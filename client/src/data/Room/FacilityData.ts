import ic_wifi from '../../assets/images/icon/ic-wifi.png'
import ic_desk_bell from '../../assets/images/icon/ic-desk-bell.png'
import ic_parking from '../../assets/images/icon/ic-parking.png'
import ic_chef from '../../assets/images/icon/ic-chef.png'
import ic_swim from '../../assets/images/icon/ic-swim.png'
import ic_spa from '../../assets/images/icon/ic-spa.png'
import ic_t_shirt from '../../assets/images/icon/ic-t-shirt.png'
export interface Facility {
  title: string;
  img: string;
} //ctdl của facility

export const facilities: Facility[] = [
  { title: "Free Wi-fi", img: ic_wifi },
  { title: "room-services", img: ic_desk_bell },
  { title: "car park", img: ic_parking },
  { title: "restaurant", img: ic_chef },
  { title: "pool", img: ic_swim },
  { title: "SPA", img: ic_spa },
  { title: "laundry", img: ic_t_shirt },
];
