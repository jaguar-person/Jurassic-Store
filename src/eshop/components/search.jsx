import { useState } from "react";

export default function Search(props) {
  const [filter, setFilter] = useState("");

  const handleFilter = (e) => {
    if (e.key == "Enter") {
      props.handleFilter(filter);
    }
  };

  return (
    <div className="relative mx-20">
      <input
        type="search"
        className=" w-full p-2 text-sm border border-gray-300 rounded-md focus:border-blue-300 focus:outline-none"
        placeholder="Search ..."
        onChange={(e) => setFilter(e.target.value)}
        onKeyDown={handleFilter}
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <svg
          aria-hidden="true"
          className="w-5 h-5 text-gray-500 dark:text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </div>
    </div>
  );
}
