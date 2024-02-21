import "./HeaderCartButton.css";
import CartIcon from "../Cart/CartIcon";
import { CartContext } from "../../context/CartProvider";
import { useContext } from "react";

const HeaderCartButton = ({ onShowCart }) => {
  const cartContext = useContext(CartContext);
  
const totalItem = cartContext.items.reduce((acc, item) => {
  return acc + item.amount;
},0);

  return (
    <button className="button" onClick={onShowCart}>
      <span className="icon">
        <CartIcon />
      </span>
      <span>shopping cart</span>
      <span className="badge">{totalItem}</span>
    </button>
  );
};

export default HeaderCartButton;
