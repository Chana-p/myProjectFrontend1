// import { useDispatch, useSelector } from "react-redux";
// import { getOrdersThunk } from "../redux/slices/getOrdersThunk";
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import { useEffect, useState } from "react";
// import { getOrderDetailsThunk } from "../redux/slices/getOrderDetailsThunk";
// import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
// import ButtonBase from '@mui/material/ButtonBase';
// import Typography from '@mui/material/Typography';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import Avatar from '@mui/material/Avatar';
// import { useNavigate } from "react-router-dom";
// import { getOrdersForEmpThunk } from "../redux/slices/getOrdersForEmpThunk";
// import { UpdateSendingThunk } from "../redux/slices/updateSending";
// export const EmpOrderList = () => {


//   const id = useSelector(state => state.user.EID);
//   const EID = useSelector(state => state.user.EID);
//   const ordersToSend = useSelector(state => state.Orders.myOrders);
//   const details = useSelector(state => state.Orders.orderDetail);
//   const dispatch = useDispatch();

//   //עבור כפתור תמונה................................................................................................................
//   const ImageButton = styled(ButtonBase)(({ theme }) => ({
//     position: 'relative',
//     height: 200,
//     [theme.breakpoints.down('sm')]: {
//       width: '100% !important', // Overrides inline-style
//       height: 100,
//     },
//     '&:hover, &.Mui-focusVisible': {
//       zIndex: 1,
//       '& .MuiImageBackdrop-root': {
//         opacity: 0.15,
//       },
//       '& .MuiImageMarked-root': {
//         opacity: 0,
//       },
//       '& .MuiTypography-root': {
//        // border: '4px solid currentColor',
//       },
//     },
//   }));

//   const ImageSrc = styled('span')({
//     position: 'absolute',
//     left: 0,
//     right: 0,
//     top: 0,
//     bottom: 0,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center 40%',
//   });

//   const Image = styled('span')(({ theme }) => ({
//     position: 'absolute',
//     left: 0,
//     right: 0,
//     top: 0,
//     bottom: 0,
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     color: theme.palette.common.white,
//   }));

//   const ImageBackdrop = styled('span')(({ theme }) => ({
//     position: 'absolute',
//     left: 0,
//     right: 0,
//     top: 0,
//     bottom: 0,
//     backgroundColor: theme.palette.common.black,
//     opacity: 0.4,
//     transition: theme.transitions.create('opacity'),
//   }));

//   const ImageMarked = styled('span')(({ theme }) => ({
//     height: 3,
//     width: 18,
//     backgroundColor: theme.palette.common.white,
//     position: 'absolute',
//     bottom: -2,
//     left: 'calc(50% - 9px)',
//     transition: theme.transitions.create('opacity'),
//   }));
//   //.................................................................................................................
//   const theme = createTheme({
//     typography: {
//       fontFamily: [
//          '"Segoe UI Symbol"',   ]
//     },
//   });
  
//   const [hasDetails, setHasDetails] = useState([])
//   const fetchDetails = (ordId) => {
//     dispatch(getOrderDetailsThunk(ordId))
//   }
//   //מעדכן לאילו הזמנות יש פירוט משתנה כל פעם שמתקבל שינוי
  
//  //אתחול 
//   useEffect(() => {
//     console.log(id);
//     dispatch(getOrdersForEmpThunk(id));
//    console.log(ordersToSend>0);
   
// }, [])
// useEffect(() => {
//   console.log(details);
//   if (details && details.length > 0 && details[0]) {
//     console.log("details[0]");
//     console.log(details[0]);
//     var updated = [];
//     var c = hasDetails && hasDetails.length ? hasDetails.length : 0;
//     for (let i = 0; i < c; i++) {
//       updated.push(-1);    
//     }
//     details.map((d, ind) => {
//       console.log("d[0]");
//       console.log(d[0]);
//       var orderId = d[0] && d[0].orderId;
//       if (orderId && ordersToSend) {
//         ordersToSend.map((e, index) => {
//           if (e.orderId === orderId) {
//             updated[index] = ind;
//           }
//         });
//       }
//     });
//     console.log(updated);
//     setHasDetails(updated);   
//   }
  
//   console.log("details");
//   console.log(details);
// }, [details]);

// useEffect(() => {
//   var arr = [];
//   if (ordersToSend && ordersToSend.length > 0 && (!details || details.length === 0)) {
//     ordersToSend.map(o => {
//       arr.push(-1);
//     });
//     console.log("arrrrrr------", arr);
//     setHasDetails(arr);
//   }
// }, [ordersToSend]);
//  const navigate = useNavigate();

