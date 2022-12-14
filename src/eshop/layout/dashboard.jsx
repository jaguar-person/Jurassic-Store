import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "./header";
import Good from "../components/good";
import Search from "../components/search";
import { selectGoods, getGoodsAsync } from "../slice/goodsSlice";

export default function Dashboard() {
  const [text, setText] = useState("");
  const goods = useSelector(selectGoods);
  const disptch = useDispatch();
  useEffect(() => {
    disptch(getGoodsAsync()).then(() => {});
  }, []);
  const handleFilter = (kword) => {
    setText(kword);
  };
  return (
    <div>
      <Header />
      <div className="mt-20 mx-48">
        <div className="search">
          <h3 className="search_name text-lg m-3 font-medium text-center">
            Browse the catalogue
          </h3>
          <Search handleFilter={handleFilter} />
        </div>
        <div className="goods mt-10 grid grid-cols-4 gap-6">
          {goods &&
            goods.map((item, i) =>
              text === "" ? (
                <Good
                  key={i}
                  id={item.id}
                  name={item.name}
                  price={item.price}
                />
              ) : (
                item.name === text && (
                  <Good
                    key={i}
                    id={item.id}
                    name={item.name}
                    price={item.price}
                  />
                )
              )
            )}
        </div>
      </div>
    </div>
  );
}
