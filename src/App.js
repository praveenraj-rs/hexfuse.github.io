import "./App.css";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import NavBar from "./components/navBar";
import { Home, About } from "./pages";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