// const sendOrder=(orderId)=>{
// dispatch(UpdateSendingThunk({orderid:orderId,empid:EID}));
//  }
//   return <div >
//      <ThemeProvider theme={theme}>
//       {/* {EID!=0&& <button onClick={()=>navigate("../")} >חזרה לדף הניהול</button>} */}
//       {ordersToSend &&ordersToSend.length>0&&
//      <TableContainer component={Paper} sx={{ direction: "rtl" ,overflow:"hidden"}}>
//       <Table sx={{ minWidth: 650 }} aria-label="simple table"
//       >
//         <TableHead>
//           <TableRow>
//             <TableCell align="right" style={{fontFamily:"cursive"}} >orderNum</TableCell>
//             <TableCell align="right" style={{fontFamily:"cursive"}}>Date</TableCell>
//             <TableCell align="right" style={{fontFamily:"cursive"}}>sent</TableCell>
//             <TableCell align="right" style={{fontFamily:"cursive"}}>שם הלקוח</TableCell>
//             <TableCell align="right" style={{fontFamily:"cursive"}}>מייל לפניות ישירות בנושא</TableCell>
//             <TableCell align="right" style={{fontFamily:"cursive"}}>Details</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {ordersToSend.map((row, index) => (
//             <TableRow  key={row.orderId} >
//               <TableCell component="th" scope="row" sx={{fontFamily:"cursive",fontSize:"large",width:"15%"}}> {row.orderId}</TableCell>
//               <TableCell align="right" sx={{width:"15%",fontFamily:"cursive",fontSize:"large"}} >{row.orderDate}</TableCell>
//               <TableCell align="right" sx={{width:"15%",fontFamily:"cursive"}}>
//                <button style={{fontSize:"xx-large"}} onClick={()=>sendOrder(row.orderId)}>✅</button><br /><span style={{fontSize:"small"}}>אשר בעת שליחת המשלוח</span>  
//               </TableCell>
//               <TableCell align="right" sx={{width:"15%",fontFamily:"cursive",fontSize:"large"}} >{row.nameToConnection}</TableCell>
//               <TableCell align="right" sx={{width:"15%",fontFamily:"cursive",fontSize:"large"}} >{row.emailToConnection}</TableCell>
//               <TableCell align="right">
//                 {hasDetails[index]!==-1 &&
//                 <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper',fontFamily:"cursive",fontSize:"large" }}>
//                 { details[hasDetails[index]]?.map(o => 
//                  <ListItem> <ListItemAvatar> <Avatar>  {o.prodPic} </Avatar> </ListItemAvatar>
//                   <ListItemText primary={o.prodName} secondary={o.count} />
//                 </ListItem> )  } </List>}
//                 {hasDetails[index]===-1 && <>
//                  <ImageButton focusRipple style={{ width:"100%",fontFamily:"cursive" }} onClick={() => fetchDetails(row.orderId)} >
//                     <ImageSrc style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/pppp.jpg"})` }} />
//                     <ImageBackdrop className="MuiImageBackdrop-root" />
//                     <Image> <Typography  component="span"  variant="subtitle1" color="inherit"  sx={(theme) => ({
//                         fontFamily:"cursive",
//                         position: 'relative', p: 4, pt: 2, pb: `calc(${theme.spacing(1)} + 6px)`,  })}>
//                       to see your order details
//                       <ImageMarked className="MuiImageMarked-root" />
//                     </Typography>  </Image> </ImageButton>  </>}
//               </TableCell>
//             </TableRow>))}
//         </TableBody>
//       </Table>
//     </TableContainer>}
//     {(!ordersToSend || ordersToSend.length === 0)&&
//     <h1 style={{fontSize:"100px"}}>מצטערים 😔😔😔😔😔😔 לא נמצאו הזמנות שלא בוצעו עבור עובד זה </h1>
//     }
//     </ThemeProvider>
//   </div>

// }
// Image button styling
// const ImageButton = styled(ButtonBase)(({ theme }) => ({
//   position: 'relative',
//   height: 150,
//   borderRadius: 8,
//   overflow: 'hidden',
//   boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
//   transition: 'transform 0.3s ease',
//   '&:hover': {
//     transform: 'scale(1.03)',
//   },
//   [theme.breakpoints.down('sm')]: {
//     width: '100% !important',
//     height: 100,
//   },
//   '&:hover, &.Mui-focusVisible': {
//     zIndex: 1,
//     '& .MuiImageBackdrop-root': {
//       opacity: 0.15,
//     },
//     '& .MuiImageMarked-root': {
//       opacity: 0,
//     },
//   },
// }));

