/* eslint-disable */ 
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "./Header";
import Good from "../components/Good";
import Search from "../components/Search";
import { selectGoods, getGoodsAsync } from "../slice/goodsSlice";

export default function Dashboard() {
  const [keyword, setKeyword] = useState("");
  const [showFlag, setFlag] = useState(true);
  const goods = useSelector(selectGoods);
  const disptch = useDispatch();
  let flag = 0;

  useEffect(() => {
    disptch(getGoodsAsync());
  }, [dispatchEvent]);

  const handleFilter = (keyword) => {
    for (let item of goods) {
      if (item.name === keyword) {
        flag = 1;
      }
    }
    if (flag === 0) setFlag(false);
    if (keyword === "") setFlag(true);
    setKeyword(keyword);
  };

  return (
    <div>
      <Header />
      <div className="mt-20 mx-48 relative">
        <div className="search">
          <h3 className="search_name text-lg m-3 font-medium text-center">
            Browse the catalogue
          </h3>
          <Search handleFilter={handleFilter} />
        </div>
        <div className="goods mt-10 grid grid-cols-4 gap-6">
          {goods &&
            goods.map((item, i) =>
              keyword === "" ? (
                <Good
                  key={i}
                  id={item.id}
                  name={item.name}
                  price={item.price}
                />
              ) : (
                item.name === keyword && (
                  <Good key={`good-item-${item.id}`} {...item} />
                )
              )
            )}
        </div>
        <div
          className=" text-lg absolute bottom-0 left-1/2 -translate-x-1/2 text-red-500"
          style={showFlag ? { display: "none" } : { display: "block" }}
        >
          No result ...
        </div>
      </div>
    </div>
  );
}
