import React, { FC, useMemo } from "react";
import arrow from "@/assets/breadcrumbs/arrow.svg";
import st from "./Breadcrumbs.module.scss";
import { useLocation } from "react-router-dom";
import { translatePath } from "../Router";
import { Link } from "react-router-dom";
interface Props {
  className?: string;
}
const Breadcrumbs: FC<Props> = ({ className = "" }) => {
  const location = useLocation();
  const spliceLocation = useMemo(
    () => location.pathname.split("/").splice(1),
    [location]
  );
  return (
    <ul className={`${className} ${st.breadcrumbs}`}>
      {spliceLocation.map((path, idx) => {
        const link = "/" + spliceLocation.slice(0, idx + 1).join("/");
        return (
          <li
            className={`${st.breadcrumbs__item} ${
              link === location.pathname ? st.breadcrumbs__item_active : ""
            }`}
          >
            <Link to={link}>{translatePath[path]}</Link>
            <img src={arrow} />
          </li>
        );
      })}
    </ul>
  );
};

export default Breadcrumbs;
