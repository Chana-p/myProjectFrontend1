import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllCustomersThunk = createAsyncThunk(
    'getCustomers',
    async () => {
        const res = await fetch(`https://localhost:7064/api/Customer/GetAll`);

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