import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { hideNotification } from "redux/actionCreators";

const UserAlert = ({ alert }) => {
  const { type, text } = alert;
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(hideNotification());
    }, 5000);
  }, [dispatch]);
  return (
    <div className="user-alert">
      <div className={`alert alert-${type}`}>{text}</div>
    </div>
  );
};

export default UserAlert;
