import React, { FC } from "react";
import { BiSearchAlt } from "react-icons/bi";

import StyledSearchInput from "../styles/components/search-input.style";
import { SearchInputProps } from "../types";

const SearchInput: FC<SearchInputProps> = (props) => {
  const { setQuery, placeholder } = props;

  return (
    <StyledSearchInput>
      <span>
        <BiSearchAlt />
      </span>
      <input
        type="text"
        placeholder={placeholder}
        className="search-input"
        onChange={(e) => setQuery(e.target.value)}
      />
    </StyledSearchInput>
  );
};

export default SearchInput;
