import { useDispatch } from "react-redux";
import { removeCartsAsync } from "../slice/cartsSlice";

export default function CartGood(props) {
  const dispatch = useDispatch();
  const handleRemove = (id) => () => {
    dispatch(removeCartsAsync(id));
  };
  return (
    <div className="grid lg:grid-col-3  sm:grid-col-1">
      <div className="lg:col-start-1 flex lg:justify-start sm:justify-center ">
        <img className="good_avatar w-20" src="./assets/good.jpg" />
      </div>
      <div className="lg:col-end-3 rounded-md bg-slate-700 text-white">
        <h4 className=" m-1 font-medium text-lg">{props.name}</h4>
        <div className="grid grid-cols-2 gap-3 m-3 items-center ">
          <span className="text-yellow-300 border rounded-md block border-yellow-300">
            ${props.price}
          </span>
          <button
            className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm p-2"
            onClick={handleRemove(props.id)}
          >
            Remove from Cart
          </button>
        </div>
      </div>
    </div>
  );
}
