import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
import {useDispatch} from "react-redux"
import { getData } from "../../../features/employee/Employee_slice";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [employeeData, setEmployeeData] = useState([])

  const [employeeDetails, setEmployeeDetails] = useState({
    username: "",
    department: "",
    salary: "",
  });


  const handleChange = (e) => {
    const {name, value } = e.target;
    setEmployeeDetails({...employeeDetails, [name]:value})
  }

  const handleData = (e) => {
    e.preventDefault()
    const userAdd = {...employeeDetails, id : new Date().getTime().toString()}
    setEmployeeData([...employeeData, userAdd])


    setEmployeeDetails({
      username: "",
      department: "",
      salary: "",
    })
    dispatch(getData(userAdd))

    navigate("/")
    
  }


  return (
    <>
      <form onSubmit={handleData} >
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
            type="number"
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
          Submit
        </button>
      </form>
    </>
  );
};

export default Register;
