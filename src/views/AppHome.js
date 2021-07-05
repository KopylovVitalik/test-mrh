import { useSelector } from "react-redux";
import ListUsers from "components/ListUsers";
import Pagination from "components/AppPagination";
import React, { useState } from "react";

const Home = () => {
  const users = useSelector((state) => state.usersList);
  const loading = useSelector((state) => state.loading);

  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastUser = currentPage * 6;
  const indexOfFirstUser = indexOfLastUser - 6;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      {loading && <h1>Loading...</h1>}
      <ListUsers users={currentUsers} />
      <Pagination
        usersPerPage={6}
        totalUsers={users.length}
        paginate={paginate}
      />
    </>
  );
};

export default Home;
