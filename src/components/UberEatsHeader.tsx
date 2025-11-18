import { Input } from "baseui/input";
import { Menu, Search } from "baseui/icon";

import { Tabs, Tab } from "baseui/tabs";
import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationList,
  StyledNavigationItem,
} from "baseui/header-navigation";

const MarkerIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    aria-label="Deliver to"
    className="eg"
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

export default function UberEatsHeader() {
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
      <HeaderNavigation>
        <StyledNavigationList $align={ALIGN.left}>
          <StyledNavigationItem>
            <Menu size="40px" style={marginStyle} />
          </StyledNavigationItem>
          <StyledNavigationItem>
            <img src="./logo.svg" height="30px" style={marginStyle} alt={""} />
          </StyledNavigationItem>

          <StyledNavigationItem>
            <div style={marginStyle}>
              <MarkerIcon />
              <h3>Amsterdam • Now</h3>
            </div>
          </StyledNavigationItem>
          <StyledNavigationItem>
            <div style={{ width: "30vw" }}>
              <Input startEnhancer={<Search size="25px" />} />
            </div>
          </StyledNavigationItem>
        </StyledNavigationList>
        <StyledNavigationList $align={ALIGN.center}></StyledNavigationList>
        <StyledNavigationList $align={ALIGN.right}></StyledNavigationList>
      </HeaderNavigation>

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
}
