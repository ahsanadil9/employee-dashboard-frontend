  import React from "react";
import { Menu, X } from "lucide-react";
import { MenuItem } from "../../../types/employee.types";

interface HamburgerMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  menuItems: MenuItem[];
}

// It renders a responsive navigation bar with a hamburger menu for mobile and horizontal menu for larger screens.
export const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  isMenuOpen,
  setIsMenuOpen,
  menuItems,
}) => (
  <div className="flex justify-between items-center py-4 px-6 md:px-4 font-bold fixed top-0 bg-white w-full shadow-md z-20">
    <div className="flex items-center text-blue-600 cursor-pointer">
      SKILL TEST
    </div>

    <div className="md:hidden">
      <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>

    <div className="hidden md:flex space-x-6">
      {menuItems.map((item, index) => (
        <div key={index} className="relative group cursor-pointer">
          <div className="font-medium">{item.label}</div>
          {item.submenu && (
            <div className="absolute left-0 top-full bg-white shadow-lg z-50 w-48 rounded-md overflow-hidden hidden group-hover:block">
              {item.submenu.map((subItem, subIndex) => (
                <div
                  key={subIndex}
                  className="py-2 px-4 hover:bg-gray-100 text-sm text-gray-600"
                >
                  {subItem}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>

    {isMenuOpen && (
      <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg z-50 overflow-y-auto h-screen">
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
