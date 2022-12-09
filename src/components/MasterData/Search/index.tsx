import React from "react";
import { BiSearch } from "react-icons/bi";
import useMasterData from "../../../hooks/useMasterData";

const Search = () => {
  const { searchValue, setSearchValue } = useMasterData();
  return (
    <div className="w-full">
      <div className="relative">
        <div className="absolute top-0 left-0 h-full aspect-square flex items-center justify-center pointer-events-none">
          <BiSearch size={18} />
        </div>
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          type="text"
          placeholder="Search"
          className="__input pl-10"
        />
      </div>
    </div>
  );
};

export default Search;
