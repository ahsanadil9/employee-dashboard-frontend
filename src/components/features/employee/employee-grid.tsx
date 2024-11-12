import React from "react";
import { Employee } from "../../../types/employee.types";

interface EmployeeGridProps {
  employees: Employee[];
  onEmployeeClick: (employee: Employee) => void;
}

// It renders a table displaying a list of employees with their details. & allows selecting an employee to view more information on click.
export const EmployeeGrid: React.FC<EmployeeGridProps> = ({
  employees,
  onEmployeeClick,
}) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 ">
        <thead className="bg-gray-50">
          <tr>
            {[
              "Name",
              "Role",
              "Department",
              "Email",
              "Age",
              "Experience",
              "Location",
              "Phone",
              "Skills",
              "Projects",
            ].map((header) => (
              <th
                key={header}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {employees.map((employee) => (
            <tr
              key={employee.ID}
              onClick={() => onEmployeeClick(employee)}
              className="hover:bg-gray-50 cursor-pointer"
            >
              <td className="px-6 py-4 whitespace-nowrap">{employee.Name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{employee.Role}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {employee.Department}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{employee.Email}</td>
              <td className="px-6 py-4 whitespace-nowrap">{employee.Age}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {employee.Experience}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {employee.Location}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{employee.Phone}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {(employee.Skills || []).join(", ")}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {(employee.Projects || []).join(", ")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
