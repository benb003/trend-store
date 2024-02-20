import CartItem from "./CartItem";
import products from "../../productData";
import "./Cart.css";
import Offcanvas from "../UI/Offcanvas";

const Cart = (props) => {
  const cartItems = (
    <ul className="cart-items">
      {products.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
    </ul>
  );

  return (
    <Offcanvas onClose={props.onClose}>
      <div className="cart-head">
        <h2>Shopping Cart</h2>
        <a href="/" className="cart-close" onClick={props.onClose}>
          X
        </a>
      </div>
      {cartItems}
      <div className="total">
        <span>Total</span>
        <span>10 kr</span>
      </div>
      <div className="actions">
        <button className="cart-order">Order</button>
        <button className="cart-clear">Delete</button>
      </div>
    </Offcanvas>
  );
};

export default Cart;