// const ImageSrc = styled('span')({
//   position: 'absolute',
//   left: 0,
//   right: 0,
//   top: 0,
//   bottom: 0,
//   backgroundSize: 'cover',
//   backgroundPosition: 'center 40%',
// });

// const Image = styled('span')(({ theme }) => ({
//   position: 'absolute',
//   left: 0,
//   right: 0,
//   top: 0,
//   bottom: 0,
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   color: theme.palette.common.white,
// }));

// const ImageBackdrop = styled('span')(({ theme }) => ({
//   position: 'absolute',
//   left: 0,
//   right: 0,
//   top: 0,
//   bottom: 0,
//   backgroundColor: theme.palette.common.black,
//   opacity: 0.4,
//   transition: theme.transitions.create('opacity'),
// }));

// const ImageMarked = styled('span')(({ theme }) => ({
//   height: 3,
//   width: 18,
//   backgroundColor: theme.palette.common.white,
//   position: 'absolute',
//   bottom: -2,
//   left: 'calc(50% - 9px)',
//   transition: theme.transitions.create('opacity'),
// }));

import { useDispatch, useSelector } from "react-redux";
import { getOrdersThunk } from "../redux/slices/getOrdersThunk";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from "react";
import { getOrderDetailsThunk } from "../redux/slices/getOrderDetailsThunk";
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from "react-router-dom";
import { getOrdersForEmpThunk } from "../redux/slices/getOrdersForEmpThunk";
import { UpdateSendingThunk } from "../redux/slices/updateSending";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PersonOffIcon from '@mui/icons-material/PersonOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SendIcon from '@mui/icons-material/Send';
import Chip from '@mui/material/Chip';
import Tooltip from '@mui/material/Tooltip';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { getNewOrdersForEmpThunk } from "../redux/slices/getNewOrdersForEmp";
// import { assignOrdersToEmpThunk } from "../redux/slices/assignOrdersToEmpThunk";
// import { getCompletedOrdersForEmpThunk } from "../redux/slices/getCompletedOrdersForEmpThunk";

