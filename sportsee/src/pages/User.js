import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../utils/getData";
import "../styles/user.css";
import Error from "./Error";

const User = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    const data = async () => {
      const request = await getData("USER_MAIN_DATA", id);
      console.log(request);
      if (!request) return alert("data error");
      setData(request.data);
    };
    data();
  }, [id]);

  if (!data) {
    return <Error />;
  }

  return (
    <div className="profil">
      <h1>
        Bonjour{" "}
        <span style={{ color: "red" }}>{data?.userInfos?.firstName}</span>
      </h1>
      <h3>Félicitation ! Vous avez explosé vos objectifs hier 👏</h3>
    </div>
  );
};

export default User;
