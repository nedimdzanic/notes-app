import React, { useRef, useEffect } from "react";
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
  };

  useEffect(() => {
    if (search === "") {
      searchInputRef.current.value = "";
    }
  }, [search]);

  return (
    <div className={classes.searchContainer}>
      <FontAwesomeIcon icon={faSearch} className={classes.searchIcon} />
      <input
        type="text"
        className={classes.search}
        placeholder="Search..."
        ref={searchInputRef}
        onChange={searchHandler}
      />
    </div>
  );
};

export default Search;
