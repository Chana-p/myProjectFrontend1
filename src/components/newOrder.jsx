import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProductsThunk } from "../redux/slices/getProductsThunk";
import { addOrderThunk } from "../redux/slices/addOrderThunk";
import './newOrder.css';

// Material UI imports
import {
  ThemeProvider, createTheme, Box, Grid, Card, CardContent, CardMedia, Typography, Button, IconButton, Dialog, DialogTitle, DialogContent,
  DialogActions, FormControl, InputLabel, Select, MenuItem, Paper, Container, Divider, Chip
} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import InfoIcon from '@mui/icons-material/Info';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '@fontsource/roboto';
import { getEmployeesThunk } from "../redux/slices/getEmployeesThunk";

export const NewOrder = () => {
  const products = useSelector(state => state.Products.productsList);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const CID = useSelector(state => state.customer.CID);
  const employees = useSelector(state => state.Employees.employees);

  const [myOrders, setMyOrders] = useState([]);
  const [employee, setEmployee] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [listEmps, setListEmps] = useState(false);

  // Custom theme with RTL support
  const theme = createTheme({
    direction: 'rtl',
    typography: {
      fontFamily: [
        'Roboto',
        '"Segoe UI Symbol"',
      ].join(','),
    },
    palette: {
      primary: {
        main: '#1976d2',
      },
      secondary: {
        main: '#f50057',
      },
      background: {
        default: '#f5f5f5',
      },
    },
  });

  useEffect(() => {
    dispatch(getProductsThunk());
  }, [dispatch]);

  useEffect(() => {
    if (products.length > 0) {
      const initialOrders = products.map(p => ({
        prodId: p.prodId,
        prodName: p.pname,
        prodPic: p.ppicture,
        orderId: 0,
        count: 0,
        cost: 0
      }));
      setMyOrders(initialOrders);
    }
  }, [products]);

  // useEffect(() => {
  //   // Calculate order total whenever orders change
  //   const total = myOrders.reduce((sum, item) => {
  //     const product = products.find(p => p.prodId === item.prodId);
  //     return sum + (item.count * (product?.pprice || 0));
  //   }, 0);
  //   setOrderTotal(total);
  // }, [myOrders, products]);

  const getEmps = () => {
    dispatch(getEmployeesThunk());
    console.log(employees);
    setListEmps(true);
  }
useEffect(()=>{

},[listEmps])

  const handleQuantityChange = (prodId, change) => {
    setListEmps(true);
    getEmps();
    console.log("handleQuantityChange");
    setMyOrders(prevOrders =>
      prevOrders.map(order => {
        if (order.prodId === prodId) {
          const newCount = Math.max(0, order.count + change);
          return { ...order, count: newCount };
        }
        return order;
      })
    );
  };

  const handleOpenDetails = (product) => {
    setSelectedProduct(product);
    setOpenDialog(true);
  };

  const handleCloseDetails = () => {
    setOpenDialog(false);
  };

  const handleEmployeeChange = (event) => {
    setListEmps(true);
    setEmployee(event.target.value);
  };

  const handleFinishOrder = () => {
    const orderItems = myOrders.filter(item => item.count > 0);
console.log("handleFinishOrder");
    if (orderItems.length > 0) {
      dispatch(addOrderThunk({
        details: orderItems,
        id: CID,
        employeeId: employee
      }));
      navigate("/Home");
    } else {
      alert("לא נקלטה הזמנה");
    }
  };
  // הוסף פונקציה זו לקומפוננטה שלך
  const handleImageError = (event) => {
    event.target.src = 'https://placehold.co/300x180/cccccc/333333?text=No+Image';
  };

 


  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 8 }}>
        <Paper elevation={3} sx={{ p: 3, mb: 4, borderRadius: 2 }}>
          <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
            הזמנה חדשה
          </Typography>
          <Divider sx={{ mb: 4 }}>
            <Chip label="בחר מוצרים" color="primary" />
          </Divider>

          <Grid container spacing={3}>
            {products.map((product) => {
              const orderItem = myOrders.find(item => item.prodId === product.prodId) || { count: 0 };

              return (
               
                <Grid item xs={12} sm={6} md={3} key={product.prodId}> 
                  <Card
                    elevation={4}
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'scale(1.02)',
                      },
                      borderRadius: 2,
                      overflow: 'hidden'
                    }}
                  >
                    <CardMedia
                      component="img"
                      height={180}
                      image={product.ppicture}
                      alt={product.pname}
                      onError={handleImageError}
                      sx={{
                        objectFit: 'cover',
                        objectPosition: 'center',
                      }}
                    />
                    {/* <Box 
                        sx={{ 
                          position: 'absolute', 
                          bottom: 0, 
                          width: '100%', 
                          background: 'rgba(0,0,0,0.6)',
                          p: 1
                        }}
                      >
                        <Typography variant="h6" component="div" sx={{ color: 'teal', fontWeight: 'bold' }}>
                          {product.pname}
                        </Typography>
                      </Box> */}


                    <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                 
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            
                                    <IconButton color="primary"
                          onClick={() => handleQuantityChange(product.prodId, 1)}
                        // sx={{ '&:hover': { backgroundColor: 'rgba(25, 118, 210, 0.04)' } }}
                        >
                          <AddIcon />
                        </IconButton>


                        <Typography variant="h6" sx={{ mx: 2, minWidth: '30px', textAlign: 'center' }}>
                          {orderItem.count}
                        </Typography>

                        <IconButton
                          color="primary"
                          onClick={() => handleQuantityChange(product.prodId, -1)}
                          disabled={orderItem.count <= 0}
                        // sx={{ '&:hover': { backgroundColor: 'rgba(25, 118, 210, 0.04)' } }}
                        >
                          <RemoveIcon />
                        </IconButton>

                      </Box>

                      <Button
                        variant="outlined"
                        startIcon={<InfoIcon />}
                        onClick={() => handleOpenDetails(product)}
                        fullWidth
                        sx={{ mt: 'auto' }}
                      >
                        פרטים נוספים
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Paper>

        {/* Order Summary and Checkout Section */}
        <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
          <Typography variant="h5" gutterBottom align="center" sx={{ fontWeight: 'bold', mb: 3 }}>
            סיום הזמנה
          </Typography>

          <Box onClick={(e)=>setListEmps(true)} sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', justifyContent: 'space-between', mb: 2.5 }}>
            <FormControl sx={{ m: 1, minWidth: " 250px"}} onClick={(e)=>setListEmps(true)}>
              <InputLabel id="employee-select-label" >בחר עובד לטיפול בהזמנה</InputLabel>
              <Select
                labelId="employee-select-label"
                id="employee-select"
                value={employee}
                label="בחר עובד לטיפול בהזמנה"
                onChange={handleEmployeeChange}
                // sx={{font:"blueviolet"}}-----------------------------------------------------------------------------------------------
              >
                {employees?.map((emp) => (
                  <MenuItem key={emp.ename} value={emp.ename}>
                    {emp.ename}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <Box sx={{ display: 'flex', alignItems: 'center', mt: { xs: 2, sm: 0 } }}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<ShoppingCartIcon />}
                onClick={handleFinishOrder}
                disabled={myOrders.every(item => item.count === 0) }
                sx={{
                  px:2,
                  py: 3,
                  borderRadius: 2,
                  background: 'linear-gradient(45deg, #1976d2 30%, #42a5f5 90%)',
                  boxShadow: '0 3px 5px 2px rgba(33, 150, 243, .3)',
                  // color:"Highlight"-----------------------------------------------------------------------why this line isn't working
                }}
              >
                סיים הזמנה
              </Button>
            </Box>
          </Box>
        </Paper>
      </Container>

      {/* Product Details Dialog */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDetails}
        maxWidth="md"
        fullWidth
      >
        {selectedProduct && (
          <>
            <DialogTitle sx={{ fontWeight: 'bold', bgcolor: 'primary.main', color: 'white' }}>
              {selectedProduct.pname}
            </DialogTitle>
            <DialogContent dividers>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Box
                    component="img"
                    src={selectedProduct.ppicture
                      // && selectedProduct.ppicture.length > 6 
                      // ? selectedProduct.ppicture 
                      // : 'https://via.placeholder.com/400x300?text=No+Image'
                    }
                    alt={selectedProduct.pname}
                    sx={{
                      width: '100%',
                      borderRadius: 1,
                      maxHeight: 300,
                      objectFit: 'cover'
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="h6" gutterBottom>פרטי המוצר</Typography>
                  <Typography variant="body1" paragraph>
                    <strong>תיאור:</strong> {selectedProduct.pdescription}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    <strong>חברה:</strong> {selectedProduct.pcompany}
                  </Typography>

                  {/* Add more product details as needed */}
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDetails} color="primary">
                סגור
              </Button>
              <Button
                onClick={() => {
                  const orderItem = myOrders.find(item => item.prodId === selectedProduct.prodId);
                  handleQuantityChange(selectedProduct.prodId, 1);
                  handleCloseDetails();
                }}
                color="primary"
                variant="contained"
              >
                הוסף להזמנה
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </ThemeProvider>
  );
};


