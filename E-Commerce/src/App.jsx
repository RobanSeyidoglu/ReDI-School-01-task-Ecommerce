import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Products from "./Components/Products";
import HomePage from "./Components/HomePage";
import AboutPage from "./Components/AboutPage";

function App() {
  return (
    <Router>
      <div className="flex flex-col items-center gap-20 p-4">
        <nav className="flex gap-4 mb-4">
          <Link to="/" className="text-blue-500 hover:underline">
            Home
          </Link>
          <Link to="/about" className="text-blue-500 hover:underline">
            About
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Products />
      </div>
    </Router>
  );
}

export default App;
