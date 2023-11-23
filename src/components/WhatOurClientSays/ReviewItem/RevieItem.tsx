import React, { FC, useState, useRef, useEffect } from "react";
import ava from "../../../assets/headAbout/users/user1.png";
import st from "./ReviewItem.module.scss";
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
  const refBody = useRef<HTMLDivElement>(null);
  const refHead = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [left, setLeft] = useState(0);

  useEffect(() => {
    setLeft(refHead.current!.offsetLeft);
  }, [refHead]);

  useEffect(() => {
    const resize = () => {
      const parent = refHead.current!.parentElement;
      const coef = refHead.current!.offsetLeft / parent!.clientWidth;
      let curLeft = parent!.clientWidth * coef;
      setLeft(Math.min(curLeft, parent!.clientWidth - 120));
    };

    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, [refHead]);

  useEffect(() => {
    if (refHead && refBody && open) {
      const parent = refHead.current!.parentElement;

      let curLeft = refHead.current!.offsetLeft;
      const top = refHead.current!.offsetTop;
      const width = refHead.current!.clientWidth;
      const bodyHeight = refBody.current!.scrollHeight;
      refBody.current!.style.left = `${curLeft + width}px`;
      refBody.current!.style.top = `${top + (width - bodyHeight) / 2}px`;
      if (curLeft + width + 255 > parent!.clientWidth) {
        curLeft = 20;
        refHead.current!.style.left = "20px";
        refBody.current!.style.left = `${curLeft + width}px`;
      }
    } else {
      refHead.current!.style.left = `${left}px`;
      refBody.current!.style.left = `${left + refHead.current!.clientWidth}px`;
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
