import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

function Alert() {
  const alerts = useSelector((state) => state.alert);
  let res = [];
  if (alerts !== null && alerts.length > 0) {
    res = alerts.map((alert) => {
      return (
        <div key={alert.id} className={`alert alert-${alert.alertType}`}>
          {alert.msg}
        </div>
      );
    });
  }
  return <Fragment>{res}</Fragment>;
}

export default Alert;
