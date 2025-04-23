import BasketItem from "./BasketItem";

export default function BasketList({ basket, onDelete }) {
  const totalPrice = basket.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="w-full mt-6">
      <h1 className="text-xl font-bold text-center mb-2">Basket List</h1>
      <div className="flex flex-wrap gap-2 justify-center">
        {basket.length === 0 ? (
          <p className="text-gray-500">Your basket is empty.</p>
        ) : (
          basket.map((item, idx) => (
            <BasketItem key={idx} item={item} onDelete={() => onDelete(idx)} />
          ))
        )}
      </div>
      {basket.length > 0 && (
        <h1 className="text-center mt-4 font-semibold text-lg">
          Total Price: ${totalPrice.toFixed()}
        </h1>
      )}
    </div>
  );
}
