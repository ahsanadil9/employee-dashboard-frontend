import React from "react";
import { MoreVertical } from "lucide-react";
import { Employee } from "../../../types/employee.types";

interface EmployeeTileProps {
  employees: Employee[];
  onEmployeeClick: (employee: Employee) => void;
  onDeleteEmployee: (id: number) => void;
}

// It renders a grid of employee tiles displaying basic information and options for editing, flagging, or deleting an employee..
export const EmployeeTile: React.FC<EmployeeTileProps> = ({
  employees,
  onEmployeeClick,
  onDeleteEmployee,
}) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 cursor-pointer">
    {employees.map((employee) => (
      <div
        key={employee.ID}
        className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
      >
        <div className="p-6" onClick={() => onEmployeeClick(employee)}>
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-semibold">{employee.Name}</h3>
            <div className="relative group">
              <button className="p-1 rounded-full hover:bg-gray-100">
                <MoreVertical size={20} />
              </button>
              <div className="absolute right-0 hidden group-hover:block w-48 bg-white shadow-lg rounded-md">
                <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                  Edit
                </button>
                <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                  Flag
                </button>
                <button
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
                  onClick={() => onDeleteEmployee(employee.ID)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
          <p className="text-gray-600 mt-2">{employee.Role}</p>
          <p className="text-gray-500 text-sm mt-1">{employee.Department}</p>
          <div className="mt-4">
            <p className="text-sm text-gray-600">{employee.Email}</p>
            <p className="text-sm text-gray-600">{employee.Phone}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
);
