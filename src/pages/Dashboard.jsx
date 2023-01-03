import React, { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import axios from "../axios";
import Header from "../components/Header";

export default function Dashboard() {
  const { token } = useAuth();
  const [user, setUser] = useState({});
  const [countries, setCountries] = useState([]);

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
    axios({
      url: "/user/countries",
      method: "get",
      headers: {
        token: token,
      },
    })
      .then((res) => setCountries(res.data.userCountries))
      .catch((res) => console.log(res.data.msg));
  }, [token]);

  return (
    <>
      <Header name={user.name} />
      <div className="countries-dashboard">
        <h1>Your countries</h1>
        <div className="countries-elements">
          {countries ? (
            countries.map((country) => (
              <div className="country" key={country._id}>
                <img alt={country.name} src={country.img} />
              </div>
            ))
          ) : (
            <p>loading...</p>
          )}
        </div>
      </div>
    </>
  );
}
