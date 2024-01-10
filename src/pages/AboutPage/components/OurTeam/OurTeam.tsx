import React from "react";
import st from "./OurTeam.module.scss";
import ObserverAnimation from "@/components/UI/ObserverAnimation/ObserverAnimation";
import { team } from "./team";
import TeamContainer from "@/components/UI/TeamContainer/TeamContainer";
import BgBlackButton from "@/components/UI/button/BgBlackButton/BgBlackButton";
const OurTeam = () => {
  return (
    <section className={`bounding-container ${st.team}`}>
      <ObserverAnimation typeAnimation="down-to-up" className={st.team__header}>
        <div>
          <span className={`gradient_txt`}>OUR TEAM</span>
          <h1 className={st.team__title}>Our Professionals Team</h1>
        </div>
        <BgBlackButton className={st.team__all_desktop}>see all</BgBlackButton>
      </ObserverAnimation>
      <ObserverAnimation typeAnimation="small-to-big" className={st.team__body}>
        <TeamContainer className={st.team__employees} employees={team} />
      </ObserverAnimation>
      <BgBlackButton className={st.team__all_mobile}>see all</BgBlackButton>
    </section>
  );
};

export default OurTeam;
