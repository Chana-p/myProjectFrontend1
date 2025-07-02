import { createSlice } from "@reduxjs/toolkit";
import { getProductsThunk } from "./getProductsThunk"

export const INITAIL_STATE_PRODUCTS = {
    productsList:[
        ],
    myOrder:[
        {prodId:0,
        Count:0}
    ]   
}
export const productsSlice = createSlice({
    name: 'Products',
    initialState: INITAIL_STATE_PRODUCTS,
    reducers: {
        addToOrder: (state, action) => {
            state.myOrder = state.myOrder.push(action.payload);
        }
    },
    extraReducers: (builder) => {

        // הוספת מקרה שהט'נק התחיל
        builder.addCase(getProductsThunk.pending, (state) => {
        });
        // הוספת מקרה שהט'נק הסתיים בהצלחה
        builder.addCase(getProductsThunk.fulfilled, (state, action) => {
            console.log("get products succeed");
           console.log(action.payload);
           state.productsList = action.payload;
      
            
        });
        // הוספת מקרה שהט'נק נכשל 
        builder.addCase(getProductsThunk.rejected, (state, action) => {
            console.log("action: ", action);
        });
          }
});
export const { addToOrder} = productsSlice.actions;
