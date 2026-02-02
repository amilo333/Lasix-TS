import logo from "../assets/images/logo/logo_2.png";
import down from "../assets/images/chevron_down.png";
import flag from "../assets/images/flag_eng.png";
import calendar from "../assets/images/icon/ic_calendar.png";
import "./header.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
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

  return (
    <div>
      <div className="header-row">
        <div className="header-left">
          <Link to='/'>
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
              ROOMS <img src={down} alt="" />
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
          <div className="language">
            <img src={flag} alt="" />
            ENG <img src={down} alt="" />
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
        <button onClick={closeBooking} className="btn-hide">
          HIDE
        </button>
        <div className="booking-form">
          <div className="field">
            <label>Checkin Date</label>
            <input type="text" />
          </div>

          <div className="field">
            <label>Check-out Date</label>
            <input type="text" placeholder="Select date" />
          </div>

          <div className="field">
            <label>Guest</label>
            <input type="text" placeholder="" />
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
