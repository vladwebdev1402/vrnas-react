import React, { FC } from "react";
import st from "./OurServices.module.scss";
import ServiceItem from "./ServiceItem/ServiceItem";
import devIm from "../../assets/ourService/dev.svg";
import desIm from "../../assets/ourService/design.svg";
import consIm from "../../assets/ourService/consulting.svg";
import gameIm from "../../assets/ourService/games.svg";
import eIm from "../../assets/ourService/events.svg";
import enterIm from "../../assets/ourService/entertainment.svg";
import ObserverAnimation from "../UI/ObserverAnimation/ObserverAnimation";
const OurServices: FC = () => {
  return (
    <section className={`${st.pageItem} bounding-container`}>
      <ObserverAnimation
        className={`${st.service_head}`}
        typeAnimation="down-to-up"
      >
        <div className={st.service_head_txt}>
          <span className={`gradient_txt`}>OUR SERVICE</span>
          <h1 className={st.service_head_big}>Our Service</h1>
        </div>
        <div className={`subtitle ${st.service_head_subtitle}`}>
          We use the latest VR hardware and software to create high-quality VR
          experiences that are accessible and affordable. Our goal is to provide
          exceptional customer service and support, and our team is always
          available to answer any questions and address any concerns you may
          have.
        </div>
      </ObserverAnimation>

      <div className={st.service_body}>
        <ServiceItem
          title="VR Development"
          img={devIm}
          description="From concept to creation, our team of VR developers will bring your vision to life."
        />
        <ServiceItem
          title="VR Design"
          img={desIm}
          description="Our talented VR designers will create immersive and engaging environments that will captivate your audience."
        />
        <ServiceItem
          title="VR Consulting"
          img={consIm}
          description="Our VR consultants will work with you to ensure that your VR experience meets your goals and exceeds your expectations."
        />
        <ServiceItem
          title="VR Games"
          img={gameIm}
          description="We offer a wide selection of VR games that are suitable for players of all ages and skill levels."
        />
        <ServiceItem
          title="VR Events"
          img={eIm}
          description="Make your next event unforgettable with our VR event services."
        />
        <ServiceItem
          title="VR Entertainment"
          img={enterIm}
          description="Create a VR escape room, or offer VR experiences at a theme park, we have the expertise and experience to make it happen."
        />
      </div>
    </section>
  );
};

export default OurServices;
