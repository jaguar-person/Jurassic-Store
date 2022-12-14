import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCarts, getCartsAsync } from "../slice/cartsSlice";
import CartGood from "./cart_good";

export default function CartGoods() {
  const carts = useSelector(selectCarts);
  const disptch = useDispatch();
  var total = Number(0.0);
  useEffect(() => {
    disptch(getCartsAsync());
  }, []);
  for (var item of carts) {
    total += Number(item.price);
  }
  total = total.toFixed(2);
  return (
    <div className="overflow-y-auto h-[90%]">
      <div className="main">
        <div className="grid gap-3 grid-rows-1">
          {carts &&
            carts.map((item, i) => (
              <CartGood
                key={i}
                id={item.id}
                name={item.name}
                price={item.price}
              />
            ))}
        </div>
      </div>
      <div className="mt-6 text-white text-center">
        <h3 className="p-3 font-medium bg-slate-600 text-lg border border-yellow-500 rounded-md">
          total price:<span className="text-yellow-300 mx-2">${total}</span>
        </h3>
      </div>
    </div>
  );
}
