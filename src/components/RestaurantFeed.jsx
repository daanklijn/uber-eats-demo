import React from "react";
import { Button, SHAPE, SIZE } from "baseui/button";
import { ButtonGroup } from "baseui/button-group";
import restaurantFeedData from "../data/getRestaurantFeed.json";
import { Card, StyledBody } from "baseui/card";
import { FlexGrid } from "baseui/flex-grid";

export default function RestaurantFeed() {
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
            overrides={{ Root: { style: { width: "22%",  margin: "10px" } } }}
            headerImage={restaurant.image}
            title={restaurant.title}
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
}
