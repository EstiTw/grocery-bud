import React, { useEffect } from "react";

const Alert = ({ alertType }) => {
  let classes = "alert ";
  let alertText;

  classes +=
    alertType === "added" || alertType === "edited" || alertType === "changed"
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
      break;
    case "noValue":
      alertText = "plaese enter value";
      break;
    case "changed":
      alertText = "value changed";
  }
  return <p className={classes}>{alertText}</p>;
};

export default Alert;
