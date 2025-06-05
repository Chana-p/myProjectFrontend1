import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "./slices/productsSlice";
import { ordersSlice } from "./slices/ordersSlice";
import { employeesSlice } from "./slices/employeeSlice";
import { userSlice } from "./slices/userSlice";


const reducers = combineSlices(userSlice,productsSlice,ordersSlice,employeesSlice);


export const STORE = configureStore({
    reducer: reducers,

})