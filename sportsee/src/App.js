import "../src/styles/app.css";
import NavHeader from "./components/NavHeader";
import NavLeft from "./components/NavLeft";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div>
      <NavHeader />
      <div className="app-content">
        <NavLeft />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
