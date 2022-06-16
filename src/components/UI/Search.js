import classes from "./Search.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  return (
    <div className={classes.searchContainer}>
      <FontAwesomeIcon icon={faSearch} className={classes.searchIcon} />
      <input type="text" className={classes.search} placeholder="Search..." />
    </div>
  );
};

export default Search;
