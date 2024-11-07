/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Button, SHAPE, SIZE, KIND } from "baseui/button";
import { ButtonGroup } from "baseui/button-group";
import restaurantItems from "../data/getRestaurantItems.json";
import { Card, StyledBody, StyledAction } from "baseui/card";
import { FlexGrid } from "baseui/flex-grid";
import { Drawer } from "baseui/drawer";

export default () => {
  const [viewCart, setViewCart] = React.useState(false);
  const [cart, setCart] = React.useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  }
  let totalPrice = 0;

  cart.forEach((item) => {
    totalPrice += item.priceTagline;
  });

  return (
    <div style={{ marginLeft: "20px", marginRight: "20px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>McDonald's</h1>
        <Button
          kind={KIND.secondary}
          style={{ height: "50px" }}
          onClick={() => setViewCart(true)}
        >
          View Cart
        </Button>
      </div>

      {/* Filters */}
      <ButtonGroup shape={SHAPE.pill} size={SIZE.compact}>
        <Button>Burger</Button>
        <Button>Fries</Button>
        <Button>Drinks</Button>
      </ButtonGroup>

      <FlexGrid>
        {restaurantItems.map((item) => (
          <Card
            overrides={{ Root: { style: { width: "22%" } } }}
            headerImage={item.imageUrl}
            title={item.title}
            style={{ margin: "10px" }}
          >
            <StyledBody>
              <div
                style={{
                  height: "70px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                <div>{item.priceTagline}</div>
                <div> {item.itemDescription} </div>
              </div>
            </StyledBody>
            <StyledAction>
              <Button kind={KIND.secondary} onClick={() => addToCart(item)}>+ Add to Cart</Button>
            </StyledAction>
          </Card>
        ))}
      </FlexGrid>

      <Drawer isOpen={viewCart} autoFocus onClose={() => setViewCart(false)}>
        <h2>Cart</h2>
        {cart.map((item) => <div>{item.title} - {item.priceTagline}</div>)}
        <br></br>
        <div>Total price: €{totalPrice}</div>
      </Drawer>
    </div>
  );
};
