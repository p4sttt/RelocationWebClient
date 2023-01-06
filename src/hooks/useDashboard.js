import { useContext } from "react";
import { DashboardContext } from "../hoc/DashboardProvider";

export function useDashboard() {
  return useContext(DashboardContext);
}
