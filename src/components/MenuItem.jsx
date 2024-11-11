import React from "react";
import { Button, KIND } from "baseui/button";

import { Card, StyledBody, StyledAction } from "baseui/card";

export default function MenuItem(props) {
  const { addToCart, item } = props;

  return (
    <Card
      overrides={{ Root: { style: { width: "22%", margin: "10px" } } }}
      headerImage={item.imageUrl}
      title={item.title}
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
        <Button kind={KIND.secondary} onClick={() => addToCart(item)}>
          + Add to Cart
        </Button>
      </StyledAction>
    </Card>
  );
}
