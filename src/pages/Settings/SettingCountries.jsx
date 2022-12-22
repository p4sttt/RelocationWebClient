import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "../../axios";
import Form from "../../components/Form";

export default function SettingCountries() {
  const [countries, setCountries] = useState(null);
  const [text, setText] = useState("");
  const selectedCountries = [];

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://restcountries.com/v3.1/all",
    }).then((countries) => setCountries(countries.data));
  }, []);

  const handleClick = (country) => {
    const element = document.getElementById(country.name.common);
    if (selectedCountries.includes(country.name.common)) {
      selectedCountries.splice(selectedCountries.indexOf(country.name.common));
      element.classList.toggle("country-selected");
    } else {
      selectedCountries.push(country.name.common);
      element.classList.toggle("country-selected");
    }
  };

  return (
    <div className="wrapper" style={{ width: 600 }}>
      <h1>
        Choose a country
        <br />
        for relocation
      </h1>
      <Form
        placeholder="Type country"
        type="text"
        onValueChange={(data) => setText(data)}
      />
      <div className="countries" style={{ marginTop: 16 }}>
        {countries ? (
          countries.map((country) => (
            <div
              className="country"
              key={country.name.official}
              onClick={() => handleClick(country)}
              id={country.name.common}
            >
              <img src={country.flags.svg} alt={country.name.common} />
            </div>
          ))
        ) : (
          <p>loading...</p>
        )}
      </div>
    </div>
  );
}
