import { createSlice } from "@reduxjs/toolkit";
import { getOrdersThunk } from "./getOrdersThunk";
import { addOrderThunk } from "./addOrderThunk";
import { getOrderDetailsThunk } from "./getOrderDetailsThunk";
import { getOrdersForEmpThunk } from "./getOrdersForEmpThunk";

export const INITAIL_STATE_ORDERS = {
        myOrders:[] ,
    orderDetail:[],
    ordersForManage:[],
    j:0
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
          }
});
