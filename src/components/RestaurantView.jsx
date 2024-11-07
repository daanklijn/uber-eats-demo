/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Button, SHAPE, SIZE } from "baseui/button";
import { ButtonGroup } from "baseui/button-group";
import restaurantItems from "../data/getRestaurantItems.json";
import { Card, StyledBody, StyledAction } from "baseui/card";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";

export default () => {
  return (
    <div style={{ marginLeft: "20px", marginRight: "20px" }}>
      <h1>McDonald's</h1>

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
                <div style={{height: '70px', overflow: 'hidden', textOverflow: 'ellipsis'}}>
                  <div>{item.priceTagline}</div>
                  <div style={{lineClamp: 2, textOverflow: 'ellipsis', overflow: 'hidden'}}>{item.itemDescription}</div>
                </div>
            </StyledBody>
          </Card>
        ))}
      </FlexGrid>
    </div>
  );
};
