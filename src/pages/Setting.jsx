import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

export default function Setting() {
  const navigate = useNavigate();
  const location = useLocation();


  return (
    <div className="settings">
      <Outlet />
      <div className="steps">
        {location.pathname === "/settings/temperature" ? (
          <div
            className="number number-active"
            onClick={() => navigate("temperature")}
          >
            1
          </div>
        ) : (
          <div className="number" onClick={() => navigate("temperature")}>
            1
          </div>
        )}
        {location.pathname === "/settings/tags" ? (
          <div
            className="number number-active"
            onClick={() => navigate("tags")}
          >
            2
          </div>
        ) : (
          <div className="number" onClick={() => navigate("tags")}>
            2
          </div>
        )}
        {location.pathname === "/settings/countries" ? (
          <div
            className="number number-active"
            onClick={() => navigate("countries")}
          >
            3
          </div>
        ) : (
          <div className="number" onClick={() => navigate("countries")}>
            3
          </div>
        )}
      </div>
    </div>
  );
}
