import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import './assets/font/fonts.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./home/HomePage.tsx";
import DinningPage from "./dining/DinningPage.tsx";
import SpaMassage from "./spa/SpaMassage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* mục đích muốn khi vào app thì hiển thị mặc định ra homepage khi chọn cái gì trong homepage thì nảy sang cái đó */}
        <Route path="/" element={<App />}> 
          <Route index element={<HomePage />} />
          <Route path="dinning" element={<DinningPage />} />
          <Route path="spa&massage" element={<SpaMassage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
