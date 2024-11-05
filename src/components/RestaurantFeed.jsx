/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Button, SHAPE, SIZE } from "baseui/button";
import { ButtonGroup } from "baseui/button-group";
import restaurantFeedData from "../data/getRestaurantFeed.json";
import { Card, StyledBody, StyledAction } from "baseui/card";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";

export default () => {
  return (
    <div style={{ marginLeft: "20px", marginRight: "20px" }}>
      {/* Filters */}
      <ButtonGroup shape={SHAPE.pill} size={SIZE.compact}>
        <Button>Burger</Button>
        <Button>Sushi</Button>
        <Button>Fast Food</Button>
      </ButtonGroup>

      <h1>Restaurants</h1>
      <FlexGrid>
        {restaurantFeedData.map((restaurant) => (
          <Card
            overrides={{ Root: { style: { width: "22%" } } }}
            headerImage={restaurant.image}
            title={restaurant.title}
            style={{ margin: "10px" }}
          >
            <StyledBody>
                <div>
                <div>{restaurant.description}</div>
                <div>Delivery in {restaurant.deliveryTime}</div>
                <div>Rating {restaurant?.rating}</div>
                </div>
            </StyledBody>
          </Card>
        ))}
      </FlexGrid>
    </div>
  );
};
