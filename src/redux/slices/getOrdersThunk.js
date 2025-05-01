import { createAsyncThunk } from "@reduxjs/toolkit";

export const getOrdersThunk = createAsyncThunk(
   'getOrders', 
   
   async (id) => {
       
       const res = await fetch(`https://localhost:7064/api/Orders/GetByCustomer/${id}`);
      

       if (res.ok) {
           const data = await res.json();
           console.log("fetch orders success get ");
           return data;
       } else {
           throw new Error('failed to fetch');
       }
   }
);
