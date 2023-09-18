import React, { FC } from "react";
import st from "./Footer.module.scss";
import logo from "../../assets/logo.svg";
import twitterIm from "../../assets/footerIcons/twitter.svg";
import facebookIm from "../../assets/footerIcons/facebook.svg";
import instIm from "../../assets/footerIcons/inst.svg";
import gitIm from "../../assets/footerIcons/git.svg";
import angleBg from "../../assets/footerBgAngle.svg";
import MapIcon from "../UI/icons/MapIcon";
import MailIcon from "../UI/icons/MailIcon";
import PhoneIcon from "../UI/icons/PhoneIcon";
import LinskList from "./LinskList";

const Footer: FC = () => {
  return (
    <footer className={`${st.footer}`}>
      <div className={`${st.footer__wrapper} bounding-container`}>
        <div className={`${st.footer__body}`}>
          <div className={st.footer__contacts}>
            <a href="#">
              <img className={st.footer__logo} src={logo} alt="" />
            </a>
            <LinskList
              st_ul={st.footer__social}
              st_li={st.footer__social__item}
            >
              <a className={st.footer__social__link} href="#">
                <img src={twitterIm} alt="" />
              </a>
              <a className={st.footer__social__link} href="#">
                <img src={facebookIm} alt="" />
              </a>
              <a className={st.footer__social__link} href="#">
                <img src={instIm} alt="" />
              </a>
              <a className={st.footer__social__link} href="#">
                <img src={gitIm} alt="" />
              </a>
            </LinskList>
          </div>
          <div className={st.footer__links}>
            <div className={st.footer__links__container}>
              <div className={st.footer__links__title}>Quicklinks</div>
              <LinskList
                st_ul={st.footer__links__list}
                st_li={st.footer__links__item}
              >
                <a className={`link`} href="#">
                  Home
                </a>
                <a className={`link`} href="#">
                  Pricing Plan
                </a>
                <a className={`link`} href="#">
                  Service
                </a>
                <a className={`link`} href="#">
                  Blog
                </a>
                <a className={`link`} href="#">
                  Our Team
                </a>
              </LinskList>
            </div>
            <div className={st.footer__links__container}>
              <div className={st.footer__links__title}>Support</div>
              <LinskList
                st_ul={st.footer__links__list}
                st_li={st.footer__links__item}
              >
                <a className={`link`} href="#">
                  About us
                </a>
                <a className={`link`} href="#">
                  Contact us
                </a>
                <a className={`link`} href="#">
                  FAQ
                </a>
                <a className={`link`} href="#">
                  Tems & Conditions
                </a>
                <a className={`link`} href="#">
                  Privacy Policy
                </a>
              </LinskList>
            </div>
            <div className={st.footer__links__container}>
              <div className={st.footer__links__title}>Need Help?</div>
              <LinskList
                st_ul={st.footer__links__list}
                st_li={st.footer__links__item}
              >
                <a className={`link ${st.footer__link_img}`} href="#">
                  <div className={st.link__img__container}>
                    <MapIcon />
                  </div>
                  Tanjung Sari Street no.48, Pontianak City
                </a>
                <a className={`link ${st.footer__link_img}`} href="#">
                  <div className={st.link__img__container}>
                    <MailIcon />
                  </div>
                  Support@VRNas.com
                </a>
                <a className={`link ${st.footer__link_img}`} href="#">
                  <div className={st.link__img__container}>
                    <PhoneIcon />
                  </div>
                  +123 456 7890
                </a>
              </LinskList>
            </div>
          </div>
        </div>
        <div className={st.footer__divider}></div>
        <div className={st.footer__copyright}>
          © Copyright 2023, All Rights Reserved
        </div>
      </div>

      <img className={st.footer__angle} src={angleBg} alt="" />
    </footer>
  );
};

export default Footer;
