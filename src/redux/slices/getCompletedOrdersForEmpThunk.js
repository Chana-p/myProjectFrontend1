import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCompletedOrdersForEmpThunk = createAsyncThunk(
   'getCompletedOrdersForEmp', 
   async (id) => {
       console.log(id);
       const res = await fetch(`https://localhost:7064/api/Orders/GetCompletedByEmployee/${id}`);
      

       if (res.ok) {
           const data = await res.json();
           console.log("fetch completed orders success get ");
           console.log(data);
           return data;
       } else {
           throw new Error('failed to fetch');
       }
   }
);
