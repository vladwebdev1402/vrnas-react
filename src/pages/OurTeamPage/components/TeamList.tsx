import React from "react";
import st from "./TeamList.module.scss";
import ObserverAnimation from "@/components/UI/ObserverAnimation/ObserverAnimation";
import TeamContainer from "@/components/UI/TeamContainer/TeamContainer";
import { team } from "./data";
const TeamList = () => {
  return (
    <div className={`bounding-container ${st.team}`}>
      <ObserverAnimation typeAnimation="down-to-up" className={st.team__head}>
        <span className={`gradient_txt`}>OUR TEAM</span>
        <h1 className={st.team__title}>Meet Our Amazing Team</h1>
      </ObserverAnimation>
      <ObserverAnimation typeAnimation="small-to-big" threshold={0.1}>
        <TeamContainer className={st.team__list} employees={team} />
      </ObserverAnimation>
    </div>
  );
};

export default TeamList;
