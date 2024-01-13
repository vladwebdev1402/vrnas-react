import React, { FC } from "react";
import st from "./Footer.module.scss";
import logo from "../../assets/logo.svg";
import twitterIm from "../../assets/socialIcons//twitter.svg";
import facebookIm from "../../assets/socialIcons/facebook.svg";
import instIm from "../../assets/socialIcons/inst.svg";
import gitIm from "../../assets/socialIcons/git.svg";
import angleBg from "../../assets/footerBgAngle.svg";
import MapIcon from "../UI/icons/MapIcon";
import MailIcon from "../UI/icons/MailIcon";
import PhoneIcon from "../UI/icons/PhoneIcon";
import LinskList from "./LinskList";
import ObserverAnimation from "../UI/ObserverAnimation/ObserverAnimation";
import { routerPaths } from "../Router";
import Link from "../UI/Link/Link";

const Footer: FC = () => {
  return (
    <footer className={`${st.footer}`}>
      <ObserverAnimation
        className={`bounding-container ${st.footer__wrapper}`}
        typeAnimation="down-to-up"
      >
        <div className={`${st.footer__body}`}>
          <div className={st.footer__contacts}>
            <Link className={`link ${st.footer__link}`} to={routerPaths.main}>
              <img className={st.footer__logo} src={logo} alt="" />
            </Link>
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
                <Link
                  className={`link ${st.footer__link}`}
                  to={routerPaths.main}
                >
                  Home
                </Link>
                <Link
                  className={`link ${st.footer__link}`}
                  to={routerPaths.pricingPlan}
                >
                  Pricing Plan
                </Link>
                <Link
                  className={`link ${st.footer__link}`}
                  to={routerPaths.ourService}
                >
                  Service
                </Link>
                <Link
                  className={`link ${st.footer__link}`}
                  to={routerPaths.resentArticles}
                >
                  Blog
                </Link>
                <Link
                  className={`link ${st.footer__link}`}
                  to={routerPaths.ourTeam}
                >
                  Our Team
                </Link>
              </LinskList>
            </div>
            <div className={st.footer__links__container}>
              <div className={st.footer__links__title}>Support</div>
              <LinskList
                st_ul={st.footer__links__list}
                st_li={st.footer__links__item}
              >
                <Link to={routerPaths.about}>About us</Link>
                <Link
                  className={`link ${st.footer__link}`}
                  to={routerPaths.contacts}
                >
                  Contact us
                </Link>
                <Link
                  className={`link ${st.footer__link}`}
                  to={routerPaths.faq}
                >
                  FAQ
                </Link>
                <Link
                  className={`link ${st.footer__link}`}
                  to={routerPaths.temsAndConditions}
                >
                  Tems & Conditions
                </Link>
                <Link
                  className={`link ${st.footer__link}`}
                  to={routerPaths.privacyPolicy}
                >
                  Privacy Policy
                </Link>
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
      </ObserverAnimation>

      <img className={st.footer__angle} src={angleBg} alt="" />
    </footer>
  );
};

export default Footer;
