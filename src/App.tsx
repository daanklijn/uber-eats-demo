import "./App.css";
import { Client as Styletron } from "styletron-engine-monolithic";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider } from "baseui";
import UberEatsHeader from "./components/UberEatsHeader";
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
