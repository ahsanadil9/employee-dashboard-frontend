import { useState, useEffect } from "react";
import { Employee } from "../types/employee.types";
import { employeeService } from "../services/api.service";

// This custom hook that fetches employee data, handles loading and error states, and provides a function to delete an employee.
export const useEmployees = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const data = await employeeService.getEmployees();
        setEmployees(data);
      } catch (err) {
        setError("Failed to fetch employees");
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  const handleDeleteEmployee = (ID: number) => {
    setEmployees(employees.filter((emp) => emp.ID !== ID));
  };

  return { employees, loading, error, handleDeleteEmployee };
};
