import React from "react";
import Form from "../components/Form";
import axios from "../axios";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

import "../index.scss";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const location = useLocation();
  const navigate = useNavigate();
  const { signin } = useAuth();

  const from = location.state?.from?.pathname || "/dashboard";

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios({
      method: "post",
      url: "/auth/login",
      data: {
        email: email,
        password: password,
      },
    })
      .then((res) => {
        signin(res.data.token, () => navigate(from, { replace: true }));
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  return (
    <div className="wrapper">
      <h1>Login</h1>
      <form className="forms" onSubmit={handleSubmit}>
        <Form
          value={email}
          type="email"
          placeholder="email"
          onValueChange={(email) => setEmail(email)}
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
          Sign in
        </button>
        <button
          className="btn-outline"
          style={{ width: 350 }}
          onClick={() => navigate("/register")}
        >
          Register
        </button>
      </form>
    </div>
  );
}
