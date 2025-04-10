export default function CartItem(props) {
  return (
    <div className="flex items-center gap-3 p-2 border-b">
      <div className="text-red-500 font-semibold">{props.name}</div>
      <div className="text-gray-700">{props.count}</div>
      <button
        className="bg-green-500 text-white px-2 py-1 rounded"
        onClick={() => props.handleIncrement(props.id)}
      >
        +
      </button>
      <button
        className="bg-yellow-500 text-white px-2 py-1 rounded"
        onClick={() => props.handleDecrement(props.id)}
      >
        -
      </button>
      <button
        className="bg-red-400 text-white px-2 py-1 rounded"
        onClick={() => props.handleDelete(props.id)}
      >
        delete
      </button>
    </div>
  );
}