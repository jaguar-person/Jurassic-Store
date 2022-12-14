import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <div className="title p-16 m-4 text-center text-[48px] font-bold bg-green-700 text-white z-10 relative">
        Jurassic Store
      </div>
      <Link to="/carts">
        <img
          className="icon z-20 absolute right-6 top-6"
          src="./assets/cart.png"
          width="50px"
          height="50px"
        />
      </Link>
    </div>
  );
}
