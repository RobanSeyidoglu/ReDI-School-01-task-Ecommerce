import BasketList from "../components/BasketList";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function BasketPage() {
  const [basket, setBasket] = useState(
    JSON.parse(localStorage.getItem("basket")) || []
  );

  function handleDelete(index) {
    const newBasket = basket.filter((_, i) => i !== index);
    setBasket(newBasket);
    localStorage.setItem("basket", JSON.stringify(newBasket));
  }

  return (
    <div className="p-4 flex flex-col items-center">
      <Link to="/" className="text-blue-600 underline mb-4">
        ⬅ Back to Products
      </Link>
      <BasketList basket={basket} onDelete={handleDelete} />
    </div>
  );
}
