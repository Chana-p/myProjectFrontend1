
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import {
  Container,
  Typography,
  Paper,
  Grid,
  Box,
  Card,
  CardContent,
  CardActions,
  Button,
  Divider,
  Chip,
  Avatar,
  CircularProgress,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
  Tab
} from '@mui/material';
import HistoryIcon from '@mui/icons-material/History';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ReceiptIcon from '@mui/icons-material/Receipt';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { getOrdersThunk } from '../redux/slices/getOrdersThunk';
import { useNavigate } from 'react-router-dom';
import { getOrderDetailsThunk } from '../redux/slices/getOrderDetailsThunk';

// סטיילים מותאמים אישית
const PageHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(4),
  '& svg': {
    fontSize: 40,
    marginRight: theme.spacing(2),
    color: '#1976d2',
  }
}));

const OrderCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  transition: 'transform 0.2s ease-in-out',
  borderRadius: '12px',
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-5px)',
  }
}));

const OrderHeader = styled(CardContent)(({ theme }) => ({
  backgroundColor: 'rgba(25, 118, 210, 0.05)',
  padding: theme.spacing(2),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

const OrderStatus = styled(Chip)(({ theme, sent }) => ({
  color: sent ? '#2196f3' : '#ff9800', // כחול אם נשלח, כתום אם לא
  backgroundColor: sent ? 'rgba(33, 150, 243, 0.1)' : 'rgba(255, 152, 0, 0.1)',
  fontWeight: 'bold',
  border: sent ? '1px solid #2196f3' : '1px solid #ff9800',
  '& .MuiChip-icon': {
    color: sent ? '#2196f3' : '#ff9800',
  }
}));

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const ProductImage = styled('img')({
  width: 60,
  height: 60,
  objectFit: 'cover',
  borderRadius: '8px',
  border: '1px solid #e0e0e0',
});

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontWeight: 'bold',
  padding: theme.spacing(1.5),
  borderBottom: '1px solid rgba(224, 224, 224, 0.5)',
}));


const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: 'rgba(0, 0, 0, 0.02)',
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
  '&:hover': {
    backgroundColor: 'rgba(25, 118, 210, 0.05)',
  },
}));

