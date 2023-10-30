import "./App.css";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import NavBar from "./components/navBar";
import { Home, About, Members } from "./pages";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/members" element={<Members />} />
      </Routes>
    </>
  );
}

export default App;
