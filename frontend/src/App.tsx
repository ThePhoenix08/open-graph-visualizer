import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Visualizer from "./components/pages/Visualizer";
// import Footer from "./components/navigation/Footer";
import Navbar from "./components/navigation/Navbar";

function App() {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/url/:url" element={<Visualizer />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
