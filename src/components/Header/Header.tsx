import React, { FC, useEffect, useState } from "react";
import st from "./Header.module.scss";
import logo from "../../assets/logo.svg";
import BorderButton from "../UI/button/BorderButton/BorderButton";
const Header: FC = () => {
  const [topScroll, setTopScroll] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setTopScroll(window.pageYOffset);
    });
    return window.removeEventListener("scroll", () => {});
  }, []);
  return (
    <header
      className={` ${st.headerContainer} ${
        topScroll > 0 ? st.headerScroll : ""
      }`}
    >
      <div className={`${st.headerContentWrapper} bounding-container`}>
        <a className={st.logo} href="#">
          <img src={logo} />
        </a>
        <nav>
          <ul className={st.header_menu}>
            <li className={`link`}>
              <a href="#">Home</a>
            </li>
            <li className={`link`}>
              <a href="#">About us</a>
            </li>
            <li className={`link`}>
              <a href="#">Service</a>
            </li>
            <li className={`link`}>
              <a href="#">Page</a>
            </li>
            <li className={`link`}>
              <a href="#">Blog</a>
            </li>
          </ul>
        </nav>

        <BorderButton className={st.btn}>Contact Us</BorderButton>
      </div>
    </header>
  );
};

export default Header;
