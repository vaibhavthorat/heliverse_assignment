import { configureStore } from "@reduxjs/toolkit"
import { EmployeesReducer } from "../reducers/Reducer";



export const Store=configureStore({
    reducer:{
        employees:EmployeesReducer,
    }, //the employeeReducer shoulb be available in reducres.js
    // reducer2:{editepmloyees:allReducers.editEmployeeReducer},
}) ;

