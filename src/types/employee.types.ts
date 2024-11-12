export interface Employee {
  ID: number;
  Name: string;
  Role: string;
  Department: string;
  Email: string;
  Age: number;
  Experience: string;
  Location: string;
  Phone: string;
  Skills: string[];
  Projects: string[];
}

export interface MenuItem {
  label: string;
  submenu?: string[];
}
