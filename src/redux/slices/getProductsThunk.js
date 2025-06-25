import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProductsThunk = createAsyncThunk(
   'getProducts', 
   async () => {
       
       const res = await fetch(`https://localhost:7064/api/Products/GetAll`);
      

       if (res.ok) {
           const data = await res.json();
           console.log("fetch  success get ");
           return data;
       } else {
           throw new Error('failed to fetch');
       }
   }
);
