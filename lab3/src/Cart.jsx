import CartItem from "./CartItem";
export default function Cart(props) {
    const { handleIncrement, handleDecrement, handleReset, handleDelete, items } = props;
  
    return (
      <div>
        {items.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            name={item.name}
            count={item.count}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            handleDelete={handleDelete}
          />
        ))}
        {items.length > 0 && <button 
          onClick={handleReset}
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
        >
          Reset All
        </button>}
        {items.length == 0 && <p>Cart is empty</p>}
      </div>
    );
  }