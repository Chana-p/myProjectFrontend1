import { createAsyncThunk } from "@reduxjs/toolkit";

export const addCustomerThunk = createAsyncThunk(
    'logOn',
    async (details) => {
        console.log("logon");
        let res;
        console.log(details.custName);
        if (details.custName.substring(0, 3) === "emp") {
            console.log(details.custName.substring(3));
            var newDetails = {
                empId: details.custId,
                eName: details.custName.substring(3),
                empNum: 0,
                eGmail: details.custEmail,
                ephone: details.custPhone
            }
            res = await fetch('https://myFirstProjectBackend.onrender.com/api/Employee/logOn', {//https://myFirstProjectBackend.onrender.com/api/Employee/logOn
                method: 'POST',
                body: JSON.stringify(newDetails),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        }

        else res = await fetch('https://myFirstProjectBackend.onrender.com/api/Employee/logOn', {
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
