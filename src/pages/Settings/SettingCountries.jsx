import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "../../axios";
import Form from "../../components/Form";
import { useSettings } from "../../hooks/useSettings";

export default function SettingCountries() {
  const {setCountries_, returnSettings} = useSettings()
  const [countries, setCountries] = useState(null);
  const [searchCountries, setSearchCountries] = useState("");
  const selectedCountries = returnSettings().countries

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
      setCountries_(selectedCountries)
      element.classList.toggle("country-selected");
    } else {
      selectedCountries.push(country.name.common);
      setCountries_(selectedCountries)
      element.classList.toggle("country-selected");
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
        {countries ? (
          countries.filter((country) => country.name.common.toLocaleLowerCase().includes(searchCountries.toLocaleLowerCase())).map((country) => (
            <div
              className={selectedCountries.includes(country.name.common) ? "country country-selected" : "country"}
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
