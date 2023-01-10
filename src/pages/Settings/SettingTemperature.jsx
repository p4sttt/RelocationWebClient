import React from "react";
import { useNavigate } from "react-router-dom";
import { useSettings } from "../../store";
import shallow from 'zustand/shallow'

export default function SettingTemperature() {
  const { temperature, setTemperature } = useSettings(state => ({
    temperature: state.settings.temperature, setTemperature: state.setTemperature
  }), shallow);
  const navigate = useNavigate();

  return (
    <div className="wrapper margin-top" style={{ width: 600 }}>
      <h1>
        Choose comfortable
        <br />
        temperature
      </h1>
      <div className="temperature-btns">
        <button
          className="btn-secondary"
          onClick={() => setTemperature(temperature - 1)}
        >
          -
        </button>
        <button
          className="btn-secondary"
          style={{ width: 320 }}
          onClick={() =>
            navigate("/settings/tags", {
              replace: true,
            })
          }
        >
          {temperature ? temperature : 0}°C
        </button>
        <button
          className="btn-secondary"
          onClick={() => setTemperature(temperature + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
}
