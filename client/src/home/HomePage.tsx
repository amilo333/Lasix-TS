import galery_1 from "../assets/images/galery/galery_1.png";
import logo from "../assets/images/logo.png";
import Banner from "../components/Banner";
import Content from "../components/Content";
import ExploreSapa from "../components/ExploreSapa";
import Footer from "../components/Footer";
import PostSapa from "../components/PostSapa";
import RoomInfoSlide from "../components/RoomInfoSlice";
import ServiceSection from "../components/ServiceSection";


export default function HomePage() {
  return (
    <div>
      <Banner banner={galery_1}></Banner>
      <Content></Content>
      <RoomInfoSlide></RoomInfoSlide>
      <ServiceSection></ServiceSection>
      <ExploreSapa></ExploreSapa>
      <PostSapa></PostSapa>
      <Footer logo={logo}></Footer>
    </div>
  );
}
