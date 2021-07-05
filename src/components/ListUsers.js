import React from "react";
import UserCard from "components/UserCard";

const ListUsers = ({ users }) => {
  return (
    <div className="row">
      {users.map((user) => (
        <div className="sm-6 md-4 col" key={user.id}>
          <UserCard {...user} />
        </div>
      ))}
    </div>
  );
};

export default ListUsers;
