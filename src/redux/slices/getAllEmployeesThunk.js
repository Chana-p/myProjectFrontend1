import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllemployeesThunk = createAsyncThunk(
    'getEmployees',
    async () => {
        const res = await fetch(`https://myFirstProjectBackend.onrender.com/api/Employee/GetAll`);

        if (res.ok) {
            const data = await res.json();
            console.log("fetch emps success get ");
            return data;
        } 
        else {
            throw new Error('failed to fetch');
        }
    }
);