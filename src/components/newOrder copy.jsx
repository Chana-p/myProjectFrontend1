import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getProductsThunk } from "../redux/slices/getProductsThunk";
import './newOrder.css'
import { addToOrder } from "../redux/slices/productsSlice";
import { addOrderThunk } from "../redux/slices/addOrderThunk";
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
export const NewOrder = () => {


  const products = useSelector(state => state.Products.productsList);
  const dispatch = useDispatch();
  const [prodNum, setProdNum] = useState(0);
  const [myorders, setMyOrders] = useState([]);

  const add = (i, num) => {
    myorders[i].Count +=parseInt(num) ;
    console.log(i + "i");
    console.log(num + "num");
    console.log(myorders);
    console.log("myorders[i].Count");
    console.log(myorders[i].Count);
    setMyOrders(myorders);
    // console.log(i + "i");
    // console.log(num + "num");
    // // console.log(...myorders,myorders[i].Count+=num);
    // var a = parseInt(myorders[i].Count) + num;
    // //setMyOrders(a)
    // myorders[i].Count = a;
    // setMyOrders(myorders);
    // console.log("myorders[i].Count");
    // console.log(myorders[i].Count);


  }

  
  useEffect(() => {
    dispatch(getProductsThunk());
  }, [])
  useEffect(() => {
    if (products.length > 0) {
      products?.map(p => myorders.push(
        {
          "prodId": p.prodId,
          "Count": 0
        }))
      setProdNum(10)
    }
  }, [products])

  useEffect(() => {
    setMyOrders(myorders);
  }, [prodNum])


  // const finish=()=>{
  // dispatch(addOrderThunk(myorders))
  // }


  return <div>
    <button >finish and order</button>
    {/* onClick={e=>finish()} */}
    <button>save the order</button>
    {/* <table style={{ direction: "rtl" }} >
      <thead>
        <tr>
          <td>name</td>
          <td>details</td>
          <td>company</td>
          <td>picture</td>
        </tr></thead>
      <tbody>
        {products.map((p, index) =>
          <tr>
            <td>{p.pname}</td>
            <td>{p.pdescription}</td>
            <td>{p.pcompany}</td>
            <td>{p.ppicture}</td>
            <td>
              <button onClick={(e) => add(p.prodid, index)}>addToOrder</button>
              <input type="number" value={myorders[index]?.Count} onChange={(e)=>{myorders[index].Count=e.target.value;setMyOrders(myorders);setProdNum(5)}} />

            </td>
          </tr>
        )
        }</tbody>
    </table> */}
     <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> 

  </div>
}
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux"
// import { getProductsThunk } from "../redux/slices/getProductsThunk";
// import './newOrder.css'
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import { addOrderThunk } from "../redux/slices/addOrderThunk";
// import '@fontsource/roboto';
// import { ThemeProvider, createTheme } from "@mui/material";
// import { Image } from "@mui/icons-material";
// import { useNavigate } from "react-router-dom";

// export const NewOrder = () => {

// //  בקשה לעיצוב הקומפוננטה אני רוצה עיצוב   רספונסיבי UIUX 
// // דיב שהרקע שלו היא תמונת המוצר ועליו כתוב שם המוצר ומתחת השם יופיע כמות ההזמנה עם פלוס להוספה ומינוס להורדה ומתחת כפתור לפרטים נוספים שיפתח 
// //דיאלוג שבו יוצגו הפרטים הנוספים סה"כ 4 מוצרים בשורה 
// //וכן בתחתית הדף כפתור יפה לסיום ההזמנה ותיבת בחירת עובד מתוך רשימה
//   const products = useSelector(state => state.Products.productsList);
//   const dispatch = useDispatch();
//   const [prodNum, setProdNum] = useState(0);
//   const [myOrders, setMyOrders] = useState([]);
//   const CID = useSelector(state => state.user.CID);
//   const employees = useSelector(state => state.emp.empList);
//   const [employee,setEmployee] =useState("");


