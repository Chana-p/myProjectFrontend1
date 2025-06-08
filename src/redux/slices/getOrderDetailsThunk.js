import { createAsyncThunk } from "@reduxjs/toolkit";

export const getOrderDetailsThunk = createAsyncThunk(
   'getOrderDetails', 
   async (id) => {
       
       const res = await fetch(`https://myFirstProjectBackend.onrender.com/api/OrderDetails/GetDetailsForOrder/${id}`);
      

       if (res.ok) {
           const data = await res.json();
           console.log(data);
           return data;
       } else {
           throw new Error('failed to fetch');
       }
   }
);
