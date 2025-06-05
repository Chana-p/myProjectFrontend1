// import * as React from 'react';
// import PropTypes from 'prop-types';
// import { styled, useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableFooter from '@mui/material/TableFooter';
// import TablePagination from '@mui/material/TablePagination';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import IconButton from '@mui/material/IconButton';
// import FirstPageIcon from '@mui/icons-material/FirstPage';
// import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
// import LastPageIcon from '@mui/icons-material/LastPage';
// import ButtonBase from '@mui/material/ButtonBase';
// import Typography from '@mui/material/Typography';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { getAllCustomersThunk } from '../redux/slices/getAllCustomersThunk';
// import { TableHead } from '@mui/material';
// import { editCID } from '../redux/slices/userSlice';
// import { useNavigate } from 'react-router-dom';
// export const ManageCustomers = () => {
//   const orders = useSelector(state => state.Orders.myOrders);

//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getAllCustomersThunk());
//   }, [])
 
//   //עבור כפתור תמונה...
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
//         // border: '4px solid currentColor',
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

//   function TablePaginationActions(props) {
//     const theme = useTheme();
//     const { count, page, rowsPerPage, onPageChange } = props;

//     const handleFirstPageButtonClick = (event) => {
//       onPageChange(event, 0);
//     };

//     const handleBackButtonClick = (event) => {
//       onPageChange(event, page - 1);
//     };

//     const handleNextButtonClick = (event) => {
//       onPageChange(event, page + 1);
//     };

//     const handleLastPageButtonClick = (event) => {
//       onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
//     };

//     return (
//       <Box sx={{ flexShrink: 0, ml: 2.5 }}>
//         <IconButton
//           onClick={handleFirstPageButtonClick}
//           disabled={page === 0}
//           aria-label="first page"
//         >
//           {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
//         </IconButton>
//         <IconButton
//           onClick={handleBackButtonClick}
//           disabled={page === 0}
//           aria-label="previous page"
//         >
//           {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
//         </IconButton>
//         <IconButton
//           onClick={handleNextButtonClick}
//           disabled={page >= Math.ceil(count / rowsPerPage) - 1}
//           aria-label="next page"
//         >
//           {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
//         </IconButton>
//         <IconButton
//           onClick={handleLastPageButtonClick}
//           disabled={page >= Math.ceil(count / rowsPerPage) - 1}
//           aria-label="last page"
//         >
//           {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
//         </IconButton>
//       </Box>
//     );
//   }

//   TablePaginationActions.propTypes = {
//     count: PropTypes.number.isRequired,
//     onPageChange: PropTypes.func.isRequired,
//     page: PropTypes.number.isRequired,
//     rowsPerPage: PropTypes.number.isRequired,
//   };


//   const rows = useSelector(state => state.user.custList);

//   // function CustomPaginationActionsTable() {}
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(5);

//   // Avoid a layout jump when reaching the last page with empty rows.
//   const emptyRows =
//     page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };
//   const navigate = useNavigate();
//   const goToOrdersList = (index) => {
//     dispatch(editCID(index));
//     navigate('custOrderList');
//   }
//   return <div>
//     <h1 style={{ fontSize: "70px" }}>wellcome manager</h1>
//     <h2 style={{ fontSize: "70px" }}>employeeList</h2>
//     <TableContainer component={Paper} sx={{ overflow: "hidden" }}>
//       <Table sx={{ minWidth: 500, overflow: "hidden", maxWidth: 1500 }} aria-label="custom pagination table">
//         <TableHead>
//           <TableRow >
//             <TableCell style={{ width: 160 }} align="right">
//               Name
//             </TableCell>
//             <TableCell component="th" scope="row">
//               ID
//             </TableCell>
//             <TableCell style={{ width: 160 }} align="right">
//               Number
//             </TableCell>
//             <TableCell style={{ width: 160 }} align="right">
//               Address
//             </TableCell>
//             <TableCell style={{ width: 160 }} align="right">
//               Email
//             </TableCell>
//             <TableCell style={{ width: 160 }} align="right">
//               Phone
//             </TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {(rowsPerPage > 0
//             ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//             : rows
//           ).map((row, index) => (
//             <TableRow key={row.custName}>
//               <TableCell component="th" style={{ width: "13%" }} align="right">
//                 {row.custName}
//               </TableCell>
//               <TableCell style={{ width: "13%" }} scope="row">
//                 {row.custId}
//               </TableCell>
//               <TableCell style={{ width: "13%" }} align="right">
//                 {row.custNum}
//               </TableCell>

