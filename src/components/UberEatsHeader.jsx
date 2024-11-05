import { Input } from "baseui/input";
import { Menu, ChevronDown, Search } from "baseui/icon";

import { Tabs, Tab } from "baseui/tabs";
import { SegmentedControl, Segment } from "baseui/segmented-control";

const MarkerIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    aria-label="Deliver to"
    class="eg"
  >
    <title>Deliver to</title>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 1c2.4 0 4.9.9 6.7 2.8 3.7 3.7 3.7 9.8 0 13.4L12 24l-6.7-6.7c-3.7-3.7-3.7-9.8 0-13.5C7.1 1.9 9.6 1 12 1Zm0 18.8 4.6-4.6c2.5-2.6 2.5-6.7 0-9.3C15.4 4.7 13.7 4 12 4c-1.7 0-3.4.7-4.6 1.9-2.5 2.6-2.5 6.7 0 9.3l4.6 4.6Zm2-9.3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      fill="currentColor"
    ></path>
  </svg>
);
const CartIcon = () => (
  <svg
    width="25"
    height="25"
    viewBox="0 0 24 24"
    fill="none"
    aria-label="2 carts"
  >
    <title>Carts</title>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5.5 18H21l2-12.5H6.5l-.5-3H.9v3h2.5L5.5 18Zm14-9.5-1 6.5H8L7 8.5h12.5ZM7.5 23a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm14-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      fill="currentColor"
    ></path>
  </svg>
);

export default () => {
  const marginStyle = {
    marginLeft: "20px",
    marginRight: "20px",
    marginTop: "10px",
    marginBottom: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  };

  return (
    <>
      <div style={marginStyle}>
        <Menu size="40px" style={marginStyle} />
        <img src="./logo.svg" height="30px" style={marginStyle} />
        <SegmentedControl>
          <Segment label="Delivery" />
          <Segment label="Pickup" />
        </SegmentedControl>
        <div style={marginStyle}>
          <MarkerIcon />
          <h3>Amsterdam • Now</h3>
        </div>
        <div style={{ width: "40%" }}>
          <Input startEnhancer={<Search size="25px" />} />
        </div>
        <CartIcon style={marginStyle} />
      </div>

      <Tabs activeKey={"0"}>
        <Tab title="All"></Tab>
        <Tab title="Eats"></Tab>
        <Tab title="Grocery"></Tab>
        <Tab title="Convenience"></Tab>
        <Tab title="Alcohol"></Tab>
        <Tab title="Gourmet"></Tab>
        <Tab title="Pet"></Tab>
      </Tabs>
    </>
  );
};
