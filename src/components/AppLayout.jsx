import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@progress/kendo-react-buttons";
import { useAuth } from "../AuthContext.js";
import { signOut } from "firebase/auth";
import { auth } from "../firebase_config";
import { Icon } from "@progress/kendo-react-common";

const sidebarItems = [
  { icon: "home", route: "/" },
  { icon: "chart-line", route: "/progress-planning" },
  { icon: "trophy", route: "/competition" },
  { icon: "bulb", route: "/ai-recommendations" },
];

const AppLayout = ({ children }) => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/auth");
  };

  return (
    <div className="flex h-screen">
      <div className="bg-gray-900 text-white w-16 flex flex-col items-center py-6 space-y-6">
        {sidebarItems.map((item, index) => (
          <Button
            key={index}
            fillMode="flat"
            icon={`k-i-${item.icon}`}
            themeColor="dark"
            size="large"
            onClick={() => navigate(item.route)}
            className="p-4"
          />
        ))}
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between bg-gray-800 p-4 text-white">
          <span className="app-name text-lg font-bold">MoveUP</span>
          {user && (
            <Button themeColor="error" onClick={handleLogout} className="px-4 py-2">
              Logout
            </Button>
          )}
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default AppLayout;
