import { createContext, useState } from "react";

export const DashboardContext = createContext(null);

export const DashboardProvider = ({ children }) => {
  const [countries, setCountries] = useState(null);
  const [user, setUser] = useState(null);

  const data = {
    countries: countries,
    user: user
  }

  const setCountries_ = (countries) => {
    setCountries(countries)
  }

  const setUser_ = (user) => {
    setUser(user)
  }

  const returnData = () => {
    return data
  }

  return (
    <DashboardContext.Provider value={{ returnData, setCountries_, setUser_ }}>
      {children}
    </DashboardContext.Provider>
  );
};
