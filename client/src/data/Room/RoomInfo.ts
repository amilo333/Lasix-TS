import ic_bed from "../../assets/images/icon/ic-bed.png";
import ic_home from "../../assets/images/icon/ic-home.png";
import ic_group from "../../assets/images/icon/ic-group.png";
import room from "../../assets/images/rooms/room.jpg";

export interface RoomInfo {
  icon: string;
  text: string;
}

export interface Room {
  id: number;
  img: string;
  title: string;
  desc: string;
  price: number;
  infos: RoomInfo[];
}

export const rooms: Room[] = [
  {
    id: 1,
    img: room,
    title: "Deluxe Double Room with Balcony",
    desc: "The spacious double room features air conditioning, a private entrance, a  terrace with garden views as well as a private bathroom boasting a  shower. The unit has 1 bed.",
    price: 150.0,
    infos: [
      {
        icon: ic_bed,
        text: " 1 King bed",
      },
      {
        icon: ic_home,
        text: " 50m2",
      },
      {
        icon: ic_group,
        text: "2 adults, or 2 adults and 1 children",
      },
    ],
  },
  {
    id: 2,
    img: room,
    title: "Deluxe Double Room with Balcony",
    desc: "This double room’s standout feature is  the fireplace. The spacious double room offers air conditioning, a  private entrance, a terrace with garden views as well as a private  bathroom boasting a bath.",
    price: 120.0,
    infos: [
      {
        icon: ic_bed,
        text: " 1 King bed",
      },
      {
        icon: ic_home,
        text: " 50m2",
      },
      {
        icon: ic_group,
        text: "2 adults, or 2 adults and 1 children",
      },
    ],
  },
  {
    id: 3,
    img: room,
    title: "Family Bungalow",
    desc: "The spacious double room features air conditioning, a private entrance, a  terrace with garden views as well as a private bathroom boasting a  shower. The unit has 1 bed.",
    price: 250.0,
    infos: [
      {
        icon: ic_bed,
        text: " 4 King bed",
      },
      {
        icon: ic_home,
        text: " 50m2",
      },
      {
        icon: ic_group,
        text: "8 adults, or 6 adults and 2 childrens",
      },
    ],
  },
  {
    id: 4,
    img: room,
    title: "Deluxe King Room",
    desc: "The spacious double room features air conditioning, a private entrance, a  terrace with garden views as well as a private bathroom boasting a  shower. The unit has 1 bed.",
    price: 150.0,
    infos: [
      {
        icon: ic_bed,
        text: " 1 King bed",
      },
      {
        icon: ic_home,
        text: " 50m2",
      },
      {
        icon: ic_group,
        text: "2 adults, or 2 adults and 1 children",
      },
    ],
  },
  {
    id: 5,
    img: room,
    title: "Deluxe Twin Room",
    desc: "The spacious double room features air conditioning, a private entrance, a  terrace with garden views as well as a private bathroom boasting a  shower. The unit has 1 bed.",
    price: 150.0,
    infos: [
      {
        icon: ic_bed,
        text: " 1 King bed",
      },
      {
        icon: ic_home,
        text: " 50m2",
      },
      {
        icon: ic_group,
        text: "4 adults, or 2 adults and 1 children",
      },
    ],
  },
];
