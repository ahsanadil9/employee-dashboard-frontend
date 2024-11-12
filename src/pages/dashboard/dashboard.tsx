import React, { useState } from "react";
import { Grid, Layout } from "lucide-react";
import { useEmployees } from "../../hooks/use-employees";
import { Employee } from "../../types/employee.types";
import {
  EmployeeDetail,
  EmployeeGrid,
  EmployeeTile,
} from "../../components/features/employee";
import { HamburgerMenu } from "../../components/common/menu/hamburger-menu";

// This displays the employee directory with options to toggle between grid and tile view.
// & Allows selecting, viewing details, and deleting employees.
export const Dashboards = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "tile">("grid");
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(
    null
  );
  const { employees, loading, error, handleDeleteEmployee } = useEmployees();

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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <HamburgerMenu
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          menuItems={menuItems}
        />
      </nav>

      <main className="max-w-7xl mx-auto py-24">
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

          {viewMode === "grid" ? (
            <EmployeeGrid
              employees={employees}
              onEmployeeClick={setSelectedEmployee}
            />
          ) : (
            <EmployeeTile
              employees={employees}
              onEmployeeClick={setSelectedEmployee}
              onDeleteEmployee={handleDeleteEmployee}
            />
          )}

          {selectedEmployee && (
            <EmployeeDetail
              employee={selectedEmployee}
              onClose={() => setSelectedEmployee(null)}
              onDelete={handleDeleteEmployee}
            />
          )}
        </div>
      </main>
    </div>
  );
};
