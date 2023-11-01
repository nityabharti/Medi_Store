import React from "react";
import { InputBase, Box, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchContainer = styled(Box)`
  background: #f7f6f1;
  margin-left: 30%;
  width: 26%;
  margin-top: 8%;
  border-radius: 18px;
  height: 38px;
  display: flex;
`;

const InputSearchBase = styled(InputBase)`
  padding-left: 20px;
  width: 100%;
  font-size: unset;
`;

const SearchIconWrapper = styled(SearchIcon)`
  color: black;
  padding: 5px;
`;

const Search = () => {
  return (
    <SearchContainer>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <InputSearchBase placeholder="Search" />
    </SearchContainer>
  );
};

export default Search;
