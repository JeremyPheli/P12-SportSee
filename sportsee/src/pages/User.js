import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../utils/getData";

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
  console.log(data);
  return <div>User</div>;
};

export default User;
