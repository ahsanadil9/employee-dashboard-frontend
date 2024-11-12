import React from "react";
import { ArrowLeft, MoreVertical } from "lucide-react";
import { Employee } from "../../../types/employee.types";

interface EmployeeDetailProps {
  employee: Employee;
  onClose: () => void;
  onDelete: (id: number) => void;
}

// It renders a modal with detailed employee information, including editable options, skills, and projects. 
export const EmployeeDetail: React.FC<EmployeeDetailProps> = ({
  employee,
  onClose,
  onDelete,
}) => {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 h-full w-full z-50 overflow-y-auto">
      <div className="relative top-20 mx-auto p-5 border w-full max-w-2xl shadow-lg rounded-md bg-white">
        <div className="flex justify-between items-center mb-4 ">
          <button
            onClick={onClose}
            className="flex items-center text-gray-600 hover:text-gray-800"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back
          </button>
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
                onClick={() => {
                  onDelete(employee.ID);
                  onClose();
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-bold mb-4">{employee.Name}</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-gray-500">Role</h3>
              <p className="font-medium">{employee.Role}</p>
            </div>
            <div>
              <h3 className="text-gray-500">Department</h3>
              <p className="font-medium">{employee.Department}</p>
            </div>
            <div>
              <h3 className="text-gray-500">Email</h3>
              <p className="font-medium">{employee.Email}</p>
            </div>
            <div>
              <h3 className="text-gray-500">Phone</h3>
              <p className="font-medium">{employee.Phone}</p>
            </div>
            <div>
              <h3 className="text-gray-500">Location</h3>
              <p className="font-medium">{employee.Location}</p>
            </div>
            <div>
              <h3 className="text-gray-500">Experience</h3>
              <p className="font-medium">{employee.Experience}</p>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-gray-500 mb-2">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {employee.Skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-gray-500 mb-2">Projects</h3>
            <div className="flex flex-wrap gap-2">
              {employee.Projects.map((project, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
                >
                  {project}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
