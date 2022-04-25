import { Routes, Route, Navigate } from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";
import MainFooter from "./components/MainFooter"
import MainNav from "./components/MainNav";
import "./App.css";

function App() {
  return (
    <div className="App">
      <MainNav />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/about" />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
      <MainFooter />
    </div>
  );
}

export default App;
