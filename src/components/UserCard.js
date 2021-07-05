import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteUser } from "redux/actionCreators";

const UserCard = ({ name, surname, avatar, desc, id }) => {
  const dispatch = useDispatch();
  function deleteUserHandler() {
    if (window.confirm("Are you sure")) {
      dispatch(deleteUser(id));
    }
  }
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">
          {name} {surname}
        </h4>
        <p className="card-text">{desc}</p>
        <Link
          to={`user/edit/${id}`}
          className="btn-secondary btn-small paper-btn"
          style={{ marginRight: "20px" }}
        >
          Edit user
        </Link>
        <button className="btn-danger btn-small" onClick={() => deleteUserHandler(id)}>
          Delete user
        </button>
      </div>
    </div>
  );
};

export default UserCard;
