import { createAsyncThunk } from "@reduxjs/toolkit";

export const UpdateSendingThunk = createAsyncThunk(
    'UpdateSending', 
    async ({orderid,empid}) => {
        const res = await fetch(`https://myFirstProjectBackend.onrender.com/api/Orders/updateSending/${orderid}/${empid}`, {
        method: 'PUT',
      //  body: JSON.stringify(details),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (res.ok) {
        console.log("UpdateSending success");
       
    }
    else {
        console.log("failed to fetch😒");
        throw new Error('failed to fetch😒');
    }
    }
)