import { Link, useNavigate } from "react-router-dom";
import CartGoods from "./cart_goods";

export default function CartModal() {
  const navigate = useNavigate();
  return (
    <>
      <div className="fixed left-0 top-0 bg-black opacity-50 z-10 w-full h-full"></div>
      <div className="fixed top-0 right-1 bg-white z-20 h-full w-[30%] block p-3">
        <div className="text-center">
          <div className="relative header m-5 font-bold text-2xl text-green-600">
            Cart
            <img
              src="./assets/exit.png"
              className="w-10 h-10 absolute top-0 right-0 cursor-pointer"
              onClick={() => navigate("/", true)}
            />
          </div>
          <CartGoods />
          <Link to="/checkout">
            <button className="m-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm p-2">
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
