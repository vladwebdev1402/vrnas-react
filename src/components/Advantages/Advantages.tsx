import React from "react";
import st from "./Advantages.module.scss";
import icon1 from "../../assets/advantage/advantage1.svg";
import icon2 from "../../assets/advantage/advantage2.svg";
import icon3 from "../../assets/advantage/advantage3.svg";
import AdvantagesItem from "./AdvantagesItem/AdvantagesItem";
const Advantages = () => {
  return (
    <div className={st.advantagesContainer}>
      <AdvantagesItem
        img={icon1}
        title={"Expertise"}
        subtitle={
          "Our team consists of experienced VR developers, designers, and technicians who have a passion for VR and a commitment to delivering quality work and give the best service"
        }
      />
      <AdvantagesItem
        img={icon2}
        title={"Customization"}
        subtitle={
          "Every client is unique, and we believe every VR experience should be too. We'll work with you to create a customized solution that meets your specific needs and goals"
        }
      />
      <AdvantagesItem
        img={icon3}
        title={"Service"}
        subtitle={
          "We believe in providing exceptional customer service, from initial consultation to final delivery. Our goal is to ensure you're satisfied with every aspect of your VR experience"
        }
      />
    </div>
  );
};

export default Advantages;
