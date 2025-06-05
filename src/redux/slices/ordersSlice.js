import { createSlice } from "@reduxjs/toolkit";
import { getOrdersThunk } from "./getOrdersThunk";
import { addOrderThunk } from "./addOrderThunk";
import { getOrderDetailsThunk } from "./getOrderDetailsThunk";
import { getOrdersForEmpThunk } from "./getOrdersForEmpThunk";
import { UpdateSendingThunk } from "./updateSending";
import { getNewOrdersForEmpThunk } from "./getNewOrdersForEmp";
// import { assignOrdersToEmpThunk } from "./assignOrdersToEmpThunk";
// import { getCompletedOrdersForEmpThunk } from "./getCompletedOrdersForEmpThunk";

export const INITAIL_STATE_ORDERS = {
    myOrders: [],
    orderDetail: [],
    newOrders: [],
    completedOrders: [],
    ordersForManage: [],
    j: 0
}
export const ordersSlice = createSlice({
    name: 'Orders',
    initialState: INITAIL_STATE_ORDERS,
    reducers: {},
    extraReducers: (builder) => {


        builder.addCase(getOrdersThunk.fulfilled, (state, action) => {
            console.log("get orders succeed");
            console.log(action.payload);
            state.myOrders = action.payload;
        });

        builder.addCase(getOrdersThunk.rejected, (state, action) => {
            console.log("action: ", action);
        });

        builder.addCase(getOrdersForEmpThunk.fulfilled, (state, action) => {
            console.log("get orders succeed");

            state.myOrders = action.payload;

        });

        builder.addCase(getOrdersForEmpThunk.rejected, (state, action) => {
            console.log("action: ", action);
        });

        builder.addCase(getNewOrdersForEmpThunk.fulfilled, (state, action) => {
            console.log("get orders succeed");

            state.newOrders = action.payload;
console.log("state.newOrders");
console.log(state.newOrders);
        });

        builder.addCase(getNewOrdersForEmpThunk.rejected, (state, action) => {
            console.log("action: ", action);
        });
        builder.addCase(getOrderDetailsThunk.fulfilled, (state, action) => {
            console.log("get orders succeed");

            state.orderDetail.push(action.payload);


        });

        builder.addCase(getOrderDetailsThunk.rejected, (state, action) => {
            console.log("action: ", action);
        });

        builder.addCase(addOrderThunk.fulfilled, (state, action) => {
            console.log("add order succeed");
            state.myOrders = action.payload;

        });

        builder.addCase(addOrderThunk.rejected, (state, action) => {
            console.log("order action: ", action);
        });
        builder.addCase(UpdateSendingThunk.fulfilled, (state, action) => {
            console.log("update order succeed");
        });

        builder.addCase(UpdateSendingThunk.rejected, (state, action) => {
            console.log("order action: ", action);
        });
//         builder.addCase(assignOrdersToEmpThunk.fulfilled, (state, action) => {
//             console.log("assign order succeed");



//         });

//         builder.addCase(assignOrdersToEmpThunk.rejected, (state, action) => {
//             console.log("order action: ", action);
//         });
//         builder.addCase(getCompletedOrdersForEmpThunk.fulfilled, (state, action) => {
//             state.completedOrders = action.payload;
//             console.log("completedOrders");
//             console.log(state.completedOrders);
//         });

//         builder.addCase(getCompletedOrdersForEmpThunk.rejected, (state, action) => {
//             console.log("order action: ", action);
//         });
    }
});
