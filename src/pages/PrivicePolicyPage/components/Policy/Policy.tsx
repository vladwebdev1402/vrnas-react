import React from "react";
import st from "./Policy.module.scss";
import ObserverAnimation from "@/components/UI/ObserverAnimation/ObserverAnimation";
import MansAside from "@/components/UI/MansAside/MansAside";
const Policy = () => {
  return (
    <section className={st.policy}>
      <MansAside />
      <div className={st.policy__wrapper}>
        <ObserverAnimation
          className={st.policy__head}
          typeAnimation="down-to-up"
        >
          <span className={`gradient_txt`}>Privacy Policy</span>
          <h1 className={st.policy__title}>Privacy Policy</h1>
          <div className={`subtitle ${st.policy__subtitle}`}>
            This Privacy Policy describes how [Company Name] collects, uses, and
            protects the personal information of our website visitors and
            customers.
          </div>
        </ObserverAnimation>
        <div className={st.policy__body}>
          <ObserverAnimation
            typeAnimation="left-to-right"
            className={st.policy__block}
          >
            <div className={`heading-8`}>Information We Collect</div>
            <div className={`body-1 ${st.policy__blockDescription}`}>
              We may collect the following types of personal information:
              <ul>
                <li>Name, email address, and other contact information.</li>
                <li>
                  Demographic information such as age, gender, and location.
                </li>
                <li>Payment information such as credit card details.</li>
                <li>Information about how you use our website and services.</li>
              </ul>
            </div>
          </ObserverAnimation>
          <ObserverAnimation
            typeAnimation="right-to-left"
            className={st.policy__block}
            threshold={0.7}
          >
            <div className={`heading-8`}>How We Use Your Information</div>
            <div className={`body-1 ${st.policy__blockDescription}`}>
              We may use your personal information for the following purposes:
              <ul>
                <li>To provide you with our services and products.</li>
                <li>To process payments and fulfill orders.</li>
                <li>To send you marketing and promotional materials.</li>
                <li>To improve our website and services.</li>
              </ul>
            </div>
          </ObserverAnimation>
          <ObserverAnimation
            typeAnimation="left-to-right"
            className={st.policy__block}
            threshold={0.7}
          >
            <div className={`heading-8`}>How We Protect Your Information</div>
            <div className={`body-1 ${st.policy__blockDescription}`}>
              We implement a variety of security measures to maintain the safety
              of your personal information when you place an order or enter,
              submit, or access your personal information. We use encryption to
              protect sensitive information transmitted online, and we also
              protect your information offline.
            </div>
          </ObserverAnimation>
          <ObserverAnimation
            typeAnimation="right-to-left"
            className={st.policy__block}
            threshold={0.7}
          >
            <div className={`heading-8`}>Information Sharing</div>
            <div className={`body-1 ${st.policy__blockDescription}`}>
              We do not sell or rent your personal information to third parties.
              However, we may share your information with our trusted
              third-party service providers who assist us in operating our
              website and services.
            </div>
          </ObserverAnimation>
          <ObserverAnimation
            typeAnimation="left-to-right"
            className={st.policy__block}
            threshold={0.7}
          >
            <div className={`heading-8`}>Cookies and Tracking</div>
            <div className={`body-1 ${st.policy__blockDescription}`}>
              We use cookies and other tracking technologies to collect
              information about your browsing behavior and preferences. This
              information is used to personalize your experience on our website
              and to analyze how visitors use our website.
            </div>
          </ObserverAnimation>
          <ObserverAnimation
            typeAnimation="right-to-left"
            className={st.policy__block}
            threshold={0.7}
          >
            <div className={`heading-8`}>Your Rights</div>
            <div className={`body-1 ${st.policy__blockDescription}`}>
              You have the right to access, update, or delete your personal
              information. You can contact us using the information provided on
              our contact page to exercise these rights.
            </div>
          </ObserverAnimation>
          <ObserverAnimation
            typeAnimation="left-to-right"
            className={st.policy__block}
            threshold={0.7}
          >
            <div className={`heading-8`}>Changes to Privacy Policy</div>
            <div className={`body-1 ${st.policy__blockDescription}`}>
              We reserve the right to update this Privacy Policy at any time. We
              will notify you of any changes by posting the new Privacy Policy
              on our website.
            </div>
          </ObserverAnimation>
          <ObserverAnimation
            typeAnimation="right-to-left"
            className={st.policy__block}
            threshold={0.7}
          >
            <div className={`heading-8`}>Contact Us</div>
            <div className={`body-1 ${st.policy__blockDescription}`}>
              If you have any questions about our Privacy Policy, please contact
              us using the information provided on our contact page.
            </div>
          </ObserverAnimation>
        </div>
      </div>
    </section>
  );
};

export default Policy;
