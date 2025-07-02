import { createSlice } from "@reduxjs/toolkit";
import { logInThunk } from "./logInThunk";
import { addCustomerThunk } from "./addCustomerThunk";
import { getAllCustomersThunk } from "./getAllCustomersThunk";
import { getAllemployeesThunk } from "./getAllEmployeesThunk";
import { addEmployeeThunk } from "./addEmployeeThunk";

export const INITAIL_STATE_CUSTOMER = {
    customername: "",
    password: "",
    CID: -1,
    EID: -1,
    sucsses: false,
    failed: false,
    userDetails:{},
    custList:[],
    empList:[],
    userType:"",
}
export const userSlice = createSlice({
    name: 'user',
    initialState: INITAIL_STATE_CUSTOMER,
    reducers: {

        editUserDetails: (state, action) => {
            state.customername = action.payload;
        },
        editPassword: (state, action) => {
            state.password = action.payload;
        },
        editCID: (state, action) => {
            state.CID = action.payload;
            console.log(state.CID);
        }
    },


    extraReducers: (builder) => {
        //logIn
        // הוספת מקרה שהט'נק התחיל
        builder.addCase(logInThunk.pending, (state) => {
        });
        // הוספת מקרה שהט'נק הסתיים בהצלחה
        builder.addCase(logInThunk.fulfilled, (state, action) => {
            state.userDetails = action.payload;
            console.log(state.userDetails);
            if (state.userDetails.custId) {
                state.CID = state.userDetails.custId;
                state.userType = "customer";
            }
            if (state.userDetails.empId) {
                state.EID = state.userDetails.empId;
                if (state.userDetails.empId === 10000) {
                    state.userType = "admin";
                }
                else {
                    state.userType = "employee";
                }
            }
            state.sucsses = true;
        });
        // הוספת מקרה שהט'נק נכשל 
        builder.addCase(logInThunk.rejected, (state, action) => {
            state.failed = true;
            console.log("action: ", action);
        });
        //addCustomer
        // הוספת מקרה שהט'נק התחיל
        builder.addCase(addCustomerThunk.pending, (state) => {
        });
        // הוספת מקרה שהט'נק הסתיים בהצלחה
        builder.addCase(addCustomerThunk.fulfilled, (state, action) => {
            state.userDetails = action.payload;
            if (state.userDetails.custId) {
                state.CID = state.userDetails.custId;
            }
            if (state.userDetails.empId) {
                state.EID = state.userDetails.empId;
            }
            state.sucsses = true;
        });
        // הוספת מקרה שהט'נק נכשל 
        builder.addCase(addCustomerThunk.rejected, (state, action) => {
            state.CID = -2;
            console.log("action: ", action);
        });
           //addEmployee
        // הוספת מקרה שהט'נק התחיל
        builder.addCase(addEmployeeThunk.pending, (state) => {
        });
        // הוספת מקרה שהט'נק הסתיים בהצלחה
        builder.addCase(addEmployeeThunk.fulfilled, (state, action) => {
            state.userDetails = action.payload;
            if (state.userDetails.custId) {
                state.CID = state.userDetails.custId;
            }
            if (state.userDetails.empId) {
                state.EID = state.userDetails.empId;
            }
            state.sucsses = true;
        });
        // הוספת מקרה שהט'נק נכשל 
        builder.addCase(addEmployeeThunk.rejected, (state, action) => {
            state.CID = -2;
            console.log("action: ", action);
        });
        //getAllCustomers
        // הוספת מקרה שהט'נק הסתיים בהצלחה
        builder.addCase(getAllCustomersThunk.fulfilled, (state, action) => {
            state.custList = action.payload;
            });
        // הוספת מקרה שהט'נק נכשל 
        builder.addCase(getAllCustomersThunk.rejected, (state, action) => {
            console.log("action: ", action);
        });
           //getAllEmployees
        // הוספת מקרה שהט'נק הסתיים בהצלחה
        builder.addCase(getAllemployeesThunk.fulfilled, (state, action) => {
            state.empList = action.payload;
            });
        // הוספת מקרה שהט'נק נכשל 
        builder.addCase(getAllemployeesThunk.rejected, (state, action) => {
            console.log("action: ", action);
        });
    }
});

export const { editUserDetails, editPassword, editCID } = userSlice.actions;