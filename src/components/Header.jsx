import { useContext } from "react";
import logoImage from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";
import { UserProgressContext } from "../store/UserProgressContext";

export default function Header() {
  const { items } = useContext(CartContext);
  const totalCartItems = items.reduce((total, item) => {
    return total + item.quantity;
  }, 0);
  const { showCart } = useContext(UserProgressContext);

  function handleShowCart() {
    showCart();
  }
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImage} alt="Logo" />
        <h1>React Food</h1>
      </div>
      <nav>
        <Button textOnly={true} onClick={handleShowCart}>
          Cart({totalCartItems})
        </Button>
      </nav>
    </header>
  );
}
