import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  function ShowProducts() {
    return (
      <div className="flex flex-wrap justify-center gap-4">
        {products.map((product) => (
          <div
            className="flex flex-col max-w-xs bg-white shadow-lg rounded-lg p-4 items-center text-center border-2 border-transparent hover:border-blue-400 transition-all"
            key={product.id}
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-32 h-32 object-contain mb-2"
              loading="lazy"
            />
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <h1 className="font-bold text-blue-400">{product.price}$</h1>
            <p className="text-sm text-gray-600">{product.description}</p>
          </div>
        ))}
      </div>
    );
  }

  function Loading() {
    return (
      <div className="flex flex-col items-center p-5 backdrop-blur-md shadow-lg shadow-blue-400 rounded-lg">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-2 text-blue-600 font-semibold">Loading...</p>
      </div>
    );
  }

  function FetchingData() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        setLoading(false);
      });
  }

  useEffect(() => {
    FetchingData();
  }, []);

  return (
    <div className="flex flex-col items-center p-4">
      {loading ? Loading() : ShowProducts()}
    </div>
  );
}
