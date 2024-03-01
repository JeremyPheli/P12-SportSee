import logo from "../assets/logo.png";
import "../styles/nav-h.css";

const NavHeader = () => {
  return (
    <div className="nav-h">
      <img className="logo" src={logo} alt="SportSee Logo" />
      <nav>
        <span>Acceuil</span>
        <span>Profils</span>
        <span>Réglagles</span>
        <span>Communauté</span>
      </nav>
    </div>
  );
};

export default NavHeader;
