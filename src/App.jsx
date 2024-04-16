import { Routes, Route, useLocation } from "react-router-dom";
import Dashboard from "./Dashboard";
import Find from "./Find";

function App() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Dashboard />} />
      <Route path="/find" element={<Find />} />
    </Routes>
  );
}

export default App;
