import { createContext, useSate } from "react";

export const SettingContext = createContext(null);

export const SettingProvider = ({ children }) => {
  const [settings, setSettings] = useSate(null);

  const setData = (data, cd) => {
    setSettings(data);
    cd();
  };

  return (
    <SettingContext.Provider value={{ setData }}>
      {children}
    </SettingContext.Provider>
  );
};
