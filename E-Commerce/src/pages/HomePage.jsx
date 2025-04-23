import { useEffect, useState } from "react";
import ProductList from "../Components/ProductList";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [basket, setBasket] = useState(() => {
    const savedBasket = localStorage.getItem("basket");
    return savedBasket ? JSON.parse(savedBasket) : [];
  });

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        setFilteredProducts(json);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setFilteredProducts(
      products.filter((product) =>
        product.title.toLowerCase().includes(searchInput.toLowerCase().trim())
      )
    );
  }, [searchInput, products]);

  return (
    <div className="flex flex-col items-center p-4 bg-gray-700">
      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        className="w-lg text-center text-blue-500 text-2xl outline-0 border-0 focus:border-2 border-blue-500 font-bold"
        placeholder="Search For a Product"
      />

      <Link to="/basket" className="mt-4 text-blue-600 underline font-semibold">
        🛒 Go to Basket ({basket.length})
      </Link>

      <div className="flex flex-col items-center p-4">
        {loading ? (
          <Loading />
        ) : (
          <ProductList
            products={filteredProducts}
            onAdd={(product) => setBasket((prev) => [...prev, product])}
          />
        )}
      </div>
    </div>
  );
}
