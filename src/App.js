import { Routes, Route } from "react-router-dom";
import { RequireAuth } from "./hoc/RequireAuth";
import { AuthProvider } from "./hoc/AuthProvider";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import Setting from "./pages/Setting";
import SettingTemperature from "./pages/Settings/SettingTemperature"
import SettingTags from "./pages/Settings/SettingTags";

import "./index.scss";
import SettingCountries from "./pages/Settings/SettingCountries";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="settings/*" element={<Setting />} >
            <Route path="temperature" element={<SettingTemperature />} />
            <Route path="tags" element={<SettingTags />} />
            <Route path="countries" element={<SettingCountries />} />
          </Route >
          <Route
            path="dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
