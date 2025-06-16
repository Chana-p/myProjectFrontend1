import { createAsyncThunk } from "@reduxjs/toolkit";

export const logInThunk = createAsyncThunk(
    'logIn',
    async (details) => {
        console.log(details);
        let res;
       if(details.customername.substring(0,3)==="emp"){
        console.log(details.customername.substring(3));
        details.customername=details.customername.substring(3);
        console.log(details.customername);
        res = await fetch(`https://myFirstProjectBackend.onrender.com/api/Employee/logIn/${details.password}/${details.customername}`);
       }
       else {
        console.log("customerfetch");
         res = await fetch(`https://myFirstProjectBackend.onrender.com/api/Customer/logIn/${details.password}/${details.customername}`);
       } 
        if (res.ok) {
            const data = await res.json(); // חשוב להמיר ל-JSON
            return data; // מחזירים את המידע ולא את אובייקט Response
        }
        throw new Error('failed to fetch');
    }
);
