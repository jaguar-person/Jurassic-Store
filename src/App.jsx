import "./App.css";
import { Provider } from "react-redux";
import EShop from "./eshop";
import { store } from "./eshop/store";

function App() {
  return (
    <Provider store={store}>
      <EShop />
    </Provider>
  );
}

export default App;
