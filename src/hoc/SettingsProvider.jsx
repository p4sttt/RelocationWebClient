import { createContext, useState } from "react";

export const SettingContext = createContext(null);

export const SettingProvider = ({ children }) => {
  const [temperature, setTemperature] = useState(0);
  const [tags, setTag] = useState([]);
  const [countries, setCountries] = useState([]);

  const settings = {
    temperature: temperature,
    tags: tags,
    countries: countries,
  };

  const setTemperature_ = (temperature) => {
    setTemperature(temperature);
  };

  const setTags_ = (tags) => {
    setTag(tags);
  };

  const setCountries_ = (countries) => {
    setCountries(countries);
  };

  const returnSettings = () => {
    return settings;
  };

  return (
    <SettingContext.Provider
      value={{ setTemperature_, setTags_, setCountries_, returnSettings, settings }}
    >
      {children}
    </SettingContext.Provider>
  );
};
