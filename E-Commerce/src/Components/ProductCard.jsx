import { useState } from "react";

export default function ProductCard({ product, onAdd }) {
  const [showDescription, setShowDescription] = useState(false);
  const [showAddedMessage, setShowAddedMessage] = useState(false);

  const handleAddToBasket = () => {
    onAdd(product);
    setShowAddedMessage(true);

    setTimeout(() => {
      setShowAddedMessage(false);
    }, 2500);
  };

  return (
    <div className="flex gap-3 flex-col w-xs bg-cyan-950 shadow-lg rounded-lg p-4 items-center text-center border-2 border-transparent hover:border-blue-400 transition-all">
      <img
        src={product.image}
        alt={product.title}
        className="w-32 h-32 object-contain mb-2"
        loading="lazy"
      />
      <h2 className="text-lg font-semibold truncate w-full">{product.title}</h2>
      <h1 className="font-bold text-blue-400">{product.price}$</h1>

      <button
        onClick={() => setShowDescription(!showDescription)}
        className="p-1 cursor-pointer bg-gray-600 text-white border-2 rounded-lg"
      >
        {showDescription ? "Hide Details ↑" : "More Details ↓"}
      </button>

      {showDescription && (
        <p className="text-sm text-white bg-amber-900 p-2 rounded-lg w-full">
          {product.description}
        </p>
      )}

      <button
        onClick={handleAddToBasket}
        className="p-1 cursor-pointer bg-blue-600 text-white border-2 rounded-lg"
      >
        Add To Basket
      </button>

      {showAddedMessage && (
        <span className="text-green-400 text-sm font-medium mt-1 transition-opacity duration-300">
          ✅ The Product Has Been Added To The Basket!
        </span>
      )}
    </div>
  );
}
