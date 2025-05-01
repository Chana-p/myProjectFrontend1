import { createSlice } from "@reduxjs/toolkit";
import { getEmployeesThunk } from "./getEmployeesThunk";

export const INITAIL_STATE_EMPLOYEES = {
   employees:[],
   employeesNames:[]
}
export const employeesSlice = createSlice({
    name: 'Employees',
    initialState: INITAIL_STATE_EMPLOYEES,
    reducers: {
        
    },
    extraReducers: (builder) => {

      
        builder.addCase(getEmployeesThunk.fulfilled, (state, action) => {
             state.employees = action.payload;   
            state.employees.forEach(e=>state.employeesNames.push(e.ename));
        });
       
        builder.addCase(getEmployeesThunk.rejected, (state, action) => {
            console.log("action: ", action);
        });
        
       
    }
});