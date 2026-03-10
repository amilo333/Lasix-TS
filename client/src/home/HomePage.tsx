import { useEffect, lazy, Suspense } from "react";
import galery_1 from "../assets/images/galery/galery_1.png";
import logo from "../assets/images/logo.png";
import Banner from "../components/Banner";
import Content from "../components/Content";
const RoomInfoSlide = lazy(() => import("../components/RoomInfoSlice"));
const ServiceSection = lazy(() => import("../components/ServiceSection"));
const ExploreSapa = lazy(() => import("../components/ExploreSapa"));
const PostSapa = lazy(() => import("../components/PostSapa"));
const Footer = lazy(() => import("../components/Footer"));



export default function HomePage() {
  useEffect(()=>{
    document.title = 'Laxsik Ecolodge'
  },[])
  return (
    <div>
      <Banner banner={galery_1}></Banner>
      <Content></Content>
      <Suspense fallback={<div>Loading...</div>}>
        <RoomInfoSlide />
        <ServiceSection />
        <ExploreSapa />
        <PostSapa />
        <Footer logo={logo} />
      </Suspense>
    </div>
  );
}
