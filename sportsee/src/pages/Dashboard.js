import { NavLink } from "react-router-dom";

const Dashboard = () => {
  return (
    <div style={{ display: "flex", gap: "50px" }}>
      <NavLink to={"user/12"}>
        <div>KARL</div>
      </NavLink>
      <NavLink to={"user/18"}>
        <div>CECILIA</div>
      </NavLink>
    </div>
  );
};

export default Dashboard;
