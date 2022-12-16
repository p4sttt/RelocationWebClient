import React from "react";
import Form from "../components/Form";
import axios from "../axios";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const location = useLocation();
  const navigate = useNavigate();
  const { signin } = useAuth();

  const from = location.state?.from?.pathname || "/";

  const hendleSubmit = async (e) => {
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
      <form className="forms" onSubmit={hendleSubmit}>
        <Form
          name="email"
          type="email"
          placeholder="email"
          onValueChange={(email) => setEmail(email)}
        />
        <Form
          name="password"
          type="password"
          placeholder="password"
          onValueChange={(password) => setPassword(password)}
          is_password={true}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
