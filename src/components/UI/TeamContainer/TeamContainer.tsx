import { IEmployee } from "@/types/IEmployee";
import st from "./TeamContainer.module.scss";
import React, { FC } from "react";
import EmployeeCard from "@/components/EmployeeCard/EmployeeCard";

interface Props {
  employees: IEmployee[];
  className?: string;
}

const TeamContainer: FC<Props> = ({ className = "", employees }) => {
  return (
    <div className={`${className} ${st.employees}`}>
      {employees.map((employee) => (
        <EmployeeCard employee={employee} key={employee.id} />
      ))}
    </div>
  );
};

export default TeamContainer;
