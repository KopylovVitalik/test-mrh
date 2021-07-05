import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserForm from "components/UserForm";
import { useSelector } from "react-redux";
import { updateUser } from "redux/actionCreators";
import NotFound from "views/NotFound";

const EditUser = () => {
  let { id } = useParams();
  id = Number(id);
  const [initialState, setInitialState] = useState({});
  const usersList = useSelector((state) => state.usersList);
  useEffect(() => {
    const currentUser = usersList.find((user) => user.id === id);
    setInitialState(currentUser);
  }, [usersList, id]);
  return (
    <>
      {initialState?.name ? (
        <UserForm initialState={initialState} actionType={updateUser} id={id} />
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default EditUser;
