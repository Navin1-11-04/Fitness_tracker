import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@progress/kendo-react-buttons";
import { useAuth } from "../AuthContext.js";
import { signOut } from "firebase/auth";
import { auth } from "../firebase_config";
import { Typography } from '@progress/kendo-react-common';

const sidebarItems = [
  { icon: "fa-solid fa-house", route: "/" },
  { icon: "fa-solid fa-calendar", route: "/progress-planning" },
  { icon: "fa-solid fa-ranking-star", route: "/competition" },
  { icon: "fa-solid fa-lightbulb", route: "/ai-recommendations" },
];
const AppLayout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation(); 
  const { user } = useAuth();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/auth");
  };

  return (
    <div className="app">
      <div className="header">
        <h2 className="app-name">MoveUP</h2>
        {user && (
          <Button themeColor="error" onClick={handleLogout} className="logout-btn">
            Logout<i class="fa-solid fa-xmark" style={{marginLeft:'10px'}}></i>
          </Button>
        )}
      </div>
      <div className="main">
        <div className="sidebar">
          {sidebarItems.map((item, index) => {
            const isActive = location.pathname === item.route;
            return (
              <Button
                key={index}
                fillMode="flat"
                themeColor="dark"
                size="large"
                onClick={() => navigate(item.route)}
                className={`sidebar-btn ${isActive ? "active" : ""}`}
                style={{
                  background: isActive ? "#cddc39" : "transparent",
                  color: isActive ? "#cddc39" : "#fff",
                  borderRadius: "999px",
                  height: "45px",
                  width: "45px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "15px",
                  transition: "background 0.3s, color 0.3s",
                }}
              >
               <i className={item.icon}></i> 
              </Button>
            );
          })}
        </div>
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default AppLayout;