import React, { useEffect } from "react";

const Alert = ({ alertType }) => {
  const classes =
    "alert " + (alertType === "success" ? "alert-success" : "alert-danger");
  const alertText =
    alertType === "success" ? "item added to the list" : "empty list";
  return <p className={classes}>{alertText}</p>;
};

export default Alert;
