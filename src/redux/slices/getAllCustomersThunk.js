import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllCustomersThunk = createAsyncThunk(
    'getCustomers',
    async () => {
        const res = await fetch(`https://myFirstProjectBackend.onrender.com/api/Customer/GetAll`);

        if (res.ok) {
            const data = await res.json();
            console.log("fetch customers success get ");
            return data;
        } 
        else {
            throw new Error('failed to fetch');
        }
    }
);