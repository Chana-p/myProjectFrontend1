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
// import { getAllemployeesThunk } from '../redux/slices/getAllEmployeesThunk';
// export const ManageEmployees = () => {
//   const orders = useSelector(state => state.Orders.myOrders);

//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getAllemployeesThunk());
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


//   const rows = useSelector(state => state.user.empList);

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
//     <h2 style={{ fontSize: "70px" }}>employeesList</h2>
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
//                 {row.ename}
//               </TableCell>
//               <TableCell style={{ width: "13%" }} scope="row">
//                 {row.empId}
//               </TableCell>
//               <TableCell style={{ width: "13%" }} align="right">
//                 {row.empNum}
//               </TableCell>
//               <TableCell style={{ width: "13%" }} align="right">
//                 {row.egmail}
//               </TableCell>
//               <TableCell style={{ width: "13%" }} align="right">
//                 {row.ephone}
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
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllCustomersThunk } from '../redux/slices/getAllCustomersThunk';
import { TableHead, Avatar, Button, Card, Container, Grid, Divider } from '@mui/material';
import { editCID } from '../redux/slices/userSlice';
import { useNavigate } from 'react-router-dom';
import { getAllemployeesThunk } from '../redux/slices/getAllEmployeesThunk';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PersonIcon from '@mui/icons-material/Person';
import { 
  Dialog, 
  DialogActions, 
  DialogContent, 
  DialogTitle, 
  TextField, 
  Fab 
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { addEmployeeThunk } from '../redux/slices/addEmployeeThunk';
// Styled components
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:hover': {
    backgroundColor: theme.palette.action.selected,
    transition: 'background-color 0.2s ease',
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const ViewOrdersButton = styled(Button)(({ theme }) => ({
  height: '100%',
  margin: theme.spacing(1),
  backgroundColor: '#1976d2', // צבע כחול במקום סגול
  color: theme.palette.common.white,
  '&:hover': {
    backgroundColor: '#1565c0', // כחול כהה יותר בהובר
  },
  borderRadius: 20,
  boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .1)',
  padding: '10px 20px', // פדינג גדול יותר
  fontSize: '1rem', // גודל טקסט גדול יותר
  minWidth: '150px', // רוחב מינימלי גדול יותר
  fontWeight: 'bold', // טקסט מודגש
}));

const PageTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(4),
  fontWeight: 'bold',
  textAlign: 'center',
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    bottom: -10,
    left: '50%',
    transform: 'translateX(-50%)',
    width: 100,
    height: 4,
    backgroundColor: theme.palette.secondary.main,
    borderRadius: 2,
  }
}));

const EmployeeAvatar = styled(Avatar)(({ theme }) => ({
  width: 40,
  height: 40,
  backgroundColor: theme.palette.primary.main,
  marginRight: theme.spacing(2),
}));

export const ManageEmployees = () => {
  const orders = useSelector(state => state.Orders.myOrders);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  useEffect(() => {
    dispatch(getAllemployeesThunk());
  }, [dispatch]);

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

  const rows = useSelector(state => state.user.empList);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

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
  }
//הוספת עובד
// בתוך הקומפוננטה ManageEmployees, לפני ה-return
const [openDialog, setOpenDialog] = React.useState(false);
const [newEmployee, setNewEmployee] = React.useState({
  ename: '',
  empId:0,
  empNum: '',
  egmail: '',
  ephone: ''
});

const handleOpenDialog = () => {
  setOpenDialog(true);
};

const handleCloseDialog = () => {
  setOpenDialog(false);
  // איפוס הטופס
  setNewEmployee({
    ename: '',
    empId: 0,
    empNum: '',
    egmail: '',
    ephone: ''
  });
};

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setNewEmployee({
    ...newEmployee,
    [name]: value
  });
};

const handleAddEmployee = () => {
  // כאן תוסיף את הלוגיקה לשמירת העובד החדש
  console.log('Adding new employee:', newEmployee);
  
  dispatch(addEmployeeThunk(newEmployee));
  
  handleCloseDialog();
};
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Card elevation={5} sx={{ p: 3, borderRadius: 2 }}>
        <PageTitle variant="h3" gutterBottom>
          ניהול עובדים
        </PageTitle>
        
        <Divider sx={{ mb: 4 }} />
       
<Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
  {/* <Fab 
  size='Medium'
    color="primary" 
    aria-label="add employee" 
    onClick={handleOpenDialog}
    sx={{ 
      backgroundColor: '#1976d2',
      '&:hover': {
        backgroundColor: '#1565c0',
      }
    }}
  >
    <AddIcon />הוספת עובד חדש
  </Fab> */}
  {/* <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
  <Button
    variant="contained"
    startIcon={<AddIcon />}
    onClick={handleOpenDialog}
    sx={{ 
      backgroundColor: '#1976d2',
      '&:hover': {
        backgroundColor: '#1565c0',
      },
      borderRadius: 20,
      padding: '10px 24px',
      fontSize: '1rem',
      fontWeight: 'bold',
      boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .1)',
      textTransform: 'none', // ביטול הפיכה לאותיות גדולות
      letterSpacing: '0.5px',
    }}
  >
    הוסף עובד חדש
  </Button>
</Box> */}
<Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
  <Button
    variant="contained"
    color="primary"
    onClick={handleOpenDialog}
    sx={{ 
      backgroundColor: '#1976d2',
      '&:hover': {
        backgroundColor: '#1565c0',
      },
      borderRadius: 28,
      padding: '12px 24px',
      fontSize: '0.6rem',
      fontWeight: 'bold',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      textTransform: 'none',
      display: 'flex',
      gap: '8px',
      alignItems: 'center'
    }}
  >
    <AddIcon />
    הוסף עובד חדש
  </Button>
</Box>

</Box>

{/* דיאלוג להוספת עובד חדש */}
<Dialog open={openDialog} onClose={handleCloseDialog} dir="rtl">
  <DialogTitle sx={{ fontWeight: 'bold', textAlign: 'center' }}>
    הוספת עובד חדש
  </DialogTitle>
  <DialogContent>
    <TextField
      autoFocus
      margin="dense"
      name="ename"
      label="שם העובד"
      type="text"
      fullWidth
      variant="outlined"
      value={newEmployee.ename}
      onChange={handleInputChange}
      sx={{ mb: 2, mt: 1 }}
    />
    <TextField
      margin="dense"
      name="empId"
      label="מספר זהות"
      type="text"
      fullWidth
      variant="outlined"
      value={newEmployee.empId}
      onChange={handleInputChange}
      sx={{ mb: 2 }}
    />
    <TextField
      margin="dense"
      name="empNum"
      label="מספר עובד"
      type="text"
      fullWidth
      variant="outlined"
      value={newEmployee.empNum}
      onChange={handleInputChange}
      sx={{ mb: 2 }}
    />
    <TextField
      margin="dense"
      name="egmail"
      label="דוא״ל"
      type="email"
      fullWidth
      variant="outlined"
      value={newEmployee.egmail}
      onChange={handleInputChange}
      sx={{ mb: 2 }}
    />
    <TextField
      margin="dense"
      name="ephone"
      label="טלפון"
      type="tel"
      fullWidth
      variant="outlined"
      value={newEmployee.ephone}
      onChange={handleInputChange}
    />
  </DialogContent>
  <DialogActions sx={{ px: 3, pb: 2 }}>
    <Button onClick={handleCloseDialog} color="error" variant="outlined">
      ביטול
    </Button>
    <Button 
      onClick={handleAddEmployee} 
      variant="contained" 
      sx={{ 
        backgroundColor: '#1976d2',
        '&:hover': {
          backgroundColor: '#1565c0',
        }
      }}
    >
      הוסף עובד
    </Button>
  </DialogActions>
</Dialog>

        <TableContainer component={Paper} sx={{ borderRadius: 2, boxShadow: 3 }}>
          <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="right">שם העובד</StyledTableCell>
                <StyledTableCell align="right">מספר זהות</StyledTableCell>
                <StyledTableCell align="right">מספר עובד</StyledTableCell>
                <StyledTableCell align="right">דוא"ל</StyledTableCell>
                <StyledTableCell align="right">טלפון</StyledTableCell>
                <StyledTableCell align="center">פעולות</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : rows
              ).map((row, index) => (
                <StyledTableRow key={row.empId || index}>
                  <StyledTableCell align="right" sx={{ display: 'flex', alignItems: 'center' }}>
                    <EmployeeAvatar>
                      <PersonIcon />
                    </EmployeeAvatar>
                    {row.ename}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.empId}</StyledTableCell>
                  <StyledTableCell align="right">{row.empNum}</StyledTableCell>
                  <StyledTableCell align="right">{row.egmail}</StyledTableCell>
                  <StyledTableCell align="right">{row.ephone}</StyledTableCell>
                  <StyledTableCell align="center">
                    <ViewOrdersButton
                      variant="contained"
                      startIcon={<VisibilityIcon />}
                      onClick={() => goToOrdersList(row.custId)}
                    >
                      צפה בהזמנות
                    </ViewOrdersButton>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
              
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: 'הכל', value: -1 }]}
                  colSpan={6}
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: { 'aria-label': 'שורות בעמוד' },
                    native: true,
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
      </Card>
    </Container>
  );
};

