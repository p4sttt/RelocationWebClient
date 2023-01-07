import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Form from "../components/Form/Form";
import axios from "../axios";
import ErrorBox from "../components/ErrorBox/ErrorBox";

export default function Register() {
  const navigate = useNavigate();
  const { signin } = useAuth();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: "/auth/registration",
      data: {
        email: email,
        name: name,
        password: password,
      },
    })
      .then((res) => {
        signin(res.data.token, () =>
          navigate("/settings/temperature", { replace: true })
        );
      })
      .catch((err) => {
        setError(err.response.data.msg);
      });
  };

  return (
    <div className="wrapper margin-top">
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
      <ErrorBox error={error} />
    </div>
  );
}
