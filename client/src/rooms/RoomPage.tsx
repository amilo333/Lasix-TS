import {useEffect} from 'react'
import Facilities from './Facilities'
import RoomList from './RoomList'
import Policy from './Policy'
import Footer from "../components/Footer";
import logo_1 from "../assets/images/logo/logo_1.png";
export default function RoomPage() {
  useEffect(() => {
      document.title = "Room";
    }, []);
  return (
    <div>
        <RoomList/>
        <Facilities/>
        <Policy/>
        <Footer logo={logo_1}/>
    </div>
  )
}
