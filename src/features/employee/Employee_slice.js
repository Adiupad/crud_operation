import {createSlice} from "@reduxjs/toolkit";

const initialState = [
    {
      id: "1",
      username: "Mark Ottp",
      salary: "2000",
      department: "Frontend",
    },
    {
      id: "2",
      username: "Jack Roso",
      salary: "2000",
      department: "Backend",
    },
    {
        id: "3",
        username: "Lack Nono",
        salary: "2000",
        department: "Frontend",
      },
      {
        id: "4",
        username: "Jack Cofo",
        salary: "2000",
        department: "Backend",
      },
      {
        id: "5",
        username: "Jack Bofo",
        salary: "2000",
        department: "Frontend",
      },
      {
        id: "6",
        username: "Hill Roso",
        salary: "2000",
        department: "Frontend",
      },
      {
        id: "7",
        username: "Jack Roso",
        salary: "2000",
        department: "Backend",
      },
  ];

const EmployeeSlice = createSlice({
    name:"employees",
    initialState,
    reducers:{
        getData: (state,{payload}) =>{
           state.push(payload)
        },
        editData:(state,{payload}) => {
            const { id, username, department,salary } = payload
            const existingUser = state.find( user => user.id === id)
            if(existingUser){
                existingUser.username = username;
                existingUser.department = department;
                existingUser.salary = salary;
            }
        },
        deleteData:(state,{payload}) => {
            const {id} = payload
            const deleteUser = state.find( user => user.id === id)
            if(deleteUser){
                return state.filter( user => user.id !== id)
            }
        }
    }
})
export const {getData, editData, deleteData} = EmployeeSlice.actions

export default EmployeeSlice.reducer;