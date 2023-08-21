import { useState } from "react";

const Search = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const onInputChange = (value) => {
    setSearch(value);
    onSearch(value);
  };
  return (
    <>
      <label htmlFor="search" className="search">
        Search:
        <input
          id="search"
          type="text"
          className="form-control"
          style={{ width: "240px" }}
          value={search}
          onChange={(e) => onInputChange(e.target.value)}
        />
      </label>
    </>
  );
};

export default Search;
