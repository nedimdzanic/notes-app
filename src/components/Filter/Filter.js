import Button from "../UI/Button";
import { useSelector, useDispatch } from "react-redux";
import { notesActions } from "../../store";

import classes from "./Filter.module.css";
import Search from "../UI/Search";

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);

  const filterHandler = (filterType) => {
    dispatch(notesActions.filter(filterType));
  };

  let className1, className2;
  switch (filter) {
    case "all": {
      className1 = classes.active;
      className2 = "";
      break;
    }
    case "favourites": {
      className1 = "";
      className2 = classes.active;
      break;
    }
  }

  return (
    <div className={classes.filter}>
      <Button className={className1} onClick={() => filterHandler("all")}>
        All
      </Button>
      <Button
        className={className2}
        onClick={() => filterHandler("favourites")}
      >
        Favourites
      </Button>
      <Search />
    </div>
  );
};

export default Filter;
