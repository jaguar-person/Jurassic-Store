import "./App.css";
import { Provider } from "react-redux";
import EShop from "./eshop";
import {store} from "./eshop/store"
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
function App() {
  return (
    <Provider store={store}>
      <EShop />
    </Provider>
  );
}

export default App;
