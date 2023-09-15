import React, { FC, useEffect, useState } from "react";
import st from "./Header.module.scss";
import logo from "../../assets/logo.svg";
import BorderButton from "../UI/button/BorderButton/BorderButton";
import BurgerButton from "../UI/button/BurgerButton/BurgerButton";
const Header: FC = () => {
  const [topScroll, setTopScroll] = useState(0);
  const [openBurger, setOpenBurger] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setTopScroll(window.scrollY);
    });
    return window.removeEventListener("scroll", () => {});
  }, []);
  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];

    if (openBurger) body.className += " scroll_lock";
    else body.className = body.className.replace(" scroll_lock", "");
  }, [openBurger]);
  return (
    <header
      className={` ${st.headerContainer} ${
        topScroll > 0 ? st.headerScroll : ""
      }  ${openBurger ? st.header__burger_open : ""}`}
    >
      <div className={`${st.header} bounding-container`}>
        <a href="#">
          <img src={logo} />
        </a>
        <nav>
          <ul className={st.header__menu}>
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
        <div className={st.header__options}>
          <BorderButton className={st.btn}>Contact Us</BorderButton>
          <BurgerButton
            active={openBurger}
            onClick={() => {
              setOpenBurger(!openBurger);
            }}
          />
        </div>
      </div>
      <div className={`${st.header__burger}`}>
        <nav>
          <ul className={st.burger__nav}>
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
      </div>
    </header>
  );
};

export default Header;
