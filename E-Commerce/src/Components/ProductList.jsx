
import ProductCard from "./ProductCard";

export default function ProductList({ products, onAdd }) {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onAdd={onAdd} />
      ))}
    </div>
  );
}
