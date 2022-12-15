import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import EShop from "./eshop";
import { store } from "./eshop/store";

function App() {
  return (
    <Provider store={store}>
      <EShop />
      <ToastContainer />
    </Provider>
  );
}

export default App;
