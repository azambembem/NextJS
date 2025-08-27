"use client";

import { useState } from "react";

const Searchbar = () => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <input value={search} onChange={onChangeSearch} />
      <button>search</button>
    </div>
  );
};

export default Searchbar;