//   const add = (prod, num) => {
//     let t = 0;
//     console.log(prod);
//     var arr = [
//     ]
//     arr = myOrders.map(order => {
//       if (order?.prodId === prod) {
//         var newO = {
//           "prodId": order?.prodId,
//           "prodName": "",
//             "prodPic": "",
//             "orderId": 0,
//             "count":  parseInt(num),
//             "cost": 0
//          }
//         return newO
//       }
//       else return order

//     })
//     setMyOrders(arr);
//     console.log("myOrders");
//     console.log(myOrders);
//   }


//   useEffect(() => {
//     dispatch(getProductsThunk());
//   }, [])
//   useEffect(() => {
//     if (products.length > 0) {
//       // myOrders=[];
//       products?.map(p => myOrders.push(
//         {
//           "prodId": p.prodId,
//             "prodName": "",
//             "prodPic": "",
//             "orderId": 0,
//             "count": 0,
//             "cost": 0
//         }))
//       setProdNum(10)
//     }
//   }, [products])

//   useEffect(() => {
//     setMyOrders(myOrders);
//   }, [prodNum])

//   const navigate = useNavigate();
//   const finish = () => {
//     var list=myOrders.filter(e=>e.count!==0);
//     if (list.length>0) {
//       dispatch(addOrderThunk({details:list,id:CID}));
//     }
//     navigate("/Home")
//   }
//   const theme = createTheme({
//     typography: {
//       fontFamily: [
//          '"Segoe UI Symbol"',   ]
//     },
//   });

//   return<div>
//     <ThemeProvider theme={theme}>
    


//       <TableContainer component={Paper} style={{ direction: "rtl", overflow: "hidden" }}>
//         <Table sx={{ minWidth: 650 }} aria-label="simple table">
//           <TableHead>
//             <TableRow>
//               <TableCell>product</TableCell>
//               <TableCell align="right">description</TableCell>
//               <TableCell align="right">company</TableCell>
//               <TableCell align="right">picture</TableCell>
//               <TableCell align="right"></TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {products.map((row, index) => (
//               <TableRow
//                 key={row.name}
//                 sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
//                 <TableCell component="th" scope="row">
//                   {row.pname}
//                 </TableCell>
//                 <TableCell align="right">{row.pdescription}</TableCell>
//                 <TableCell align="right">{row.pcompany}</TableCell>
//                {row.ppicture.length>6&&
//                      <Image style={{ backgroundImage: `url(${row.ppicture})`,height:'120px' }} />
//                  //   <img src={row.ppicture} alt="" />
//                }
//                 {row.ppicture.length<6&&<TableCell align="right">{row.ppicture}</TableCell>
// }
//                 <TableCell align="right">
//                   <button onClick={(e) => add(myOrders[index]?.prodId, 1)}>addToOrder</button>
//                   <input type="number" value={myOrders[index]?.Count} onChange={(e) => { add(myOrders[index]?.prodId, e.target.value) }} /></TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//    {/* תיבה בה בוחרים עובד מתוך רשימה */}
//       <button onClick={e => finish()}>finish and order</button>
//       </ThemeProvider>
      
//   </div>

// }


// {/* <button>save the order</button> 
//   <table style={{ direction: "rtl" }} >
//     <thead>
//       <tr>
//         <td>name</td>
//         <td>details</td>
//         <td>company</td>
//         <td>picture</td>
//       </tr></thead>
//     <tbody>
//       {products.map((p, index) =>
//         <tr>
//           <td>{p.pname}</td>
//           <td>{p.pdescription}</td>
//           <td>{p.pcompany}</td>
//           <td>{p.ppicture}</td>
//           <td>
//             <button onClick={(e) => add(p.prodid, index)}>addToOrder</button>
//             <input type="number" value={myOrders[index]?.Count} onChange={(e) => { add(myOrders[index].prodId,e.target.value)}} />

//           </td>
//         </tr>
//       )
//       }</tbody>
//   </table>*/}