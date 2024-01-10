import React, { FC } from "react";
import st from "./EmployeeCard.module.scss";
import { IEmployee } from "@/types/IEmployee";
import inst from "@/assets/socialIcons/inst.svg";
import facebook from "@/assets/socialIcons/facebook.svg";
import twitter from "@/assets/socialIcons/twitter.svg";
interface Props {
  employee: IEmployee;
}
const EmployeeCard: FC<Props> = ({ employee }) => {
  return (
    <div className={st.employee}>
      <div className={st.employee__body}>
        <img className={st.employee__img} src={employee.img} />
        <ul className={st.employee__social}>
          <li className={st.social__item}>
            <a href={employee.social.inst}>
              <img src={inst} />
            </a>
          </li>
          <li className={st.social__item}>
            <a href={employee.social.facebook}>
              <img src={facebook} />
            </a>
          </li>
          <li className={st.social__item}>
            <a href={employee.social.twitter}>
              <img src={twitter} />
            </a>
          </li>
        </ul>
        <div className={st.employee__info}>
          <div className={st.employee__name}>{employee.name}</div>
          <div className={st.employee__post}>{employee.post}</div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
