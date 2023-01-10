import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "../../axios";
import Form from "../../components/Form/Form";
import { useSettings } from "../../store";
import { useAuth } from "../../store";
import { useNavigate } from "react-router-dom";
import shallow from "zustand/shallow";

export default function SettingCountries() {
  const navigate = useNavigate();
  const { settings, setCountries } = useSettings(
    (state) => ({
      settings: state.settings,
      setCountries: state.setCountries,
    }),
    shallow
  );
  const [allCountries, setAllCountries] = useState(null);
  const [searchCountries, setSearchCountries] = useState("");
  const token = useAuth((state) => state.token);
  const { temperature, tags, countries } = settings;

  useEffect(() => {
    axios({
      method: "GET",
      url: "/countries",
    }).then((res) => setAllCountries(res.data.countries));
  }, []);

  const setSettings = () => {
    axios({
      method: "post",
      url: "/settings",
      data: {
        temperature: temperature,
        tags: tags,
        countries: countries,
      },
      headers: {
        token: token,
      },
    });
    navigate("/dashboard", { replace: true });
  };

  const handleClick = (country) => {
    if (countries.includes(country)) {
      setCountries([...countries.filter((e) => e !== country)]);
    } else {
      setCountries([...countries, country]);
    }
  };

  return (
    <div className="wrapper" style={{ width: 600, marginBottom: 200 }}>
      <h1>
        Choose a country
        <br />
        for relocation
      </h1>
      <Form
        placeholder="Type country"
        type="text"
        onValueChange={(data) => setSearchCountries(data)}
      />
      <div className="countries" style={{ marginTop: 16 }}>
        {allCountries ? (
          allCountries
            .filter((country) =>
              country.name
                .toLocaleLowerCase()
                .includes(searchCountries.toLocaleLowerCase())
            )
            .map((country) => (
              <div
                key={country._id}
                className={
                  countries.includes(country.name)
                    ? "CountryCard Active"
                    : "CountryCard"
                }
                onClick={() => handleClick(country.name)}
              >
                <img src={country.img} alt={country.name} />
                <div className="Name">
                  <p>{country.name}</p>
                </div>
              </div>
            ))
        ) : (
          <p>loading...</p>
        )}
      </div>
      <button className="btn-default" onClick={() => setSettings()}>
        Finish
      </button>
    </div>
  );
}
