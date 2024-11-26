import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DashBoard from "./pages/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </>
  );
}

export default App;
