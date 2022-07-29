import { configureStore } from "@reduxjs/toolkit";
import EmployeeReducer from "./employee/Employee_slice";


const store = configureStore({
    reducer:{
        data: EmployeeReducer,
    }
})

export default store;