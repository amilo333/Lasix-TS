import ic_wifi from "../../assets/images/icon/ic-wifi-policy.png";
import ic_luggage_policy from "../../assets/images/icon/ic-luggage-policy.png";
import ic_car_policy from "../../assets/images/icon/ic-card-policy.png";
import ic_cancel_policy from "../../assets/images/icon/ic-cancel-policy.png";

export interface Policy {
  title: string;
  img: string;
  desc: String;
}

export const policies: Policy[] = [
  {
    title: "Check-in/-out Times",
    img: ic_wifi,
    desc: "Check-in Time: 3:00 PM Check-out Time: 12:00 PM",
  },
  {
    title: "Early Arrivals and Late Departures",
    img: ic_luggage_policy,
    desc: "If you expect to arrive early in the day and would like immediate access  to your room, we recommend booking the room for the prior night to  guarantee immediate access. Similarly, for late departures, reserving an  additional night will guarantee access to your guest room until you  depart. If you choose not to reserve, we will be glad to store your bags  and make our fitness facilities available for you to freshen up.",
  },
  {
    title: "Credit Cards",
    img: ic_car_policy,
    desc: "American Express, Visa, Master Card, JCB.",
  },
  {
    title: "Cancel booking",
    img: ic_cancel_policy,
    desc: "CLorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in  magna id diam viverra egestas vel nec magna. In lacinia libero at libero  scelerisque, quis malesuada lectus tincidunt. Donec a justo egestas,  pellentesque dui malesuada, mattis urna.",
  },
];
