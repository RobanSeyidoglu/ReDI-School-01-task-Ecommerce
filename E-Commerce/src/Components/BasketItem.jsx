export default function BasketItem({ item, onDelete }) {
  return (
    <div className=" bg-cyan-950 p-2 rounded-md shadow text-center flex flex-col w-m items-center">
      <img className="w-30 h-40" src={item.image} alt="" />
      <h2 className="text-sm text-wrap w-sm font-semibold">{item.title}</h2>
      <p className="text-blue-600 font-bold text-sm">Price: {item.price}$</p>
      <button
        onClick={onDelete}
        className="p-1 cursor-pointer bg-red-600 text-white border-2 rounded-lg w-70"
      >
        Delete Product
      </button>
     
    </div>
  );
}
