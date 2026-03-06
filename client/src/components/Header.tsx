import logo from "../assets/images/logo/logo_2.png";
import down from "../assets/images/chevron_down.png";
import flagEN from "../assets/images/flag_eng.png";
import flagVI from "../assets/images/flag_vi.png";
import calendar from "../assets/images/icon/ic_calendar.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ic_minus from "../assets/images/icon/ic_minus.png";
import ic_plus from "../assets/images/icon/ic_plus.png";
import "./header.css";
import { useState } from "react";
import { Link } from "react-router-dom";
type Language = {
  code: string;
  label: string;
  flag: string;
};
export default function Header() {
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);
  const [guestOpen, setGuestOpen] = useState(false);

  const [guests, setGuests] = useState({
    adults: 2,
    children: 0,
    rooms: 1,
  });

  const increase = (type: "rooms" | "adults" | "children") => {
    setGuests((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };

  const decrease = (type: "rooms" | "adults" | "children") => {
    setGuests((prev) => ({
      ...prev,
      [type]: prev[type] > 0 ? prev[type] - 1 : 0,
    }));
  };
  const [show, setShow] = useState(false);
  const showBooking = () => {
    setShow((prev) => !prev);
  };
  const [open, setOpen] = useState(true);
  const openBooking = () => {
    setOpen(true);
  };
  const closeBooking = () => {
    setOpen(false);
  };

  const [langOpen, setLangOpen] = useState<boolean>(false);

  const [language, setLanguage] = useState<Language>({
    code: "ENG",
    label: "English",
    flag: flagEN,
  });

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    setLangOpen(false);
  };

  return (
    <div>
      <div className="header-row">
        <div className="header-left">
          <Link to="/">
            <img src={logo} alt="" className="logo" />
          </Link>
          <div className="name-title">Laxsik Ecolodge</div>
        </div>
        <div className="bd"></div>
        <div className="header-center">
          <span className="brand-name">Laxsik Ecolodge</span>
          <ul className="nav-list">
            <li>
              OVERVIEW <img src={down} alt="" />
            </li>
            <li>
              <Link
                to={"room"}
                style={{ textDecoration: "none", color: "white" }}
              >
                ROOMS <img src={down} alt="" />
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to={"dinning"}
              >
                DINING
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to={"spa&massage"}
              >
                SPA & MASSAGE
                <img src={down} alt="" />
              </Link>
            </li>
            <li>
              NEWS <img src={down} alt="" />
            </li>
            <li>
              GALLERY <img src={down} alt="" />
            </li>
            <li>CONTACT</li>
          </ul>
        </div>
        <div className="header-right">
          <div className="language" onClick={() => setLangOpen(!langOpen)}>
            <img src={language.flag} alt="" className="flagVI" />
            {language.code} <img src={down} alt="" />
            {langOpen && (
              <div className="lang-dropdown">
                <div
                  className="lang-item"
                  onClick={() =>
                    changeLanguage({ code: "ENG", label: "ENG", flag: flagEN })
                  }
                >
                  <img src={flagEN} alt="" />
                  ENG
                </div>

                <div
                  className="lang-item"
                  onClick={() =>
                    changeLanguage({ code: "VIE", label: "VIE", flag: flagVI })
                  }
                >
                  <img src={flagVI} alt="" className="flagVI" />
                  VIE
                </div>
              </div>
            )}
          </div>
          <button className="menu-icon" onClick={showBooking}>
            ☰
          </button>
          {!open && (
            <button onClick={openBooking} className="cta">
              FIND NOW
            </button>
          )}
        </div>
      </div>
      <div className={show ? "sub-header show" : "sub-header"}>
        <button className="booknow">
          <img src={calendar} alt="" />
          <span>BOOK NOW</span>
        </button>
      </div>

      <div className={open ? "booking-bar show" : "booking-bar"}>
        <img src={down} alt="" className="down-btn" />
        <button onClick={closeBooking} className="btn-hide">
          HIDE
        </button>
        <div className="booking-form">
          <div className="field">
            <label>Checkin Date</label>
            <DatePicker
              selected={checkIn}
              onChange={(date: Date | null) => setCheckIn(date)}
              placeholderText="Select date"
              dateFormat="dd/MM/yyyy"
            />
          </div>

          <div className="field">
            <label>Check-out Date</label>
            <DatePicker
              selected={checkOut}
              onChange={(date: Date | null) => setCheckOut(date)}
              placeholderText="Select date"
              dateFormat="dd/MM/yyyy"
              minDate={checkIn || undefined}
            />
          </div>

          <div className="field guest-field">
            <label>Guest</label>

            <div
              className="guest-input"
              onClick={() => setGuestOpen(!guestOpen)}
            >
              {guests.adults} Adults - {guests.children} Children -{" "}
              {guests.rooms} Rooms
            </div>

            {guestOpen && (
              <div className="guest-dropdown">
                <div className="guest-row">
                  <span>Rooms</span>
                  <div className="counter">
                    <button
                      className="counter-btn"
                      onClick={() => decrease("rooms")}
                    >
                      <img src={ic_minus} alt="" />
                    </button>

                    <span>{guests.rooms}</span>

                    <button
                      className="counter-btn"
                      onClick={() => increase("rooms")}
                    >
                      <img src={ic_plus} alt="" />
                    </button>
                  </div>
                </div>

                <div className="guest-row">
                  <span>Adults</span>
                  <div className="counter">
                    <button
                      className="counter-btn"
                      onClick={() => decrease("adults")}
                    >
                      <img src={ic_minus} alt="" />
                    </button>

                    <span>{guests.adults}</span>

                    <button
                      className="counter-btn"
                      onClick={() => increase("adults")}
                    >
                      <img src={ic_plus} alt="" />
                    </button>
                  </div>
                </div>

                <div className="guest-row">
                  <span>Children</span>
                  <div className="counter">
                    <button
                      className="counter-btn"
                      onClick={() => decrease("children")}
                    >
                      <img src={ic_minus} alt="" />
                    </button>

                    <span>{guests.children}</span>

                    <button
                      className="counter-btn"
                      onClick={() => increase("children")}
                    >
                      <img src={ic_plus} alt="" />
                    </button>
                  </div>
                </div>

                <button
                  className="guest-done"
                  onClick={() => setGuestOpen(false)}
                >
                  Done
                </button>
              </div>
            )}
          </div>

          <div className="field field--promo">
            <label>Promo Code</label>
            <input type="text" placeholder="Enter code" />
          </div>

          <button className="cta-2 ">FIND NOW</button>
        </div>
      </div>
    </div>
  );
}
