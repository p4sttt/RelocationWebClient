import { useContext } from "react";
import { SettingContext } from "../hoc/SettingsProvider";

export function useSettings() {
  return useContext(SettingContext);
}
