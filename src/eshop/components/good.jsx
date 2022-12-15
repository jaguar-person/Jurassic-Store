import { useDispatch } from "react-redux";
import { addCartsAsync } from "../slice/cartsSlice";
import { toast } from "react-toastify";

export default function Good(props) {
  const dispatch = useDispatch();
  const handleGood = (id, name, price) => () => {
    toast("the item moved to carts", { type: "success" });
    dispatch(
      addCartsAsync({
        id: id,
        name: name,
        price: price,
      })
    );
  };
  return (
    <div>
      <div className="flex justify-center">
        <img className="good_avatar w-[80%]" src="./assets/good.jpg" alt="Good"/>
      </div>
      <div className="m-2 p-2 rounded-md bg-slate-700 text-white">
        <h4 className=" m-1 font-medium text-lg text-center">{props.name}</h4>
        <div className="flex justify-between m-3 items-center">
          <span className="p-1  text-yellow-300 border rounded-md border-yellow-300">
            ${props.price}
          </span>
          <button
            className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm p-2"
            onClick={handleGood(props.id, props.name, props.price)}
          >
            Move to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
