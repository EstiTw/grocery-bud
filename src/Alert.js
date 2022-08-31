import React, { useEffect } from "react";

const Alert = ({ alertType }) => {
  let classes = "alert ";
  let alertText;

  classes +=
    alertType === "added" || alertType === "edited"
      ? "alert-success"
      : "alert-danger";

  switch (alertType) {
    case "cleared":
      alertText = "empty list";
      break;
    case "added":
      alertText = "item added to the list";
      break;
    case "edited":
      alertText = "value changed";
      break;
    case "removed":
      alertText = "item removed";
  }
  return <p className={classes}>{alertText}</p>;
};

export default Alert;
