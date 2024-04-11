import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { url } from "./services/api.js";
import fetchData from "./services/api.js";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState("");

  const loadOptions = async (inputValue) => {
    const urldynamic = `${url}/search?term=${inputValue}&limit=25`;

    const data = await fetchData(urldynamic);

    // console.log(data);
    return {
      options: data
        ? data.results.map((result) => ({
            label: `${result.artistName}`,
          }))
        : [],
    };
  };

  const handleOnChange = (SearchData) => {
    setSearch(SearchData);
    onSearchChange(SearchData);
  };

  return (
    <AsyncPaginate
      placeholder="Search for music artist here"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
      className="mx-auto pt-4 w-[850px] rounded-xl "
    />
  );
};

export default Search;
