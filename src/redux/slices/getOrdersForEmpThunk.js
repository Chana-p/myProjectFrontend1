import { createAsyncThunk } from "@reduxjs/toolkit";

export const getOrdersForEmpThunk = createAsyncThunk(
   'getOrdersForEmp', 
   async (id) => {
       console.log(id);
       const res = await fetch(`https://myFirstProjectBackend.onrender.com/api/Orders/GetByEmployee/${id}`);
      

       if (res.ok) {
           const data = await res.json();
           console.log("fetch orders success get ");
           return data;
       } else {
           throw new Error('failed to fetch');
       }
   }
);
