import React, { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import axios from "../axios";
import Header from "../components/Header";

export default function Dashboard() {
  const { token } = useAuth();
  const [user, setUser] = useState({});

  useEffect(() => {
    axios({
      url: "/user",
      method: "get",
      headers: {
        token: token,
      },
    })
      .then((res) => setUser(res.data.user))
      .catch((res) => console.log(res.data.msg));
  }, [token]);

  return (
    <>
      <Header name={user.name} />
      <h1>Slava Ukraine</h1>
    </>
  );
}
