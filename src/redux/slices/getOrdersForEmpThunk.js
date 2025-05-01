import { createAsyncThunk } from "@reduxjs/toolkit";

export const getOrdersForEmpThunk = createAsyncThunk(
   'getOrdersForEmp', 
   async (id) => {
       
       const res = await fetch(`https://localhost:7064/api/Orders/GetByEmployee/${id}`);
      

       if (res.ok) {
           const data = await res.json();
           console.log("fetch orders success get ");
           return data;
       } else {
           throw new Error('failed to fetch');
       }
   }
);
