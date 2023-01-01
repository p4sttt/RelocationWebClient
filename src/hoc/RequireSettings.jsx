import { Navigate } from "react-router-dom";
import axios from "../axios";
import { useAuth } from "../hooks/useAuth";

const RequireSettings = async ({ children }) => {
  const { token } = useAuth();
  let settings = null;

  await axios({
    method: "get",
    url: "/settings",
    headers: {
      token: token,
    },
  }).then((res) => {
    settings = res.data.settings;
  });

  console.log(settings);

  if (
    settings.tags.length !== 0 &&
    settings.countries.length !== 0 &&
    settings.temperature
  ) {
    return children;
  }

  return <Navigate to="/settings/temperature" replace={true} />;
};

export { RequireSettings };
