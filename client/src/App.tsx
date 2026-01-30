import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import BackToTop from "./components/BackToTop";
import './index.css'
function App() {
  return (
    <>
      <Header></Header>
      <Outlet/>
      <BackToTop/>
    </>
  );
}

export default App;