export const EmpOrderList = () => {
  const EID = useSelector(state => state.user.EID);
  const ordersToSend = useSelector(state => state.Orders.myOrders);
  const details = useSelector(state => state.Orders.orderDetail);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const UnassignedOrders = useSelector(state => state.Orders.newOrders);
  const completedOrders = useSelector(state => state.Orders.completedOrders);
  const [hasDetails, setHasDetails] = useState([]);
  const [tabValue, setTabValue] = useState(0);
  const [showCompletedOrders, setShowCompletedOrders] = useState(false);
  const [showUnassignedOrders, setShowUnassignedOrders] = useState(false);
  const [showUnassignedOrdersModal, setShowUnassignedOrdersModal] = useState(false);
  const [selectedUnassignedOrders, setSelectedUnassignedOrders] = useState([]);
  // const loadingUnassigned = false;
  // Custom theme
  const theme = createTheme({
    palette: {
      primary: {
        main: '#3f51b5',
      },
      secondary: {
        main: '#f50057',
      },
      background: {
        default: '#f5f5f5',
        paper: '#ffffff',
      },
    },
    typography: {
      fontFamily: [
        'Segoe UI',
        'Roboto',
        'Arial',
        'sans-serif',
      ].join(','),
    },
    components: {
      MuiTableCell: {
        styleOverrides: {
          head: {
            backgroundColor: '#3f51b5',
            color: '#fff',
            fontWeight: 'bold',
          },
          root: {
            padding: '16px',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            textTransform: 'none',
            fontWeight: 'bold',
          },
        },
      },
    },
  });

  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:hover': {
      backgroundColor: 'rgba(63, 81, 181, 0.08)',
    },
    transition: 'background-color 0.2s ease',
  }));

  const fetchDetails = (ordId) => {
    dispatch(getOrderDetailsThunk(ordId));
  };

  // Initialize
  useEffect(() => {
    console.log(EID);
    dispatch(getOrdersForEmpThunk(EID));
    console.log(ordersToSend > 0);
  }, []);

  useEffect(() => {
    console.log(details);
    if (details && details.length > 0 && details[0]) {
      console.log("details[0]");
      console.log(details[0]);
      var updated = [];
      var c = hasDetails && hasDetails.length ? hasDetails.length : 0;
      for (let i = 0; i < c; i++) {
        updated.push(-1);
      }
      details.map((d, ind) => {
        console.log("d[0]");
        console.log(d[0]);
        var orderId = d[0] && d[0].orderId;
        if (orderId && ordersToSend) {
          ordersToSend.map((e, index) => {
            if (e.orderId === orderId) {
              updated[index] = ind;
            }
          });
        }
      });
      console.log(updated);
      setHasDetails(updated);
    }

    console.log("details");
    console.log(details);
  }, [details]);

  useEffect(() => {
    var arr = [];
    if (ordersToSend && ordersToSend.length > 0 && (!details || details.length === 0)) {
      ordersToSend.map(o => {
        arr.push(-1);
      });
      console.log("arrrrrr------", arr);
      setHasDetails(arr);
    }
  }, [ordersToSend]);

  const sendOrder = (orderId) => {
    dispatch(UpdateSendingThunk({ orderid: orderId, empid: EID }));
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleImportCompletedOrders = () => {
    setShowCompletedOrders(true);
    // Here you would dispatch an action to fetch completed orders
    // dispatch(getCompletedOrdersForEmpThunk(EID));
  };

  const handleImportUnassignedOrders = () => {
    setShowUnassignedOrders(true);
    dispatch(getNewOrdersForEmpThunk());
    setShowUnassignedOrdersModal(true);
  };

  const handleSelectUnassignedOrder = (orderId, isSelected) => {
    if (isSelected) {
      setSelectedUnassignedOrders([...selectedUnassignedOrders, orderId]);
    } else {
      setSelectedUnassignedOrders(selectedUnassignedOrders.filter(id => id !== orderId));
    }
  };

  const handleImportSelectedUnassignedOrders = () => {
    console.log("assignedOrders");
    if (selectedUnassignedOrders.length > 0) {
      console.log("assignedOrders");
      // dispatch(assignOrdersToEmpThunk({ 
      //   empID: EID, 
      //   orderIds: selectedUnassignedOrders 
      // })).then(() => {
      //   dispatch(getOrdersForEmpThunk(EID));
      //   setShowUnassignedOrdersModal(false);
      //   setSelectedUnassignedOrders([]);
      // });
      
      setShowUnassignedOrdersModal(false);
      setSelectedUnassignedOrders([]);
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
        <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#3f51b5' }}>
            ניהול הזמנות
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button 
              variant="contained" 
              color="primary" 
              startIcon={<CheckCircleIcon />}
              onClick={handleImportCompletedOrders}
            >
              ייבוא הזמנות שבוצעו
            </Button>
            <Button 
              variant="contained" 
              color="secondary" 
              startIcon={<PersonOffIcon />}
              onClick={handleImportUnassignedOrders}
            >
              ייבוא הזמנות לא משויכות
            </Button>
          </Box>
        </Box>

        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
          <Tabs value={tabValue} onChange={handleTabChange} centered>
            <Tab label="הזמנות לשליחה" icon={<LocalShippingIcon />} iconPosition="start" />
            {showCompletedOrders && <Tab label="הזמנות שבוצעו" icon={<CheckCircleIcon />} iconPosition="start" />}
            {showUnassignedOrders && <Tab label="הזמנות לא משויכות" icon={<PersonOffIcon />} iconPosition="start" />}
          </Tabs>
        </Box>

        {tabValue === 0 && (
          <>
            {ordersToSend && ordersToSend.length > 0 ? (
              <Card elevation={3}>
                <CardContent>
                  <TableContainer component={Paper} sx={{ direction: "rtl", borderRadius: 2, overflow: "hidden" }}>
                    <Table sx={{ minWidth: 650 }} aria-label="orders table">
                      <TableHead>
                        <TableRow>
                          <TableCell align="right">מספר הזמנה</TableCell>
                          <TableCell align="right">תאריך</TableCell>
                          <TableCell align="right">סטטוס</TableCell>
                          <TableCell align="right">שם הלקוח</TableCell>
                          <TableCell align="right">מייל לפניות</TableCell>
                          <TableCell align="right">פרטי הזמנה</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {ordersToSend?.map((row, index) => (
                          <StyledTableRow key={row.orderId}>
                            <TableCell component="th" scope="row" sx={{ fontWeight: 'bold' }}>
                              <Chip label={row.orderId} color="primary" variant="outlined" />
                            </TableCell>
                            <TableCell align="right">{row.orderDate}</TableCell>
                            <TableCell align="right">
                              <Tooltip title="אשר בעת שליחת המשלוח">
                                <Button
                                  variant="contained"
                                  color="success"
                                  startIcon={<SendIcon />}
                                  onClick={() => sendOrder(row.orderId)}
                                  sx={{ borderRadius: '20px' }}
                                >
                                  שלח
                                </Button>
                              </Tooltip>
                            </TableCell>
                            <TableCell align="right">{row.nameToConnection}</TableCell>
                            <TableCell align="right">{row.emailToConnection}</TableCell>
                            <TableCell align="right">
                              {hasDetails[index] !== -1 ? (
                                <Box sx={{ maxHeight: 200, overflowY: 'auto', bgcolor: 'background.paper', borderRadius: 2, p: 1 }}>
                                  <List>
                                    {details[hasDetails[index]]?.map((o, i) => (
                                      <ListItem key={i} sx={{ borderBottom: '1px solid #eee', py: 1 }}>
                                        <ListItemAvatar>
                                          <Avatar sx={{ bgcolor: 'primary.main' }}>{o.prodPic}</Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                          primary={<Typography variant="subtitle1" fontWeight="bold">{o.prodName}</Typography>}
                                          secondary={<Typography variant="body2">כמות: {o.count}</Typography>}
                                        />
                                      </ListItem>
                                    ))}
                                  </List>
                                </Box>
                              ) : (
                                <Button
                                  variant="outlined"
                                  color="primary"
                                  startIcon={<VisibilityIcon />}
                                  onClick={() => fetchDetails(row.orderId)}
                                  fullWidth
                                >
                                  הצג פרטים
                                </Button>
                              )}
                            </TableCell>
                          </StyledTableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </CardContent>
              </Card>
            ) : (
              <Alert severity="info" sx={{ mt: 2, borderRadius: 2 }}>
                <AlertTitle>אין הזמנות</AlertTitle>
                לא נמצאו הזמנות שלא בוצעו עבור עובד זה
              </Alert>
            )}
          </>
        )}

        {tabValue === 1 && showCompletedOrders && (
          // <Alert severity="info" sx={{ mt: 2, borderRadius: 2 }}>
          //   <AlertTitle>הזמנות שבוצעו</AlertTitle>
          //   כאן יוצגו ההזמנות שכבר בוצעו לאחר ייבוא הנתונים
          //   </Alert>
          <>
          {completedOrders && completedOrders.length > 0 ? (
            <Card elevation={3}>
              <CardContent>
                <TableContainer component={Paper} sx={{ direction: "rtl", borderRadius: 2, overflow: "hidden" }}>
                  <Table sx={{ minWidth: 650 }} aria-label="orders table">
                    <TableHead>
                      <TableRow>
                        <TableCell align="right">מספר הזמנה</TableCell>
                        <TableCell align="right">תאריך</TableCell>
                        <TableCell align="right">סטטוס</TableCell>
                        <TableCell align="right">שם הלקוח</TableCell>
                        <TableCell align="right">מייל לפניות</TableCell>
                        <TableCell align="right">פרטי הזמנה</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {completedOrders?.map((row, index) => (
                        <StyledTableRow key={row.orderId}>
                          <TableCell component="th" scope="row" sx={{ fontWeight: 'bold' }}>
                            <Chip label={row.orderId} color="primary" variant="outlined" />
                          </TableCell>
                          <TableCell align="right">{row.orderDate}</TableCell>
                          <TableCell align="right">
                            <Tooltip title="אשר בעת שליחת המשלוח">
                              <span
                                variant="contained"
                                color="success"
                                startIcon={<SendIcon />}
                                onClick={() => sendOrder(row.orderId)}
                                sx={{ borderRadius: '20px' }}
                              >
                                שלח
                              </span>
                            </Tooltip>
                          </TableCell>
                          <TableCell align="right">{row.nameToConnection}</TableCell>
                          <TableCell align="right">{row.emailToConnection}</TableCell>
                          <TableCell align="right">
                            פרטי ההזמנה הישנה:(
                           </TableCell>
                        </StyledTableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </Card>
          ) : (
            <Alert severity="info" sx={{ mt: 2, borderRadius: 2 }}>
              <AlertTitle>אין הזמנות</AlertTitle>
              לא נמצאו הזמנות שכבר בוצעו עבור עובד זה
            </Alert>
          )}
        </>
        )}

        {tabValue === 2 &&
         showUnassignedOrders && (
          // <Alert severity="info" sx={{ mt: 2, borderRadius: 2 }}>
          //   <AlertTitle>הזמנות לא משויכות</AlertTitle>
          //   כאן יוצגו ההזמנות שלא משויכות לאף עובד לאחר ייבוא הנתונים
          // </Alert>
          <>
          {UnassignedOrders && UnassignedOrders.length > 0 ? (
            <Card elevation={3}>
              <CardContent>
                <TableContainer component={Paper} sx={{ direction: "rtl", borderRadius: 2, overflow: "hidden" }}>
                  <Table sx={{ minWidth: 650 }} aria-label="orders table">
                    <TableHead>
                      <TableRow>
                        <TableCell align="right">מספר הזמנה</TableCell>
                        <TableCell align="right">תאריך</TableCell>
                        <TableCell align="right">סטטוס</TableCell>
                        <TableCell align="right">שם הלקוח</TableCell>
                        <TableCell align="right">מייל לפניות</TableCell>
                        <TableCell align="right">פרטי הזמנה</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {UnassignedOrders?.map((row, index) => (
                        <StyledTableRow key={row.orderId}>
                          <TableCell component="th" scope="row" sx={{ fontWeight: 'bold' }}>
                            <Chip label={row.orderId} color="primary" variant="outlined" />
                          </TableCell>
                          <TableCell align="right">{row.orderDate}</TableCell>
                          <TableCell align="right">
                            <Tooltip title="אשר בעת שליחת המשלוח">
                              <span
                                variant="contained"
                                color="success"
                                startIcon={<SendIcon />}
                                onClick={() => sendOrder(row.orderId)}
                                sx={{ borderRadius: '20px' }}
                              >
                                שלח
                              </span>
                            </Tooltip>
                          </TableCell>
                          <TableCell align="right">{row.nameToConnection}</TableCell>
                          <TableCell align="right">{row.emailToConnection}</TableCell>
                          <TableCell align="right">
                            פרטי ההזמנה הישנה
                          </TableCell>
                        </StyledTableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </Card>
          ) : (
            <Alert severity="info" sx={{ mt: 2, borderRadius: 2 }}>
              <AlertTitle>אין הזמנות</AlertTitle>
              לא נמצאו הזמנות שכבר בוצעו עבור עובד זה
            </Alert>
          )}
        </>
        )}

        {/* Modal for completed orders - would be implemented when backend is ready */}
        {/* <Dialog open={showCompletedOrdersModal} onClose={() => setShowCompletedOrdersModal(false)}>
          <DialogTitle>הזמנות שבוצעו</DialogTitle>
          <DialogContent>
            <DialogContentText>
              בחר הזמנות שברצונך לייבא
            </DialogContentText>
            <List>
              {completedOrders.map(order => (
                <ListItem key={order.orderId}>
                  <ListItemText primary={`הזמנה מספר ${order.orderId}`} secondary={order.orderDate} />
                  <Checkbox onChange={(e) => handleSelectCompletedOrder(order.orderId, e.target.checked)} />
                </ListItem>
              ))}
            </List>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setShowCompletedOrdersModal(false)}>ביטול</Button>
            <Button onClick={handleImportSelectedCompletedOrders} variant="contained">ייבא</Button>
          </DialogActions>
        </Dialog> */}

        {/* Modal for unassigned orders - would be implemented when backend is ready */}
        <Dialog open={showUnassignedOrdersModal} onClose={() => setShowUnassignedOrdersModal(false)}>
          <DialogTitle>הזמנות לא משויכות</DialogTitle>
          <DialogContent>
            <DialogContentText>
              בחר הזמנות שברצונך לייבא
            </DialogContentText>
            <List>
              {UnassignedOrders?.map(order => (
                <ListItem key={order.orderId}>
                  <ListItemText primary={`הזמנה מספר ${order.orderId}`} secondary={order.orderDate} />
                  <Checkbox onChange={(e) => handleSelectUnassignedOrder(order.orderId, e.target.checked)} />
                </ListItem>
              ))}
            </List>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setShowUnassignedOrdersModal(false)}>ביטול</Button>
            <Button onClick={handleImportSelectedUnassignedOrders} variant="contained">ייבא</Button>
          </DialogActions>
        </Dialog>

      </Container>
    </ThemeProvider>
  );
};
