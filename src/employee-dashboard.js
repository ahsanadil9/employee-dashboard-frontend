import React, { useState } from "react";
import { Menu, X, Grid, Layout, MoreVertical, ArrowLeft } from "lucide-react";

const EmployeeDashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [viewMode, setViewMode] = useState("grid");
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "John Doe",
      role: "Software Engineer",
      department: "Engineering",
      email: "john.doe@company.com",
      age: 30,
      experience: "5 years",
      location: "New York",
      phone: "+1 (555) 123-4567",
      skills: ["React", "Node.js", "GraphQL"],
      projects: ["Project Alpha", "Project Beta"],
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Product Manager",
      department: "Product",
      email: "jane.smith@company.com",
      age: 35,
      experience: "8 years",
      location: "San Francisco",
      phone: "+1 (555) 987-6543",
      skills: ["Product Strategy", "Agile", "User Research"],
      projects: ["Project Gamma", "Project Delta"],
    },
  ]);

  const menuItems = [
    {
      label: "Dashboard",
      submenu: ["Overview", "Analytics"],
    },
    {
      label: "Employees",
      submenu: ["Directory", "Performance"],
    },
    {
      label: "Projects",
      submenu: ["Active", "Archived"],
    },
    {
      label: "Settings",
    },
  ];

  const handleEmployeeClick = (employee) => {
    setSelectedEmployee(employee);
  };

  const handleBackClick = () => {
    setSelectedEmployee(null);
  };

  const handleDeleteEmployee = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  };

  const renderHamburgerMenu = () => (
    <div className="md:hidden">
      <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-64 bg-white shadow-lg z-50">
          {menuItems.map((item, index) => (
            <div key={index} className="p-4 hover:bg-gray-100">
              <div className="font-medium">{item.label}</div>
              {item.submenu && (
                <div className="ml-4 mt-2">
                  {item.submenu.map((subItem, subIndex) => (
                    <div key={subIndex} className="py-2 text-sm text-gray-600">
                      {subItem}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const renderHorizontalMenu = () => (
    <div className="hidden md:flex space-x-6 px-4">
      {menuItems.map((item, index) => (
        <div key={index} className="relative group">
          <button className="py-4 px-2 hover:text-blue-600">
            {item.label}
          </button>
          {item.submenu && (
            <div className="absolute hidden group-hover:block w-48 bg-white shadow-lg">
              {item.submenu.map((subItem, subIndex) => (
                <div key={subIndex} className="p-3 hover:bg-gray-100">
                  {subItem}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );

  const renderGridView = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
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
              key={employee.id}
              onClick={() => handleEmployeeClick(employee)}
              className="hover:bg-gray-50 cursor-pointer"
            >
              <td className="px-6 py-4 whitespace-nowrap">{employee.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{employee.role}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {employee.department}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{employee.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">{employee.age}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {employee.experience}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {employee.location}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{employee.phone}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {employee.skills.join(", ")}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {employee.projects.join(", ")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderTileView = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {employees.map((employee) => (
        <div
          key={employee.id}
          className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="p-6" onClick={() => handleEmployeeClick(employee)}>
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-semibold">{employee.name}</h3>
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
                    onClick={() => handleDeleteEmployee(employee.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
            <p className="text-gray-600 mt-2">{employee.role}</p>
            <p className="text-gray-500 text-sm mt-1">{employee.department}</p>
            <div className="mt-4">
              <p className="text-sm text-gray-600">{employee.email}</p>
              <p className="text-sm text-gray-600">{employee.phone}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderDetailView = () => {
    if (!selectedEmployee) return null;

    return (
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
        <div className="relative top-20 mx-auto p-5 border w-full max-w-2xl shadow-lg rounded-md bg-white">
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={handleBackClick}
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
                    handleDeleteEmployee(selectedEmployee.id);
                    handleBackClick();
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-2xl font-bold mb-4">{selectedEmployee.name}</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-gray-500">Role</h3>
                <p className="font-medium">{selectedEmployee.role}</p>
              </div>
              <div>
                <h3 className="text-gray-500">Department</h3>
                <p className="font-medium">{selectedEmployee.department}</p>
              </div>
              <div>
                <h3 className="text-gray-500">Email</h3>
                <p className="font-medium">{selectedEmployee.email}</p>
              </div>
              <div>
                <h3 className="text-gray-500">Phone</h3>
                <p className="font-medium">{selectedEmployee.phone}</p>
              </div>
              <div>
                <h3 className="text-gray-500">Location</h3>
                <p className="font-medium">{selectedEmployee.location}</p>
              </div>
              <div>
                <h3 className="text-gray-500">Experience</h3>
                <p className="font-medium">{selectedEmployee.experience}</p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-gray-500 mb-2">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {selectedEmployee.skills.map((skill, index) => (
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
                {selectedEmployee.projects.map((project, index) => (
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

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center h-16 px-4">
            {renderHamburgerMenu()}
            <div className="flex-1 flex items-center justify-between">
              <div className="flex-shrink-0 flex items-center">
                <Layout className="h-8 w-8 text-blue-600" />
                <span className="ml-2 text-xl font-semibold">EmployeeHub</span>
              </div>
              {renderHorizontalMenu()}
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold text-gray-900">
              Employee Directory
            </h1>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 ${
                  viewMode === "grid" ? "text-blue-600" : "text-gray-600"
                }`}
              >
                <Grid size={20} />
              </button>
              <button
                onClick={() => setViewMode("tile")}
                className={`p-2 ${
                  viewMode === "tile" ? "text-blue-600" : "text-gray-600"
                }`}
              >
                <Layout size={20} />
              </button>
            </div>
          </div>

          {viewMode === "grid" ? renderGridView() : renderTileView()}
          {selectedEmployee && renderDetailView()}
        </div>
      </main>
    </div>
  );
};

export default EmployeeDashboard;
