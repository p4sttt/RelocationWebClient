import React, { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useDashboard } from "../hooks/useDashboard";
import axios from "../axios";
import Header from "../components/Header/Header";
import CountryCard from "../components/CountryCard/CountryCard";
import NewsCountry from "../components/NewsCard/NewsCard";

export default function Dashboard() {
  const { token } = useAuth();
  const { returnData, setCountries_, setUser_ } = useDashboard();
  const [news, setNews] = useState(null);

  const { countries, user } = returnData();

  useEffect(() => {
    if (Boolean(!(countries && user))) {
      axios({
        url: "/user",
        method: "get",
        headers: {
          token: token,
        },
      })
        .then((res) => setUser_(res.data.user))
        .catch((res) => console.log(res.response.data.msg));
      axios({
        url: "/user/countries",
        method: "get",
        headers: {
          token: token,
        },
      })
        .then((res) => setCountries_(res.data.userCountries))
        .catch((res) => console.log(res.response.data.msg));
    }

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

  console.log(news)

  return (
    <>
      <Header name={user ? user.name : "null"} />
      <div className="countries-dashboard" style={{ marginTop: 180 }}>
        <h1>Your countries</h1>
        <div className="countries-elements">
          {countries ? (
            countries.map((country) => (
              <CountryCard
                name={country.name}
                img={country.img}
                key={country._id}
              />
            ))
          ) : (
            <p>loading...</p>
          )}
        </div>
      </div>
      <div className="news-dashboard" style={{ marginBottom: 100 }}>
        <h1>Latest news</h1>
        <div className="news-elements">
          {news ? (
            news.map((news) => (
              <NewsCountry
                url={news.url}
                title={news.title}
                img={news.urlToImage}
                key={news.publishedAt}
              />
            ))
          ) : (
            <p>loading...</p>
          )}
        </div>
      </div>
    </>
  );
}
