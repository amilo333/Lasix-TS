import img_1 from "../assets/images/spa/img_1.png";
import img_2 from "../assets/images/spa/img_2.png";
import ic_full_body_massage from "../assets/images/icon/ic_full_body_massage.png";
import ic_foot_massage from "../assets/images/icon/ic_foot_massage.png";
import ic_face_massage from "../assets/images/icon/ic_face_massage.png";
import ic_herbal_bath from "../assets/images/icon/ic_herbal_bath.png";

export interface Spa {
  title: string;
  desc: string;
  img: string;
}

export const spas: Spa[] = [
  {
    title: "H’Mong herbal",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu dui  lacus. Praesent at euismod neque. Vestibulum gravida et felis eget  finibus. Ut nec mollis justo. Ut non ipsum id eros pharetra aliquet eget  nec dolor. Sed ac nunc a dolor posuere facilisis. Donec blandit mattis ultrices. In vel posuere leo.",
    img: img_1,
  },
  {
    title: "Massage H'Mong",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu dui  lacus. Praesent at euismod neque. Vestibulum gravida et felis eget  finibus. Ut nec mollis justo. Ut non ipsum id eros pharetra aliquet eget  nec dolor. Sed ac nunc a dolor posuere facilisis. Donec blandit mattis ultrices. In vel posuere leo.",
    img: img_2,
  },
];

export interface Service {
  image: string;
  title: string;
  desc: string;
}

export const services: Service[] = [
  {
    image: ic_full_body_massage,
    title: "Full body massage",
    desc: "90 minutes, herbal massage",
  },
  {
    image: ic_foot_massage,
    title: "Foot massage",
    desc: "45 minutes, herbal massage",
  },
  {
    image: ic_foot_massage,
    title: "Foot massage",
    desc: "45 minutes, herbal massage",
  },
  {
    image: ic_face_massage,
    title: "face massage",
    desc: "90 minutes, herbal massage",
  },

  {
    image: ic_herbal_bath,
    title: "herbal bath",
    desc: "90 minutes, herbal massage",
  },
  {
    image: ic_herbal_bath,
    title: "herbal bath",
    desc: "90 minutes, herbal massage",
  },
];
