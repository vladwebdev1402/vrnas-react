import React, { FC } from "react";
import { Link as RouterLink, useMatch } from "react-router-dom";
import st from "./Link.module.scss";
import { NavLink } from "react-router-dom";
interface Props {
  to: string;
  children: React.ReactNode;
}

const Link: FC<Props> = ({ to, children }) => {
  const match = useMatch(to);

  return (
    <NavLink to={to} className={`${match ? st.link__active : ""}`}>
      {children}
    </NavLink>
  );
};

export default Link;
