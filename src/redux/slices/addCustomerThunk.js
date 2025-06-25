import { createAsyncThunk } from "@reduxjs/toolkit";

export const addCustomerThunk = createAsyncThunk(
    'logOn',
    async (details) => {
        console.log("logon");
        let res;
        console.log(details.custName);
       
        res = await fetch('https://myFirstProjectBackend.onrender.com/api/Customer/logOn', {
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
            //return true;

        }
        else {
            console.log("failed to fetch😒");
            throw new Error('failed to fetch😒');
        }
    }
)
