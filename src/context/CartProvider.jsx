import { createContext } from "react";


const CartContext = createContext();

const CartProvider = ({ children }) => {
    const cartContext = {
        items:[],
        total: 0,
        addItem: ()=>{},
        removeItem: ()=>{},
        clearItems: ()=>{},
    }
  return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>;
};

export default CartProvider;
