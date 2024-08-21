import { useContext } from "react";
import { currencyFormatter } from "../util/formatting";
import CartContext from "../store/CartContext";

export default function CartItem({ item }) {
  const { addItem, removeItem } = useContext(CartContext);

  function handleAddItem() {
    addItem(item);
  }

  function handleRemoveItem() {
    removeItem(item.id);
  }

  return (
    <li className="cart-item">
      <p>
        {item.name} - {item.quantity} X {currencyFormatter.format(item.price)}
      </p>
      <p className="cart-item-actions">
        <button onClick={handleAddItem}>+</button>
        <span>{item.quantity}</span>
        <button onClick={handleRemoveItem}>-</button>
      </p>
    </li>
  );
}
