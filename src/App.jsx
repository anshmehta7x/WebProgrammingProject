import { Routes, Route, useLocation } from "react-router-dom";
import Dashboard from "./Dashboard";
import Find from "./Find";
import Testimonials from "./Testimonials";
import About from "./About";

function App() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Dashboard />} />
      <Route path="/find" element={<Find />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
