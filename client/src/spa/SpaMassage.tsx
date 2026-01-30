import TypesSpa from "./TypesSpa";
import Banner from "../components/Banner";
import banner_spa from "../assets/images/banner/banner-spa.png";
import DescHotel from "../dining/DescHotel";
import Footer from "../components/Footer";
import logo_1 from "../assets/images/logo/logo_1.png";

export default function SpaMassage() {
  return (
    <div>
      <Banner banner={banner_spa}></Banner>
      <DescHotel
        title="Laxsik’s Spa"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu dui  lacus. Praesent at euismod neque. Vestibulum gravida et felis eget  finibus. Ut nec mollis justo. Ut non ipsum id eros pharetra aliquet eget  nec dolor.
      Sed ac nunc a dolor posuere facilisis. Donec blandit mattis ultrices. In vel posuere leo."
      ></DescHotel>
      <TypesSpa></TypesSpa>
      <Footer logo={logo_1}></Footer>
    </div>
  );
}
