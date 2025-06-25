import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllOrderDetailsThunk = createAsyncThunk(
   'getAllOrderDetails', 
   async (id) => {
       
       const res = await fetch(`https://myFirstProjectBackend.onrender.com/api/OrderDetails/GetAll`);
      

       if (res.ok) {
           const data = await res.json();
           console.log(data);
           return data;
       } else {
           throw new Error('failed to fetch');
       }
   }
);
