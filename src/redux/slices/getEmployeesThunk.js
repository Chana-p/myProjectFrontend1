import { createAsyncThunk } from "@reduxjs/toolkit";

export const getEmployeesThunk = createAsyncThunk(
    'getEmployees',
    async () => {
        const res = await fetch(`https://localhost:7064/api/Employee/GetAll`);

        if (res.ok) {
            const data = await res.json();
            console.log("fetch employees success get ");
            return data;
        } 
        else {
            throw new Error('failed to fetch');
        }
    }
);
