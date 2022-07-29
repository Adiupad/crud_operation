import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteData } from "../../../features/employee/Employee_slice";

const Home = () => {
  const DefaultEmployess = useSelector((state) => state.data);
  const dispatch = useDispatch();
  //for delted
  const handleDeleteEmployee = (id) => {
    dispatch(
      deleteData({
        id: id,
      })
    );
  };
  // delete Completed

  // for Search
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredList, setFilteredList] = useState(DefaultEmployess);

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    if (query.length > 1) {
      const searchList = DefaultEmployess.filter((item) => {
        return item.department.toLowerCase().includes(query);
      });
      setFilteredList(searchList);
    } else {
      setFilteredList(DefaultEmployess);
    }
  };
  // search Completed

  const renderUser = () => {
    return (
      <>
        <table className="table text-center align-items-center ">
          <thead className="bg-lg">
            <tr>
              <th scope="col">Employee No.</th>
              <th scope="col">Name of Employee</th>
              <th scope="col">Name of Department</th>
              <th scope="col" >Salary of Employee</th>
              <th scope="col">View Employee Data</th>
              <th scope="col">Update Employee Data</th>
              <th scope="col">Delete Employee Data</th>
            </tr>
          </thead>
          <tbody>
            {filteredList.map((item) => {
              return (
                <>
                  <tr>
                    <th scope="row" key={item.id}>
                      {item.id}
                    </th>
                    <td>{item.username}</td>
                    <td>{item.department}</td>
                    <td>{item.salary}</td>
                    <td>
                      <Link to={`/view/${item.id}`}>
                        <button className="btn btn-warning">View</button>
                      </Link>
                    </td>
                    <td>
                      {" "}
                      <Link to={`/update/${item.id}`}>
                        {" "}
                        <button className="btn btn-success">Update</button>
                      </Link>{" "}
                    </td>
                    <td>
                      <button
                        onClick={() => handleDeleteEmployee(item.id)}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </>
    );
  };

  return (
    <div>
      <div className="conatiner">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      {DefaultEmployess.length > 0 ? (
        renderUser()
      ) : (
        <h1>User Does Nout found</h1>
      )}
    </div>
  );
};

export default Home;
