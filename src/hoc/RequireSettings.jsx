import React from "react";
import { Navigate } from "react-router-dom";
import { useSettings, useAuth } from "../store";
import axios from "../axios";
import shallow from "zustand/shallow";

const RequireSettings = async ({ children }) => {
  const token = useAuth((state) => state.token);
  const { settings, setSettings } = useSettings(
    (state) => ({ settings: state.settings, setSettings: state.setSettings }),
    shallow
  );

  const { temperature, tags, countries } = settings;

  if (!Boolean(temperature && tags && countries)) {
    const res = await axios({
      url: "/settings",
      method: "get",
      headers: {
        token: token,
      },
    });
    setSettings(res.data.settings);
    console.log(settings);
    if (!Boolean(temperature && tags && countries)) {
      return <Navigate to="/settings/temperature" />;
    }
  }

  return children;
};

export { RequireSettings };
