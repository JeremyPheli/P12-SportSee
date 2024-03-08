import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../src/styles/app.css";
import NavHeader from "./components/NavHeader";
import NavLeft from "./components/NavLeft";
import Dashboard from "./pages/Dashboard";
import User from "./pages/User";

function App() {
  return (
    <BrowserRouter>
      <NavHeader />
      <NavLeft />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
