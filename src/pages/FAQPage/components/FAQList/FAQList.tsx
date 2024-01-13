import React, { FC, useMemo, useState } from "react";
import st from "./FAQList.module.scss";
import ObserverAnimation from "@/components/UI/ObserverAnimation/ObserverAnimation";
import { questions } from "./questions";
import DropInfoMenu from "@/components/UI/DropInfoMenu/DropInfoMenu";

interface Props {
  typeQuestion: string;
}

const FAQList: FC<Props> = ({ typeQuestion }) => {
  const faq = useMemo(() => {
    if (typeQuestion === "All") return questions;
    else return questions.filter((q) => q.type === typeQuestion);
  }, [typeQuestion]);

  return (
    <ObserverAnimation
      typeAnimation="small-to-big"
      className={st.faq}
      threshold={0.1}
    >
      {faq.map((q) => (
        <DropInfoMenu
          withBackground
          title={q.name}
          key={q.id}
          description={q.description}
        />
      ))}
    </ObserverAnimation>
  );
};

export default FAQList;
