import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { selectCarts } from "../slice/cartsSlice";
import CartGoods from "../components/cart_goods";

export default function Checkout() {
  const navigate = useNavigate();
  const carts = useSelector(selectCarts);

  let total = Number(0);
  for (var item of carts) {
    total += Number(item.price);
  }
  return (
    <div className="border border-slate-700 rounded-lg mx-32 mt-32 h-full">
      <div className="text-2xl font-bold text-center p-3 m-3 text-red-400">
        Checkout
      </div>
      <div className="flex justify-around gap-7 m-5 p-3">
        <div className="border border-slate-700 rounded-lg w-[30%] p-2">
          <h3 className="title border-b-2 p-1 border-slate-600">information</h3>
          <div className="mt-5">
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 rounded-md block w-full p-2.5 mb-3"
              placeholder="Name"
              required
            />
            <input
              type="email"
              className="bg-gray-50 border border-gray-300 rounded-md block w-full p-2.5 mb-3"
              placeholder="Email"
              required
            />
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 rounded-md block w-full p-2.5 mb-3"
              placeholder="Address"
              required
            />
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              onClick={() =>
                navigate("/pay", {
                  replace: true,
                  state: {
                    total: total,
                  },
                })
              }
            >
              Confirm & Pay
            </button>
          </div>
        </div>
        <CartGoods />
      </div>
      <div className="text-center mb-3">
        <Link to="/">
          <button className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
            Back to Dashboard
          </button>
        </Link>
      </div>
    </div>
  );
}
