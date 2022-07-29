import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteData } from "../../../features/employee/Employee_slice";

const View = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const DefaultEmployess = useSelector((state) => state.data);

  const handleDeleteEmployee = (id) => {
    dispatch(
      deleteData({
        id: id,
      })
    );
    navigate("/")
  };

  const existingEmployee = DefaultEmployess.filter(
    (item) => item.id === params.id
  );
  const { username, salary, department } = existingEmployee[0];

  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{username}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{salary}</h6>
          <p className="card-text">{department}</p>
          <div className="d-flex justify-content-between">
            <Link to={`/update/${params.id}`} replace={true}>
              {" "}
              <button className="btn btn-success">Update</button>
            </Link>
            <button
              onClick={() => handleDeleteEmployee(params.id)}
              className="btn btn-danger "
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default View;
