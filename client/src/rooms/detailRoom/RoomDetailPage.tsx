import { useParams } from "react-router-dom";
import { rooms } from "../../data/Room/RoomInfo";
import GallerySlide from "../../dining/GallerySlide";
import BannerRoom from "./BannerRoom";

import Footer from "../../components/Footer";
import RoomInfoSlide from "../../components/RoomInfoSlice";
import { facilities } from "../../data/Room/FacilityData";
import logo_1 from "../../assets/images/logo/logo_1.png";
import FacilitySection from "./FacilitySection";

export default function RoomDetailPage() {
  const { id } = useParams();

  const roomId = Number(id);
  const room = rooms.find((r) => r.id === roomId);

  if (!room) return <div>Room not found</div>;

  return (
    <div>
      <BannerRoom room={room} />
      <GallerySlide />
      <FacilitySection facilities={facilities} />
      <RoomInfoSlide />
      <Footer logo={logo_1} />
    </div>
  );
}
