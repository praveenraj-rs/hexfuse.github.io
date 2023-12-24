import { useState } from "react";
import "./hexTK.css";
import NavBar from "../../components/navBar";
import Users from "../userProfile";
import SwitchIt from "./switchIt";
import ToggleButton from "../../components/toggleButton";

const HexTK = () => {
  const [showUsers, setShowUsers] = useState(false);

  const handleButtonClick = () => {
    setShowUsers(!showUsers);
  };

  const Switching = SwitchIt();
  return (
    <>
      <NavBar />
      <div className="hexTK">
        <h1>HexTK</h1>
        <p>Simplify the ESP connection.</p>
        <button onClick={handleButtonClick}>Show Users</button>
        {showUsers && <Users />}
        <button onClick={Switching}>Switch</button>
        <ToggleButton label="Bulb" clickHandle={Switching}></ToggleButton>
      </div>
    </>
  );
};

export default HexTK;
