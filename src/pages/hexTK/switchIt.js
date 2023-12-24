import "./hexTK.css";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useNavigate } from "react-router-dom";

const SwitchIt = () => {
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();

  const Switched = async () => {
    try {
      const response = await axiosPrivate.get("/switchit");
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
      if (error.response && error.response.status === 403) {
        console.log("Redirecting to login page...");
        navigate("/login"); // Replace '/login' with your actual login page path
      }
    }
  };

  return Switched;
};

export default SwitchIt;
