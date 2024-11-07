import logo from "./logo.svg";
import "./App.css";
import { Client as Styletron } from "styletron-engine-monolithic";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider, styled } from "baseui";
import UberEatsHeader from "./components/UberEatsHeader";
import RestaurantFeed from "./components/RestaurantFeed";
import RestaurantView from "./components/RestaurantView";

function App() {
  const engine = new Styletron();
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <div className="App">
          <UberEatsHeader />
          <RestaurantView />
        </div>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default App;
