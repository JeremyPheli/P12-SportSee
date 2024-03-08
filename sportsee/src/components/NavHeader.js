import { NavLink, useParams } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/nav-h.css";

const NavHeader = () => {
  const { id } = useParams();

  return (
    <div className="nav-h">
      <img className="logo" src={logo} alt="SportSee Logo" />
      <nav>
        <NavLink to={"/"}>
          <span>Acceuil</span>
        </NavLink>
        <span>Profils</span>
        <span>Réglagles</span>
        <span>Communauté</span>
      </nav>
    </div>
  );
};

export default NavHeader;
