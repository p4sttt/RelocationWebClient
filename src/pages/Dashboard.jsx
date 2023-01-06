import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import axios from "../axios";
import Header from "../components/Header/Header";

export default function Dashboard() {
  const { token } = useAuth();
  const [user, setUser] = useState({});
  const [countries, setCountries] = useState([]);
  const [news, setNews] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios({
      url: "/user",
      method: "get",
      headers: {
        token: token,
      },
    })
      .then((res) => setUser(res.data.user))
      .catch((res) => console.log(res.response.data.msg));
    axios({
      url: "/user/countries",
      method: "get",
      headers: {
        token: token,
      },
    })
      .then((res) => setCountries(res.data.userCountries))
      .catch((res) => console.log(res.response.data.msg));

    axios({
      url: "/news",
      method: "get",
      headers: {
        token: token,
      },
    })
      .then((res) => setNews(res.data.news))
      .catch((res) => console.log(res.response.data.msg));
  }, [token]);

  return (
    <>
      <Header name={user.name} />
      <div className="countries-dashboard" style={{marginTop: 180}}>
        <h1>Your countries</h1>
        <div className="countries-elements">
          {countries ? (
            countries.map((country) => (
              <div
                className="country"
                key={country._id}
                onClick={() =>
                  navigate(country.name, {
                    state: { country: country.name },
                  })
                }
              >
                <img alt={country.name} src={country.img} />
              </div>
            ))
          ) : (
            <p>loading...</p>
          )}
        </div>
      </div>
      <div className="news-dashboard" style={{ marginBottom: 150 }}>
        <h1>Latest news</h1>
        <div className="news-elements">
          {news ? (
            news.map((news) => (
              <a
                className="news"
                key={news.publishedAt}
                href={news.url}
                target="_ blank"
              >
                <img alt={news.title} src={news.urlToImage} />
              </a>
            ))
          ) : (
            <p>loading...</p>
          )}
        </div>
      </div>
    </>
  );
}
