import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { notesActions } from "../../store";

import classes from "./Search.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search);
  const searchInputRef = useRef(search);

  const searchHandler = () => {
    dispatch(notesActions.search(searchInputRef.current.value));
    searchInputRef.current.value = "";
  };

  return (
    <div className={classes.searchContainer}>
      <FontAwesomeIcon
        icon={faSearch}
        className={classes.searchIcon}
        onClick={searchHandler}
      />
      <input
        type="text"
        className={classes.search}
        placeholder="Search..."
        ref={searchInputRef}
      />
    </div>
  );
};

export default Search;
