import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Users from "./pages/Users";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/users" element={<Users />}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
