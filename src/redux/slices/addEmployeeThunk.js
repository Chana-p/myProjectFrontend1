// import { createAsyncThunk } from "@reduxjs/toolkit";

// export const addEmployeeThunk = createAsyncThunk(
//     'logOnEmp',
//     async (details) => {
//         console.log("logon");
//         let res;
        
            
//             var newDetails = {
//                 empId: parseInt(details.empId, 10), 
//                 ename: details.custName,
//                 empNum: 0,                 
//                 egmail: details.custEmail,
//                 ephone: details.custPhone
                
//             }
//             res = await fetch('https://myFirstProjectBackend.onrender.com/api/Employee/AddEmployee', {
//                 method: 'POST',
//                 body: JSON.stringify(newDetails),
//                 headers: {
//                     'Content-Type': 'application/json'
//                 }
//             })
           
       

//         if (res.ok) {
//             const data = await res.json();
//             console.log("fetch");
//             return data;
//             //return true;

//         }
//         else {
//             console.log("failed to fetch😒");
//             throw new Error('failed to fetch😒');
//         }
//     }
// )
import { createAsyncThunk } from "@reduxjs/toolkit";

export const addEmployeeThunk = createAsyncThunk(
    'logOnEmp',
    async (details, { rejectWithValue }) => {
        console.log("logon");
        
        try {
            // בדיקה שכל השדות קיימים ובפורמט הנכון
            const empId = parseInt(details.custId || details.empId || 0);
            
            // יצירת אובייקט העובד בפורמט שהשרת מצפה לו
            const newDetails = {
                empId: empId,
                ename: details.ename || "",
                empNum: 0,
                egmail:  details.egmail || "",
                ephone:  details.ephone || ""
            };
            
            console.log("שולח נתוני עובד:", newDetails);
            
            const res = await fetch('https://myFirstProjectBackend.onrender.com/api/Employee/AddEmployee', {
                method: 'POST',
                body: JSON.stringify(newDetails),
                headers: {
                    'Content-Type': 'application/json',
                    'accept': '*/*'
                }
            });
            
            // בדיקה אם הבקשה הצליחה
            if (res.ok) {
                const data = await res.json();
                console.log("העובד נוסף בהצלחה:", data);
                return data;
            } else {
                // קבלת פרטי השגיאה מהשרת
                const errorText = await res.text();
                console.log(`שגיאת שרת (${res.status}):`, errorText);
                return rejectWithValue(`שגיאת שרת: ${res.status} - ${errorText}`);
            }
        } catch (error) {
            console.log("אירעה שגיאה:", error);
            return rejectWithValue(error.message);
        }
    }
);