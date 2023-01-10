import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store";
import { useDashboard } from "../store";
import axios from "../axios";
import Header from "../components/Header/Header";
import CountryCard from "../components/CountryCard/CountryCard";
import NewsCountry from "../components/NewsCard/NewsCard";
import shallow from "zustand/shallow";

export default function Dashboard() {
  const token = useAuth((state) => state.token);
  const { news, countries, user, setUser, setCountries, setNews } = useDashboard(
    (state) => ({
      news: state.news,
      countries: state.countries,
      user: state.user,
      setUser: state.setUser,
      setCountries: state.setCountries,
      setNews: state.setNews
    }),
    shallow
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (Boolean(!(user && countries && news))) {
      axios({
        url: "/user",
        method: "get",
        headers: {
          token: token,
        },
      }).then((res) => {
        setUser(res.data.user);
      });
      axios({
        url: "/user/countries",
        method: "get",
        headers: {
          token: token,
        },
      }).then((res) => {
        setCountries(res.data.userCountries);
      });
      axios({
        url: "/news",
        method: "get",
        headers: {
          token: token,
        },
      }).then(res => {
        setNews(res.data.news)
      })
    }
  }, [token]);

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
                onClick={() => navigate(country.name)}
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
