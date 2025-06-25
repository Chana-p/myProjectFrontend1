import { createAsyncThunk } from "@reduxjs/toolkit";

export const getNewOrdersForEmpThunk = createAsyncThunk(
   'getNewOrdersForEmp', 
   async () => {
       const res = await fetch(`https://myFirstProjectBackend.onrender.com/api/Orders/GetNews`);
      

       if (res.ok) {
           const data = await res.json();
           console.log("fetch new orders success get ");
           return data;
       } else {
           throw new Error('failed to fetch');
       }
   }
);
