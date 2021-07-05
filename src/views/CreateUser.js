import React from "react";
import UserForm from "components/UserForm";
import { createUser } from "redux/actionCreators";

const CreateUser = () => {
  const initialState = {
    name: "",
    surname: "",
    desc: "",
  };
  return (
    <div>
      <UserForm initialState={initialState} actionType={createUser} />
    </div>
  );
};

export default CreateUser;
