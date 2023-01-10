import React from "react";
import axios from "../axios";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../store";
import shallow from "zustand/shallow";

import "../index.scss";
import Form from "../components/Form/Form";
import ErrorBox from "../components/ErrorBox/ErrorBox";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(null);

  const location = useLocation();
  const navigate = useNavigate();
  const { signin } = useAuth(
    (state) => ({ signin: state.signin, token: state.token }),
    shallow
  );

  const from = location.state?.from?.pathname || "/dashboard";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios({
      method: "post",
      url: "/auth/login",
      data: {
        email: email,
        password: password,
      },
    });
    if (res.status !== 200) {
      setError(res.response.data.msg);
    } else {
      signin(res.data.token);
      navigate(from, { replace: true });
    }
  };

  return (
    <>
      <div className="wrapper margin-top">
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
      <ErrorBox error={error} />
    </>
  );
}
