import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Login from "./components/Login";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="login" element={<Login />} />
      </Routes>

      {/* <Login /> */}
      <Footer />
    </div>
  );
}

export default App;