// קומפוננטה ראשית
const OldOrders = () => {

  const orders = useSelector(state => state.Orders.myOrders);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState({});
  const [tabValue, setTabValue] = useState(0);
  const dispatch = useDispatch();
  // מידע המשתמש מ-Redux
  const userId = useSelector(state => state.user?.CID);
  const navigate = useNavigate();
  useEffect(() => {
    // כאן תהיה קריאה לשרת להביא את ההזמנות של המשתמש
    const fetchOrders = async () => {
      try {
        dispatch(getOrdersThunk(userId));
        // אתחול מצב ההרחבה של כל הזמנה
        const expandedState = {};
        orders.forEach(order => {
          expandedState[order.orderId] = false;
        });
        setExpanded(expandedState);
        setLoading(false);
      } catch (error) {
        console.error('שגיאה בטעינת ההזמנות:', error);
        setLoading(false);
      }
    };

    fetchOrders();
  }, [userId]);
//יבוא פרטי הזמנה
  const details = useSelector(state => state.Orders.orderDetail);
  const [hasDetails, setHasDetails] = useState([]);
  // Initialize hasDetails array
  useEffect(() => {
    if (orders.length > 0 && details.length === 0) {
      const arr = Array(orders.length).fill(-1);
      setHasDetails(arr);
    }
  }, [orders]);
  //   // Update details state when details change
  useEffect(() => {
    if (details[0]) {
      const updated = Array(hasDetails.length).fill(-1);

      details.forEach((d, ind) => {
        const orderId = d[0].orderId;
        orders.forEach((e, index) => {
          if (e.orderId === orderId) {
            updated[index] = ind;
          }
        });
      });

      setHasDetails(updated);
    }
  }, [details]);
  useEffect(() => {
    // הגדר טיימאאוט לתמונות שלא נטענות
    const imageElements = document.querySelectorAll('.product-image');
    imageElements.forEach(img => {
      const timeout = setTimeout(() => {
        if (!img.complete || img.naturalHeight === 0) {
          img.src = `${process.env.PUBLIC_URL}/pppp.jpg`;
        }
      }, 5000); // 5 שניות טיימאאוט

      return () => clearTimeout(timeout);
    });
  }, [details, hasDetails]);
  //פרטי כל ההזמנות מהשרת 
  const allOrdersDetails = useSelector(state => state.Orders.allOrderDetail);
  const [myOrdersDetails, setMyOrdersDetails] = useState([]);

  const handleExpandClick = (orderId) => {
    setExpanded({
      ...expanded,
      [orderId]: !expanded[orderId]
    });
    fetchDetails(orderId);
  };

  const fetchDetails = (ordId) => {
    dispatch(getOrderDetailsThunk(ordId));
  }
  
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const getStatusIcon = (sent) => {
    if (sent)
      return <CheckCircleIcon />;
    else
      return <LocalShippingIcon />;
  };

  const getStatusText = (sent) => {
    if (sent)
      return 'הושלמה';
    else
      return 'בטיפול';
  };

  const filterOrders = () => {
    if (tabValue === 0) return orders; // כל ההזמנות
    if (tabValue === 1) return orders.filter(order => order.sent); // הזמנות שהושלמו
    if (tabValue === 2) return orders.filter(order => !order.sent); // הזמנות פעילות
    return orders;
  };

  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4, textAlign: 'center', py: 8 }}>
        <CircularProgress size={60} />
        <Typography variant="h6" sx={{ mt: 2 }}>
          טוען את ההזמנות שלך...
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <PageHeader>
        <HistoryIcon />
        <Typography variant="h4" component="h1" fontWeight="bold">
          ההזמנות שלי
        </Typography>
      </PageHeader>

      <Paper sx={{ mb: 4, borderRadius: '12px', overflow: 'hidden' }}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          variant="fullWidth"
          textColor="primary"
          indicatorColor="primary"
          aria-label="סינון הזמנות"
        >
          <Tab icon={<ShoppingCartIcon />} label="כל ההזמנות" />
          <Tab icon={<CheckCircleIcon />} label="הזמנות שהושלמו" />
          <Tab icon={<LocalShippingIcon />} label="הזמנות פעילות" />
        </Tabs>
      </Paper>

      {filterOrders()?.length === 0 ? (
        <Paper sx={{ p: 4, textAlign: 'center', borderRadius: '12px' }}>
          <Typography variant="h6" color="textSecondary">
            לא נמצאו הזמנות
          </Typography>
          <Typography variant="body1" color="textSecondary" sx={{ mt: 1 }}>
            לא נמצאו הזמנות התואמות את הסינון הנוכחי
          </Typography>
          <Button
            variant="contained"
            color="primary"
            startIcon={<ShoppingCartIcon />}
            sx={{ mt: 3 }}
            onClick={() => setTabValue(0)}
          >
            הצג את כל ההזמנות
          </Button>
        </Paper>
      ) : (
        filterOrders()?.map((order) => (
          <OrderCard key={order.orderId}>
            <OrderHeader>
              <Box>
                <Typography variant="h6" fontWeight="bold">
                  הזמנה מס' {order.orderId}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  תאריך: {new Date(order.orderDate).toLocaleDateString('he-IL')}
                </Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <OrderStatus
                  label={getStatusText(order.sent)}
                  status={order.sent}
                  icon={getStatusIcon(order.sent)}
                />
              </Box>
            </OrderHeader>

            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Typography variant="body2" color="textSecondary">
                    מספר פריטים: {/*{order.items?.length} */}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} sx={{ textAlign: { xs: 'left', sm: 'right' } }}>
                  <Typography variant="h6" fontWeight="bold">
                    סה"כ: ₪{/*{order.totalAmount.toFixed(2)} */}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>

            <Divider />

            <CardActions disableSpacing>
              <Button
                size="small"
                startIcon={<ReceiptIcon />}
                sx={{ mr: 1 }}
              >
                צפה בחשבונית
              </Button>
              <Button
                size="small"
                disabled={order.sent}
              >
                מעקב הזמנה
              </Button>
              <ExpandMore
                expand={expanded[order.orderId]}
                onClick={() => handleExpandClick(order.orderId)}
                aria-expanded={expanded[order.orderId]}
                aria-label="הצג פרטים נוספים"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>

            <Collapse in={expanded[order.orderId]} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  פירוט מוצרים
                </Typography>
                <TableContainer component={Paper} elevation={0} variant="outlined">
                  <Table aria-label="פירוט הזמנה">
                    <TableHead>
                      <TableRow>
                        <StyledTableCell>מוצר</StyledTableCell>
                        <StyledTableCell>תיאור</StyledTableCell>
                        <StyledTableCell align="center">כמות</StyledTableCell>
                        <StyledTableCell align="right">מחיר ליחידה</StyledTableCell>
                        <StyledTableCell align="right">סה"כ</StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {order.items?.map((item) => (
                        <StyledTableRow key={item.prodId}>
                          <TableCell>
                            <Box display="flex" alignItems="center">
                              <ProductImage
                                src={item.ppicture || '/images/placeholder.jpg'}
                                alt={item.prodName}
                                onError={(e) => {
                                  e.target.src = '/images/placeholder.jpg';
                                }}
                              />
                            </Box>
                          </TableCell>
                          <TableCell>
                            <Typography variant="subtitle2" fontWeight="bold">
                              {item.prodName}
                            </Typography>
                          </TableCell>
                          <TableCell align="center">
                            <Chip
                              label={item.sum}
                              size="small"
                              sx={{
                                fontWeight: 'bold',
                                backgroundColor: 'rgba(25, 118, 210, 0.1)',
                                color: '#1976d2',
                                border: '1px solid #1976d2'
                              }}
                            />
                          </TableCell>
                          <TableCell align="right">
                            {/* ₪{item.price.toFixed(2)} */}
                          </TableCell>
                          <TableCell align="right">
                            <Typography fontWeight="bold">
                              {/* ₪{(item.price * item.quantity).toFixed(2)} */}
                            </Typography>
                          </TableCell>
                        </StyledTableRow>
                      ))}
                      <StyledTableRow>
                        <TableCell colSpan={3} />
                        <StyledTableCell align="right">
                          <Typography fontWeight="bold">סה"כ:</Typography>
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          <Typography fontWeight="bold" color="primary">
                            {/* ₪{order.totalAmount.toFixed(2)} */}
                          </Typography>
                        </StyledTableCell>
                      </StyledTableRow>
                    </TableBody>
                  </Table>
                </TableContainer>

                <Box mt={3}>
                  <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                    פרטי משלוח
                  </Typography>
                  <Paper variant="outlined" sx={{ p: 2, backgroundColor: 'rgba(0, 0, 0, 0.02)' }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="body2" color="textSecondary">
                          <strong>כתובת למשלוח:</strong>
                        </Typography>
                        <Typography variant="body2">
                          רחוב הרצל 123, תל אביב
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="body2" color="textSecondary">
                          <strong>אמצעי תשלום:</strong>
                        </Typography>
                        <Typography variant="body2">
                          כרטיס אשראי (מסתיים ב-1234)
                        </Typography>
                      </Grid>
                      {order.sent === 0 && (
                        <Grid item xs={12}>
                          <Box mt={1} p={1.5} bgcolor="rgba(33, 150, 243, 0.1)" borderRadius={1}>
                            <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
                              <LocalShippingIcon sx={{ mr: 1, color: '#2196f3' }} />
                              <span>ההזמנה שלך נמצאת בדרך ותגיע בתאריך {new Date(new Date(order.orderDate).getTime() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString('he-IL')}</span>
                            </Typography>
                          </Box>
                        </Grid>
                      )}
                    </Grid>
                  </Paper>
                </Box>

                <Box mt={3} display="flex" justifyContent="flex-end">
                  <Button
                    variant="outlined"
                    color="primary"
                    startIcon={<ReceiptIcon />}
                  >
                    הורד חשבונית
                  </Button>
                  {/* {order.status === 'pending' && (
                    <Button
                      variant="outlined"
                      color="error"
                      sx={{ ml: 2 }}
                    >
                      בטל הזמנה
                    </Button>
                  )} */}
                </Box>
              </CardContent>
            </Collapse>
          </OrderCard>
        ))
      )}

      {orders?.length > 0 && (
        <Box mt={4} textAlign="center">
          <Button
            variant="contained"
            color="primary"
            startIcon={<ShoppingCartIcon />}
            onClick={() => navigate('/newOrder')}
          >
            הזמנה חדשה
          </Button>
        </Box>
      )}

      {orders?.length === 0 && tabValue === 0 && (
        <Paper sx={{ p: 6, textAlign: 'center', borderRadius: '12px' }}>
          <Box mb={3}>
            <ShoppingCartIcon sx={{ fontSize: 60, color: '#9e9e9e' }} />
          </Box>
          <Typography variant="h5" gutterBottom>
            אין לך הזמנות קודמות
          </Typography>
          <Typography variant="body1" color="textSecondary" paragraph>
            נראה שעדיין לא ביצעת הזמנות במערכת שלנו.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<ShoppingCartIcon />}
            onClick={() => window.location.href = '/newOrder'}
          >
            בצע הזמנה ראשונה
          </Button>
        </Paper>
      )}
    </Container>
  );
};

export default OldOrders;

