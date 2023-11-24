import React, { FC, useState, useRef, useEffect } from "react";
import ava from "../../../assets/headAbout/users/user1.png";
import st from "./ReviewItem.module.scss";
interface Props {
  img: string;
  description: string;
  left: number; // в процентах
  name: string;
  jobTitle: string;
  className?: string;
}
const RevieItem: FC<Props> = ({
  className = "",
  left,
  name,
  jobTitle,
  description,
  img,
}) => {
  const refBody = useRef<HTMLDivElement>(null);
  const refHead = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const parent = refHead.current!.parentElement;

    if (refHead && refBody && open) {
      // body открывается
      let curLeft = refHead.current!.offsetLeft;
      const top = refHead.current!.offsetTop;
      const width = refHead.current!.clientWidth;
      const bodyHeight = refBody.current!.scrollHeight;
      refBody.current!.style.left = `${curLeft + width}px`;
      refBody.current!.style.top = `${top + (width - bodyHeight) / 2}px`;

      // если выходит за пределы контейнера
      if (curLeft + width + 255 + 20 > parent!.clientWidth) {
        if (parent!.clientWidth > 650) {
          curLeft = 40;
          refHead.current!.style.left = `${curLeft}%`;
          refBody.current!.style.left = `${
            curLeft + (refHead.current!.clientWidth / parent!.clientWidth) * 100
          }%`;
        } else {
          curLeft = 20;
          refHead.current!.style.left = "20px";
          refBody.current!.style.left = `${curLeft + width}px`;
        }
      }
    } else {
      // закрытие body
      refHead.current!.style.left = `${left}%`;
      refBody.current!.style.left = `${
        left + (refHead.current!.clientWidth / parent!.clientWidth) * 100
      }%`;
    }
  }, [open, refBody, refHead, left]);

  return (
    <>
      <div
        ref={refHead}
        className={`${st.review__img} ${className}`}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <img className={st.review__ava} src={ava} alt="" />
      </div>

      <div
        className={`${st.review__body} ${open ? st.review__body_open : ""}`}
        ref={refBody}
      >
        <div className={st.review__description}>{description}</div>
        <div className={st.review__info}>
          <span className={st.review__name}>{name}</span> -{" "}
          <span className={st.review__jobTitle}>{jobTitle}</span>
        </div>
      </div>
    </>
  );
};

export default RevieItem;
