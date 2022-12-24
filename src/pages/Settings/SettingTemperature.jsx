import React from "react";
import { useNavigate } from "react-router-dom";
import { useSettings } from "../../hooks/useSettings";

export default function SettingTemperature() {
  const { setTemperature_, returnSettings } = useSettings();
  const navigate = useNavigate();

  const temperature = returnSettings().temperature;

  return (
    <div className="wrapper" style={{ width: 600 }}>
      <h1>
        Choose comfortable
        <br />
        temperature
      </h1>
      <div className="temperature-btns">
        <button
          className="btn-secondary"
          onClick={() => setTemperature_(temperature - 1)}
        >
          -
        </button>
        <button
          className="btn-secondary"
          style={{ width: 320 }}
          onClick={() =>
            navigate("/settings/tags", {
              replace: true,
              state: { temperature: temperature },
            })
          }
        >
          {temperature}°C
        </button>
        <button
          className="btn-secondary"
          onClick={() => setTemperature_(temperature + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
}
