import { createAsyncThunk } from "@reduxjs/toolkit";

export const addOrderThunk = createAsyncThunk(
    'addOrder', 
    async ({details,id,empId}) => {
        console.log(details);
     const res = await fetch(`https://myFirstProjectBackend.onrender.com/api/Orders/addToCustomer/${id}/${empId}`, {
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
