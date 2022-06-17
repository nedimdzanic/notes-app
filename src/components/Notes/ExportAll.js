import { useSelector } from "react-redux";

import Button from "../UI/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import classes from "./ExportAll.module.css";
import { downloadJsonFile } from "../../utils";

const ExportAll = () => {
  const notes = useSelector((state) => state.notes);

  const exportAllHandler = () => {
    downloadJsonFile(notes, "Notes");
  };

  return (
    <div className={classes.container}>
      <Button className={classes.Button} onClick={exportAllHandler}>
        <FontAwesomeIcon className={classes.icon} icon={faFileArrowDown} />
        Export All
      </Button>
    </div>
  );
};

export default ExportAll;
