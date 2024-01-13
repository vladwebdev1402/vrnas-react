import React from "react";
import st from "./Tems.module.scss";
import ObserverAnimation from "@/components/UI/ObserverAnimation/ObserverAnimation";
import MansAside from "@/components/UI/MansAside/MansAside";
const Tems = () => {
  return (
    <section className={`${st.tems}`}>
      <MansAside />
      <div className={st.tems__wrapper}>
        <ObserverAnimation className={st.tems__head} typeAnimation="down-to-up">
          <span className={"gradient_txt"}>Tems & Conditions</span>
          <h1 className={st.tems__title}>Terms and Conditions</h1>
          <div className={`subtitle ${st.tems__subtitle}`}>
            Welcome to VRNas. Please read these Terms and Conditions carefully
            before using our website and services.
          </div>
        </ObserverAnimation>
        <div className={st.tems__body}>
          <ObserverAnimation
            typeAnimation="left-to-right"
            className={st.tems__condition}
            threshold={0.7}
          >
            <div className={`heading-8`}>Acceptance of Term</div>
            <div className={`body-1 ${st.tems__descriptionCondition}`}>
              By accessing or using any part of our website or services, you
              agree to be bound by these Terms and Conditions. If you do not
              agree to all the terms and conditions of this agreement, then you
              may not access the website or use any services.
            </div>
          </ObserverAnimation>
          <ObserverAnimation
            typeAnimation="right-to-left"
            className={st.tems__condition}
            threshold={0.7}
          >
            <div className={`heading-8`}>Use of Website and Services</div>
            <div className={`body-1 ${st.tems__descriptionCondition}`}>
              You may use our website and services solely for lawful purposes
              and in accordance with these Terms and Conditions. You agree not
              to use our website or services:
              <ul>
                <li>
                  In any way that violates any applicable federal, state, local
                  or international law or regulation.
                </li>
                <li>
                  To transmit, or procure the sending of, any advertising or
                  promotional material, including any "junk mail", "chain
                  letter" or "spam" or any other similar solicitation.
                </li>
                <li>
                  To impersonate or attempt to impersonate [Company Name], a
                  [Company Name] employee, another user or any other person or
                  entity.
                </li>
                <li>
                  To engage in any other conduct that restricts or inhibits
                  anyone's use or enjoyment of the website or services, or
                  which, as determined by us, may harm [Company Name] or users
                  of the website or services or expose them to liability.
                </li>
              </ul>
            </div>
          </ObserverAnimation>
          <ObserverAnimation
            typeAnimation="left-to-right"
            className={st.tems__condition}
            threshold={0.7}
          >
            <div className={`heading-8`}>Intellectual Property</div>
            <div className={`body-1 ${st.tems__descriptionCondition}`}>
              The content and materials available on our website and services,
              including but not limited to text, graphics, logos, images, and
              software, are the property of [Company Name] or its licensors and
              are protected by copyright, trademark, and other intellectual
              property laws. <br />
              You may not use any of our content or materials for commercial
              purposes without obtaining a license to do so from [Company Name]
              or its licensors.
            </div>
          </ObserverAnimation>
          <ObserverAnimation
            typeAnimation="right-to-left"
            className={st.tems__condition}
            threshold={0.7}
          >
            <div className={`heading-8`}>Changes to Terms and Conditions</div>
            <div className={`body-1 ${st.tems__descriptionCondition}`}>
              We reserve the right, at our sole discretion, to modify or replace
              these Terms and Conditions at any time. By continuing to access or
              use our website and services after any revisions become effective,
              you agree to be bound by the revised terms.
            </div>
          </ObserverAnimation>
          <ObserverAnimation
            typeAnimation="left-to-right"
            className={st.tems__condition}
            threshold={0.7}
          >
            <div className={`heading-8`}>Contact Us</div>
            <div className={`body-1 ${st.tems__descriptionCondition}`}>
              If you have any questions about these Terms and Conditions, please
              contact us using the information provided on our contact page.
            </div>
          </ObserverAnimation>
        </div>
      </div>
    </section>
  );
};

export default Tems;
