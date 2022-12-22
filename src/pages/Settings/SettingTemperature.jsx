import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SettingTemperature() {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);

  return (
    <div className="wrapper" style={{width: 600}}>
      <h1>
        Choose comfortable
        <br />
        temperature
      </h1>
      <div className="temperature-btns">
        <button className="btn-secondary" onClick={() => setCount(count - 1)}>
          -
        </button>
        <button
          className="btn-secondary"
          style={{ width: 320 }}
          onClick={() => navigate("/settings/tags", { replace: true, state: {temperature: count} })}
        >
          {count}°C
        </button>
        <button className="btn-secondary" onClick={() => setCount(count + 1)}>
          +
        </button>
      </div>
    </div>
  );
}
