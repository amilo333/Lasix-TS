import ic_service_time from "../assets/images/icon/ic_service_time.png";
import ic_buffets from "../assets/images/icon/ic_buffets.png";
import ic_couple_dinner from "../assets/images/icon/ic_couple_dinner.png";
import ic_cocktail_and_drink from "../assets/images/icon/ic_cocktail_and_drink.png";
import ic_organic_ingredients from "../assets/images/icon/ic_organic_ingredients.png";
import ic_firewood from "../assets/images/icon/ic_firewood.png";

export interface Service {
  image: string;
  title: string;
  desc: string;
}

export const services: Service[] = [
  {
    image: ic_service_time,
    title: "Serving time",
    desc: "7:00 - 21h00",
  },
  {
    image: ic_buffets,
    title: "Buffets",
    desc: "+50 dishes",
  },
  {
    image: ic_couple_dinner,
    title: "Couple Dinner",
    desc: "90 minutes, herbal massage",
  },
  {
    image: ic_cocktail_and_drink,
    title: "Cocktails & Drinks",
    desc: "Unique cocktail & fresh juice",
  },
  {
    image: ic_organic_ingredients,
    title: "Organic ingredients",
    desc: "Local vegetables",
  },
  {
    image: ic_firewood,
    title: "Firewood",
    desc: "Special grill food",
  },
];
