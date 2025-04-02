import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  function FetchingData() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        setFilteredProducts(json); 
        setLoading(false);
      });
  }

  useEffect(() => {
    FetchingData();
  }, []);


  useEffect(() => {
    setFilteredProducts(
      products.filter((product) =>
        product.title.toLowerCase().includes(searchInput.toLowerCase())
      )
    );
  }, [searchInput, products]);

  function ShowProducts() {
    return (
      <div className="flex flex-wrap justify-center gap-4">
        {filteredProducts.map((product) => (
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

  return (
    <div className="flex flex-col items-center p-4">
      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        className="w-lg text-center text-blue-500 text-2xl outline-0 border-0 
        focus:border-2 border-blue-500 font-bold"
        placeholder="Search For a Product"
      />
      <div className="flex flex-col items-center p-4">
        {loading ? <Loading /> : <ShowProducts />}
      </div>
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
