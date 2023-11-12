import React from "react";
import st from "./AffrodibleList.module.scss";
import cloud from "../../../assets/icons/cloud.svg";
import DarkBg from "../../UI/bg/DarkBg/DarkBg";
const AffrodibleList = () => {
  return (
    <ul className={st.affrodable__list}>
      <li className={st.affrodable__item}>
        <DarkBg>
          <img src={cloud} alt="" />
        </DarkBg>
        <div className={st.affrodable__item__body}>
          <div className={st.affrodable__item__name}>Customizable Packages</div>
          <div className={st.affrodable__item__desc}>
            We understand that each project is unique, so we offer customizable
            packages to ensure that you get the services you need at a price
            that works for you. Our team will work with you to create a package
            that meets your specific goals and budget.
          </div>
        </div>
      </li>
      <li className={st.affrodable__item}>
        <DarkBg>
          <img src={cloud} alt="" />
        </DarkBg>
        <div className={st.affrodable__item__body}>
          <div className={st.affrodable__item__name}>
            Flexible Payment Options
          </div>
          <div className={st.affrodable__item__desc}>
            We offer flexible payment options to make it easy for you to get
            started with our services. We accept various payment methods,
            including credit cards, bank transfers, and PayPal, and we can also
            work with you to create a payment plan that suits your needs.
          </div>
        </div>
      </li>
      <li className={st.affrodable__item}>
        <DarkBg>
          <img src={cloud} alt="" />
        </DarkBg>
        <div className={st.affrodable__item__body}>
          <div className={st.affrodable__item__name}>
            Satisfaction Guarantee
          </div>
          <div className={st.affrodable__item__desc}>
            We stand behind our services and are committed to ensuring that you
            are completely satisfied with the final product. If for any reason
            you are not happy with our services, we will work with you to make
            it right or provide a full refund.
          </div>
        </div>
      </li>
    </ul>
  );
};

export default AffrodibleList;
