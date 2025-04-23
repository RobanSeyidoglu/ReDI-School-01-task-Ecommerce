import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BasketPage from "./pages/BasketPage";

function App() {
  return (
    <div className="bg-gray-700">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/basket" element={<BasketPage />} />
      </Routes>
    </div>
  );
}

export default App;
