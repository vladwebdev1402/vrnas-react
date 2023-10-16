import React, { FC, useState, useRef } from "react";
import ava from "../../../assets/headAbout/users/user1.png";
import st from "./ReviewItem.module.scss";
import bgSh from "../../../assets/bgShadow/sh-small.svg";
import { useAnimateHeight } from "../../../hooks/useAnimateHeihgt";
interface Props {
  img: string;
  description: string;
  name: string;
  jobTitle: string;
  className?: string;
}
const RevieItem: FC<Props> = ({
  className = "",
  name,
  jobTitle,
  description,
  img,
}) => {
  const ref = useRef(null);
  const [open, setOpen] = useState<boolean>(false);
  useAnimateHeight(ref, open);
  return (
    <div className={`${className} ${st.review} ${open ? st.review_open : ""}`}>
      <div
        className={st.review__img}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <img className={st.review__ava} src={ava} alt="" />
      </div>

      {open && (
        <div
          className={`${st.review__body} ${open ? st.review__body_open : ""}`}
          ref={ref}
        >
          <div className={st.review__description}>{description}</div>
          <div className={st.review__info}>
            <span className={st.review__name}>{name}</span> -{" "}
            <span className={st.review__jobTitle}>{jobTitle}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default RevieItem;
