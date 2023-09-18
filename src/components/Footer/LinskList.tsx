import React, { FC } from "react";
import st from "./Footer.module.scss";
interface Props extends React.HTMLAttributes<HTMLUListElement> {
  st_ul?: string;
  st_li?: string;
}
const LinskList: FC<Props> = ({ children, st_ul = "", st_li = "" }) => {
  return (
    <ul className={st_ul}>
      {React.Children.toArray(children).map((child, idx) => (
        <li className={st_li}>{child}</li>
      ))}
    </ul>
  );
};

export default LinskList;
