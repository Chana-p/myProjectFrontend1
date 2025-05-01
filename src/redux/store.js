import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "./slices/productsSlice";
import { ordersSlice } from "./slices/ordersSlice";
import { employeesSlice } from "./slices/employeeSlice";
import { CustomerSlice } from "./slices/customerSlice";


const reducers = combineSlices(CustomerSlice,productsSlice,ordersSlice,employeesSlice);


export const STORE = configureStore({
    reducer: reducers,

})