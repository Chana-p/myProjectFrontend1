import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { getProductsThunk } from '../redux/slices/getProductsThunk';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';
import { Details } from '@mui/icons-material';
export const ManageProducts=()=>{
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProductsThunk());
       
    }, [])
    const [open, setOpen] = React.useState(false);
    const [newProduct,setNewProduct]=React.useState({
     prodId: 0,
      pname: "name",
      psum: 0,
      pimporter: "importer",
      pcompany: "company",
      ppicture: "picture",
      pdescription: "description"
    });
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    const BootstrapDialog = styled(Dialog)(({ theme }) => ({
      '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
      },
      '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
      },
    }));


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
          <Box sx={{ flexShrink: 0, ml: 2.5,overflow:"hidden",direction:"rtl" }}>
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
    
      
      const rows = useSelector(state => state.Products.productsList);
      
    // function CustomPaginationActionsTable() {}
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

    return <div>
      <h1></h1>
    <TableContainer component={Paper} sx={{ overflow:"hidden" }}>
      <Table sx={{ minWidth: 500 ,overflow:"hidden"}} aria-label="custom pagination table">
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => ( 
            <TableRow key={row.prodId}>
              <TableCell component="th" scope="row">
                {row.pname}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.pcompany}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.pdescription}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.ppicture}
              </TableCell>
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }} sx={{overflow:"hidden"}}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter >
          <TableRow >
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={rows.length}
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
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
   
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Add New Product
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>


        
   <input type="text" value={newProduct.pname} onChange={(e)=>{setNewProduct(...newProduct,newProduct.pname=e.target.value)}} />
   <input type="text" value={newProduct.pcompany} onChange={(e)=>{setNewProduct(...newProduct,newProduct.pcompany=e.target.value)}} />
   <input type="text" value={newProduct.pimporter} onChange={(e)=>{setNewProduct(...newProduct,newProduct.pimporter=e.target.value)}} />
      </BootstrapDialog>
    </React.Fragment>
    </div>



}

























// import VpnKeyIcon from '@mui/icons-material/VpnKey';
// import CarpenterIcon from '@mui/icons-material/Carpenter';
// import HandymanIcon from '@mui/icons-material/Handyman';
// import * as React from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// // import { TableVirtuoso } from 'react-virtuoso';
// // import Chance from 'chance';

// export const ManageProducts = () => {

//     // const chance = new Chance(42);

//     function createData(id) {
//       return {
//         id,
//         firstName: chance.first(),
//         lastName: chance.last(),
//         age: chance.age(),
//         phone: chance.phone(),
//         state: chance.state({ full: true }),
//       };
//     }
    
//     const columns = [
//       {
//         width: 100,
//         label: 'First Name',
//         dataKey: 'firstName',
//       },
//       {
//         width: 100,
//         label: 'Last Name',
//         dataKey: 'lastName',
//       },
//       {
//         width: 50,
//         label: 'Age',
//         dataKey: 'age',
//         numeric: true,
//       },
//       {
//         width: 110,
//         label: 'State',
//         dataKey: 'state',
//       },
//       {
//         width: 130,
//         label: 'Phone Number',
//         dataKey: 'phone',
//       },
//     ];
    
//     const rows = Array.from({ length: 200 }, (_, index) => createData(index));
    
//     const VirtuosoTableComponents = {
//       Scroller: React.forwardRef((props, ref) => (
//         <TableContainer component={Paper} {...props} ref={ref} />
//       )),
//       Table: (props) => (
//         <Table {...props} sx={{ borderCollapse: 'separate', tableLayout: 'fixed' }} />
//       ),
//       TableHead: React.forwardRef((props, ref) => <TableHead {...props} ref={ref} />),
//       TableRow,
//       TableBody: React.forwardRef((props, ref) => <TableBody {...props} ref={ref} />),
//     };
    
//     function fixedHeaderContent() {
//       return (
//         <TableRow>
//           {columns.map((column) => (
//             <TableCell
//               key={column.dataKey}
//               variant="head"
//               align={column.numeric || false ? 'right' : 'left'}
//               style={{ width: column.width }}
//               sx={{ backgroundColor: 'background.paper' }}
//             >
//               {column.label}
//             </TableCell>
//           ))}
//         </TableRow>
//       );
//     }
    
//     function rowContent(_index, row) {
//       return (
//         <React.Fragment>
//           {columns.map((column) => (
//             <TableCell
//               key={column.dataKey}
//               align={column.numeric || false ? 'right' : 'left'}
//             >
//               {row[column.dataKey]}
//             </TableCell>
//           ))}
//         </React.Fragment>
//       );
//     }
//     return <div>
//     <Paper style={{ height: 400, width: '100%' }}>
//       <TableVirtuoso
//         data={rows}
//         components={VirtuosoTableComponents}
//         fixedHeaderContent={fixedHeaderContent}
//         itemContent={rowContent}
//       />
//     </Paper>
//     </div>
// }
