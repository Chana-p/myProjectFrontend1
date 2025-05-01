import { createAsyncThunk } from "@reduxjs/toolkit";

export const addProductThunk = createAsyncThunk(
    'addProduct', 
    async ({details}) => {
        console.log(details);
     const res = await fetch(`https://localhost:7064/api/Products/Add`, {//https://localhost:7064/api/Orders/addToCustomer/12345
        method: 'POST',
        body: JSON.stringify(details),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (res.ok) {
        const data = await res.json();
        console.log("fetch");
        return data;
    }
    else {
        console.log("failed to fetch😒");
        throw new Error('failed to fetch😒');
    }
    }
)
