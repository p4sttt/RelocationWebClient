import React from "react";
import Form from "../components/Form";
import axios from "../axios";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const hendleSubmit = (e) => {
    e.preventDefault();
      axios({
        method: "post",
        url: "/auth/login",
        data: {
          email: email,
          password: password
        },
      })
      .then(res => {console.log(res.data.token)})
      .catch(err => console.log(err.response.data))
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