//               <TableCell style={{ width: "13%" }} align="right">
//                 {row.custAddress}
//               </TableCell>
//               <TableCell style={{ width: "13%" }} align="right">
//                 {row.custEmail}
//               </TableCell>
//               <TableCell style={{ width: "13%" }} align="right">
//                 {row.custPhone}
//               </TableCell>
//               <TableCell align="right">
//                 {/* {hasOrders[index]!==-1 &&
//                 <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper',fontFamily:"cursive",fontSize:"large" }}>
//                 { orders[hasOrders[index]]?.map(o => 
//                  <ListItem> <ListItemAvatar> <Avatar>  {o.prodPic} </Avatar> </ListItemAvatar>
//                   <ListItemText primary={o.prodName} secondary={o.count} />
//                 </ListItem> )  } </List>}
//                 {hasOrders[index]===-1 &&  */}
//                 <>
//                   <ImageButton focusRipple style={{ width: "100%", fontFamily: "cursive" }} onClick={() => goToOrdersList(row.custId)} >
//                     <ImageSrc style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/pppp.jpg"})`, width: "100%" }} />
//                     <ImageBackdrop className="MuiImageBackdrop-root" />
//                     <Image> <Typography component="span" variant="subtitle1" color="inherit" sx={(theme) => ({
//                       fontFamily: "cursive",
//                       position: 'relative', p: 4, pt: 2, pb: `calc(${theme.spacing(1)} + 6px)`,
//                     })}>
//                       to see your orders
//                       <ImageMarked className="MuiImageMarked-root" />
//                     </Typography>  </Image> </ImageButton>  </>
//               </TableCell>
//             </TableRow>
//           ))}
//           {emptyRows > 0 && (
//             <TableRow style={{ height: 53 * emptyRows }}>
//               <TableCell colSpan={6} />
//             </TableRow>
//           )}
//         </TableBody>
//         <TableFooter>
//           <TableRow>
//             <TablePagination
//               rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
//               colSpan={3}
//               count={rows.length}
//               rowsPerPage={rowsPerPage}
//               page={page}
//               slotProps={{
//                 select: {
//                   inputProps: {
//                     'aria-label': 'rows per page',
//                   },
//                   native: true,
//                 },
//               }}
//               onPageChange={handleChangePage}
//               onRowsPerPageChange={handleChangeRowsPerPage}
//               ActionsComponent={TablePaginationActions}
//               style={{ overflow: "hidden" }}
//             />
//           </TableRow>
//         </TableFooter>
//       </Table>
//     </TableContainer>
//   </div>



// }
import * as React from 'react';
import PropTypes from 'prop-types';
import { styled, useTheme } from '@mui/material/styles';
import { 
  Box, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableFooter, 
  TablePagination, 
  TableRow, 
  Paper, 
  IconButton, 
  Typography, 
  TableHead,
  Container,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  Chip
} from '@mui/material';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAllCustomersThunk } from '../redux/slices/getAllCustomersThunk';
import { editCID } from '../redux/slices/userSlice';
import { useNavigate } from 'react-router-dom';

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

export const ManageCustomers = () => {
  const orders = useSelector(state => state.Orders.myOrders);
  const rows = useSelector(state => state.user.custList);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(getAllCustomersThunk());
  }, [dispatch]);

  // סינון לקוחות לפי חיפוש
  const filteredRows = rows.filter(row => 
    row.custName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    row.custEmail?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    row.custPhone?.includes(searchTerm) ||
    row.custId?.toString().includes(searchTerm)
  );

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - filteredRows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const goToOrdersList = (index) => {
    dispatch(editCID(index));
    navigate('custOrderList');
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <IconButton 
          onClick={() => navigate(-1)} 
          sx={{ mr: 2, bgcolor: 'rgba(0, 0, 0, 0.04)', '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.08)' } }}
        >
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', flexGrow: 1 }}>
          ניהול לקוחות
        </Typography>
      </Box>

      <Card sx={{ mb: 4, borderRadius: 2, overflow: 'hidden' }}>
        <CardContent sx={{ p: 3 }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="חיפוש לקוחות לפי שם, אימייל, טלפון או מזהה..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            sx={{ mb: 3 }}
          />

          <TableContainer component={Paper} sx={{ boxShadow: 'none', borderRadius: 2 }}>
            <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
              <TableHead>
                <TableRow sx={{ bgcolor: 'rgba(0, 0, 0, 0.04)' }}>
                  <TableCell sx={{ fontWeight: 'bold' }}>שם</TableCell>
                 <TableCell sx={{ fontWeight: 'bold' }}>מספר</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>כתובת</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>אימייל</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>טלפון</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>הזמנות</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {(rowsPerPage > 0
                  ? filteredRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  : filteredRows
                ).map((row) => (
                  <TableRow 
                    key={row.custId} 
                    hover 
                    sx={{ 
                      '&:hover': { 
                        backgroundColor: 'rgba(0, 0, 0, 0.04)',
                        cursor: 'pointer'
                      } 
                    }}
                  >
                    <TableCell sx={{ fontWeight: 'medium' }}>{row.custName}</TableCell>
                    <TableCell>{row.custId}</TableCell>
                    <TableCell>{row.custAddress}</TableCell>
                    <TableCell>{row.custEmail}</TableCell>
                    <TableCell>{row.custPhone}</TableCell>
                    <TableCell>
                      <Chip
                        icon={<ShoppingCartIcon />}
                        label="צפייה בהזמנות"
                        onClick={() => goToOrdersList(row.custId)}
                        color="primary"
                        variant="outlined"
                        sx={{ 
                          cursor: 'pointer',
                          transition: 'all 0.2s',
                          '&:hover': {
                            backgroundColor: 'primary.main',
                            color: 'white',
                            '& .MuiChip-icon': {
                              color: 'white'
                            }
                          }
                        }}
                      />
                    </TableCell>
                  </TableRow>
                ))}
                {emptyRows > 0 && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={7} />
                  </TableRow>
                )}
                {filteredRows.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={7} align="center" sx={{ py: 3 }}>
                      <Typography variant="body1" color="text.secondary">
                        {searchTerm ? 'לא נמצאו לקוחות התואמים את החיפוש' : 'אין לקוחות להצגה'}
                      </Typography>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={[5, 10, 25, { label: 'הכל', value: -1 }]}
                    colSpan={7}
                    count={filteredRows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    slotProps={{
                      select: {
                        inputProps: {
                          'aria-label': 'rows per page',
                        },
                        native: true,
                      },
                    }}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    ActionsComponent={TablePaginationActions}
                    labelRowsPerPage="שורות בעמוד:"
                    labelDisplayedRows={({ from, to, count }) => `${from}-${to} מתוך ${count}`}
                  />
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ManageCustomers;

