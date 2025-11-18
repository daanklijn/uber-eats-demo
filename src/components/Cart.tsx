import React from "react";

import { Drawer } from "baseui/drawer";

export default function Cart(props) {
  const { cart, totalPrice, setViewCart, viewCart } = props;

  return (
    <Drawer isOpen={viewCart} autoFocus onClose={() => setViewCart(false)}>
      <h2>Cart</h2>
      {cart.map((item) => (
        <div>
          {item.title} - {item.priceTagline}
        </div>
      ))}
      <br></br>
      <div>Total price: €{totalPrice}</div>
    </Drawer>
  );
}
