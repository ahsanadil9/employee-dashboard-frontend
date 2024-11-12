import axios from "axios";
import { Employee } from "../types/employee.types";

// This public API displays employee data & sensitive information should be stored in the .env file.
const BASE_URI = "https://dummyjson.com";
const API_PREFIX = "c/12f2-2a61-4ed7-a8eb";
const API_URI = `${BASE_URI}/${API_PREFIX}`;

export const employeeService = {
  async getEmployees(): Promise<Employee[]> {
    try {
      const response = await axios.get(API_URI);
      return response.data;
    } catch (error) {
      console.error("Error fetching employees:", error);
      throw error;
    }
  },
};
