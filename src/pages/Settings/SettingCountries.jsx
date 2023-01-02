import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "../../axios";
import Form from "../../components/Form";
import { useSettings } from "../../hooks/useSettings";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function SettingCountries() {
  const navigate = useNavigate()
  const { setCountries_, returnSettings, settings } = useSettings();
  const { token } = useAuth()
  const [countries, setCountries] = useState(null);
  const [searchCountries, setSearchCountries] = useState("");
  const selectedCountries = returnSettings().countries;

  useEffect(() => {
    axios({
      method: "GET",
      url: "/countries",
    }).then((res) => setCountries(res.data.countries));
  }, []);

  const setSettings = () => {
    const { temperature, tags, countries } = settings;
    axios({
      method: "post",
      url: "/settings",
      data: {
        temperature: temperature,
        tags: tags,
        countries: countries
      },
      headers: {
        token: token
      }
    })
    navigate("/dashboard", {replace: true})
  };

  const handleClick = (country) => {
    const element = document.getElementById(country.name);
    if (selectedCountries.includes(country.name)) {
      selectedCountries.splice(selectedCountries.indexOf(country.name));
      setCountries_(selectedCountries);
      element.classList.toggle("country-selected");
    } else {
      selectedCountries.push(country.name);
      setCountries_(selectedCountries);
      element.classList.toggle("country-selected");
    }
  };

  return (
    <div className="wrapper margin-top" style={{ width: 600, marginBottom: 200 }}>
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
        {countries ? (
          countries
            .filter((country) =>
              country.name
                .toLocaleLowerCase()
                .includes(searchCountries.toLocaleLowerCase())
            )
            .map((country) => (
              <div
                className={
                  selectedCountries.includes(country.name)
                    ? "country country-selected"
                    : "country"
                }
                key={country._id}
                onClick={() => handleClick(country)}
                id={country.name}
              >
                <img src={country.img} alt={country.name} />
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
