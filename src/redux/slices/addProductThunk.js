// import { createAsyncThunk } from "@reduxjs/toolkit";

// export const addProductThunk = createAsyncThunk(
//     'addProduct', 
//     async ({details}) => {
//         console.log("addProductThunk");
//         console.log(details);
//      const res = await fetch(`https://localhost:7064/api/Products/Add`, {//https://localhost:7064/api/Orders/addToCustomer/12345
//         method: 'POST',
//         body: JSON.stringify(details),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
//     if (res.ok) {
//         const data = await res.json();
//         console.log("fetch add product to sever with picture");
//         return data;
//     }
//     else {
//         console.log("failed to fetch😒");
//         throw new Error('failed to fetch😒');
//     }
//     }
// )
// src/redux/slices/addProductThunk.js
import { createAsyncThunk } from '@reduxjs/toolkit';

export const addProductThunk = createAsyncThunk(
  'products/addProduct',
  async (productData, { rejectWithValue }) => {
    try {
      console.log("addProductThunk", productData);
      
      // וודא שכל השדות הנדרשים קיימים
      const productToAdd = {
        prodId: 0, // השרת יקצה ID
        pname: productData.pname,
        psum: productData.psum,
        pimporter: productData.pimporter || "defaultImporter", // ספק ערך ברירת מחדל אם חסר
        pcompany: productData.pcompany || "defaultCompany", // ספק ערך ברירת מחדל אם חסר
        ppicture: productData.ppicture || "",
        pdescription: productData.pdescription || ""
      };
      
      console.log("Sending to server:", productToAdd);
      
      const response = await fetch('https://localhost:7064/api/Products/Add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'accept': 'text/plain'
        },
        body: JSON.stringify(productToAdd)
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error("Server error:", errorText);
        return rejectWithValue(`Server error: ${response.status} - ${errorText}`);
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("failed to fetch", error);
      return rejectWithValue(error.message);
    }
  }
);
