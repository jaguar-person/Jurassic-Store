import { BrowserRouter, Routes, Route } from "react-router-dom";
import Carts from "./layout/carts";
import Checkout from "./layout/checkout";
import Dashboard from "./layout/dashboard";
import StripeContainer from "../Stripe/StripeContainer";

export default function EShop() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />}></Route>
        <Route path='/carts' element={<Carts />}></Route>
        <Route path='/checkout' element={<Checkout />}></Route>
        <Route path='/pay' element={<StripeContainer />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
