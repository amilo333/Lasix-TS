import bannerDinning from "../assets/images/banner/banner-dinning.png";
import logo_1 from "../assets/images/logo/logo_1.png";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import { services } from "../data/DiningData";
import DescHotel from "./DescHotel";
import DinnerStyle from "./DinnerStyle";
import GallerySlide from "./GallerySlide";
import ServiceDining from "./ServiceDining";
import { useEffect } from "react";

export default function DinningPage() {
  const css_c = {
    marginTop: "6rem",
  };
  useEffect(() => {
    document.title = "Dinning";
  }, []);
  return (
    <div>
      <Banner banner={bannerDinning}></Banner>
      <DescHotel
        title="Muong Hoa Restaurant"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu dui  lacus. Praesent at euismod neque. Vestibulum gravida et felis eget  finibus. Ut nec mollis justo. Ut non ipsum id eros pharetra aliquet eget  nec dolor.
Sed ac nunc a dolor posuere facilisis. Donec blandit mattis ultrices. In vel posuere leo."
      ></DescHotel>
      <GallerySlide></GallerySlide>
      <div style={css_c}>
        <ServiceDining services={services}></ServiceDining>
      </div>
      <DinnerStyle></DinnerStyle>
      <Footer logo={logo_1}></Footer>
    </div>
  );
}
