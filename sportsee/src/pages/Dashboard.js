import { NavLink } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <NavLink to={"user/12"}>Karl</NavLink>
      <NavLink to={"user/18"}>Cécilia</NavLink>
    </div>
  );
};

export default Dashboard;
