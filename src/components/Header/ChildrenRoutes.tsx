import { useClose } from "@/hooks/useClose";
import { IPath } from "@/types/IPath";
import st from "./ChildrenRoutes.module.scss";
import React, { FC, useRef } from "react";
import Link from "../UI/Link/Link";
import { useAnimateHeight } from "@/hooks/useAnimateHeihgt";
import DropdownArrow from "../UI/icons/DropdownArrow";
import { useMatchChildrenLinks } from "@/hooks/useMatchChildrenLinks";
import { useLocation } from "react-router-dom";

interface Props {
  name: string;
  paths: IPath[];
  closeBurger?: () => void;
}

const ChildrenRoutes: FC<Props> = ({ name, paths, closeBurger = () => {} }) => {
  const ref = useRef(null);
  const refBody = useRef(null);
  const { isVisible, setIsVisible } = useClose(ref);
  const location = useLocation();
  const active = useMatchChildrenLinks(paths, location.pathname);
  useAnimateHeight(refBody, isVisible);

  const clickHead = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsVisible(!isVisible);
  };

  const clickLink = () => {
    closeBurger();
    setIsVisible(!isVisible);
  };

  return (
    <div
      className={`${isVisible ? st.paths_open : ""} ${
        active ? st.paths_activeLink : ""
      } ${st.paths}`}
      ref={ref}
    >
      <a className={`link ${st.paths__head}`} onClick={clickHead}>
        {name}
        <DropdownArrow className={st.paths__arrow} />
      </a>
      <ul className={`${st.paths__body}`} ref={refBody}>
        {paths.map(({ name, to }, idx) => (
          <li className={`link ${st.path__item}`} key={idx} onClick={clickLink}>
            <Link to={to}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChildrenRoutes;
