import React, { useState } from "react";
import {useDispatch,useSelector} from "react-redux"
import {useParams,useNavigate} from 'react-router-dom'
import { editData, getData } from "../../../features/employee/Employee_slice";


const Update = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const params = useParams();
  const DefaultEmployess = useSelector((state) => state.data);

  const existingEmployee = DefaultEmployess.filter(
    (item) => item.id === params.id
  );
  const { username, salary, department } = existingEmployee[0];
  const [employeeDetails, setEmployeeDetails] = useState({
    username: username,
    department: salary,
    salary: department,
  });


  const handleChange = (e) => {
    const {name, value } = e.target;
    setEmployeeDetails({...employeeDetails, [name]:value})
  }

  const handleUpdate = (e) => {
    e.preventDefault()
    dispatch(editData({
      id: params.id,
      username: employeeDetails.username,
      salary: employeeDetails.salary,
      department: employeeDetails.department
    }))
    navigate("/")
    setEmployeeDetails({
      username: "",
      salary: "",
      department: "",
     
    })
  }


  return (
    <>
      <form onSubmit={handleUpdate} >
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            name="username"
            value={employeeDetails.username}
            onChange={handleChange}
          />
        </div>
  
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Salary"
            name="salary"
            value={employeeDetails.salary}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Department"
            name="department"
            value={employeeDetails.department}
            onChange={handleChange}
          />
          {/* <label>
          Slect the Department: 
            <select className="ms-3" onChange={handleChange} value={} >
              <option value="backend" >Backend</option>
              <option value="frontend">Frontend</option>
            </select>
          </label> */}
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </>
  );
};

export default Update;
