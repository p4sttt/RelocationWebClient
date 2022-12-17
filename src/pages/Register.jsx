import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form";

export default function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/settings", { replace: true });
  };

  return (
    <div className="wrapper">
      <h1>Register</h1>
      <form className="forms" onSubmit={handleSubmit}>
        <Form
          value={email}
          type="email"
          placeholder="email"
          onValueChange={(email) => setEmail(email)}
        />
        <Form
          value={name}
          type="name"
          placeholder="name"
          onValueChange={(name) => setName(name)}
        />
        <Form
          value={password}
          type="password"
          placeholder="password"
          onValueChange={(password) => setPassword(password)}
          is_password={true}
        />
        <button
          className="btn-default"
          type="submit"
          style={{ marginTop: 16, width: 350 }}
        >
          Sign up
        </button>
        <button
          className="btn-outline"
          style={{ width: 350 }}
          onClick={() => navigate("/login")}
        >
          Login
        </button>
      </form>
    </div>
  );
}
