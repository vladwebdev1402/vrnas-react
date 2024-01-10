import React, { FC, useCallback, useEffect, useState } from "react";
import st from "./Header.module.scss";
import logo from "../../assets/logo.svg";
import BorderButton from "../UI/button/BorderButton/BorderButton";
import BurgerButton from "../UI/button/BurgerButton/BurgerButton";
import { Link } from "react-router-dom";
import { routerPaths } from "../Router";
const Header: FC = () => {
  const [topScroll, setTopScroll] = useState(0);
  const [openBurger, setOpenBurger] = useState(false);

  const closeBurger = useCallback(() => {
    setOpenBurger(false);
  }, []);

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
        <Link to={routerPaths.main}>
          <img src={logo} />
        </Link>
        <nav>
          <ul className={st.header__menu}>
            <li className={`link`}>
              <Link to={routerPaths.main}>Home</Link>
            </li>
            <li className={`link`}>
              <Link to={routerPaths.about}>About us</Link>
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
          <BorderButton className={st.contact_btn}>Contact Us</BorderButton>
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
            <li className={`link`} onClick={closeBurger}>
              <Link to={routerPaths.about}>Home</Link>
            </li>
            <li className={`link`} onClick={closeBurger}>
              <Link to={routerPaths.about}>About us</Link>
            </li>
            <li className={`link`} onClick={closeBurger}>
              <a href="#">Service</a>
            </li>
            <li className={`link`} onClick={closeBurger}>
              <a href="#">Page</a>
            </li>
            <li className={`link`} onClick={closeBurger}>
              <a href="#">Blog</a>
            </li>
          </ul>
          <BorderButton className={st.burger_contact_btn}>
            Contact Us
          </BorderButton>
        </nav>
      </div>
    </header>
  );
};

export default Header;
