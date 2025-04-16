export default function ProductCard({ product, onAdd }) {
  return (
    <div className="flex gap-3 flex-col max-w-xs bg-white shadow-lg rounded-lg p-4 items-center text-center border-2 border-transparent hover:border-blue-400 transition-all">
      <img
        src={product.image}
        alt={product.title}
        className="w-32 h-32 object-contain mb-2"
        loading="lazy"
      />
      <h2 className="text-lg font-semibold">{product.title}</h2>
      <h1 className="font-bold text-blue-400">{product.price}$</h1>
      <p className="text-sm text-gray-600">{product.description}</p>
      <button
        onClick={() => onAdd(product)}
        className="p-1 cursor-pointer bg-blue-600 text-white border-2 rounded-lg"
      >
        Add To Basket
      </button>
    </div>
  );
}
