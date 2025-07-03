//import.................................................................................................
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsThunk } from '../redux/slices/getProductsThunk';
// import { updateProductThunk } from '../redux/slices/updateProductThunk';
import { addProductThunk } from '../redux/slices/addProductThunk';
import axios from 'axios';

// MUI Components
import {
  Box, Container, Typography, Paper, Grid, Card, CardContent, CardMedia, CardActions,
  Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions, IconButton,
  InputAdornment, Divider, Chip, Tooltip, Snackbar, Alert, FormControl, InputLabel,
  Select, MenuItem, CircularProgress, TablePagination
} from '@mui/material';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';

// MUI Icons
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import UploadIcon from '@mui/icons-material/Upload';
import InventoryIcon from '@mui/icons-material/Inventory';
import SearchIcon from '@mui/icons-material/Search';
import SortIcon from '@mui/icons-material/Sort';
import FilterListIcon from '@mui/icons-material/FilterList';

//style..................................................................................................
// Custom theme with brown and red tones
const theme = createTheme({
  palette: {
    primary: {
      main: '#8B4513', // SaddleBrown
      light: '#A0522D', // Sienna
      dark: '#5D2E0C', // Darker brown
    },
    secondary: {
      main: '#CD5C5C', // IndianRed
      light: '#F08080', // LightCoral
      dark: '#A52A2A', // Brown
    },
    background: {
      default: '#FFF8F0', // Light cream
      paper: '#FFF8F0',
    },
    text: {
      primary: '#3E2723', // Dark brown
      secondary: '#5D4037', // Medium brown
    },
  },
  typography: {
    fontFamily: [
      'Segoe UI',
      'Arial',
      'sans-serif',
    ].join(','),
    h4: {
      fontWeight: 600,
      color: '#5D4037',
    },
    h5: {
      fontWeight: 500,
      color: '#8B4513',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 'bold',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          overflow: 'hidden',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 12px 20px rgba(0,0,0,0.1)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
          },
        },
      },
    },
  },
});

// Styled components
const ProductCard = styled(Card)(({ theme }) => ({
  height: '320px',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#FFFAF5',
  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
  position: 'relative',
}));

// const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
//   paddingTop: '56.25%', // 4:3 aspect ratio
//   backgroundSize: 'contain',backgroundPosition: 'center',height: 140,
//   backgroundColor: '#FFF',
// }));
const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  height: 180,
  objectFit: 'cover',
  objectPosition: 'center',
}));
const PageHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: theme.spacing(4),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: theme.spacing(2),
  },
}));

const SearchBar = styled(TextField)(({ theme }) => ({
  backgroundColor: '#FFF',
  borderRadius: 8,
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
    },
  },
}));

export const ManageProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.Products?.productsList || []);

  // State for UI
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [sortDirection, setSortDirection] = useState('asc');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(12);
  const [filterCategory, setFilterCategory] = useState('all');
const [categories, setCategories] = useState(["כלי עבודה", "חשמל", "בניין", "גינון", "ריהוט", "אחר"]);
  // State for product operations
  const [editingProduct, setEditingProduct] = useState(null);
  const [quantityDialogOpen, setQuantityDialogOpen] = useState(false);
  const [newQuantity, setNewQuantity] = useState(0);
  const [addProductDialogOpen, setAddProductDialogOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({
    pname: '',
    psum: 0,
    pprice: 0,
    pimporter: 'ddImporter', // הוסף שדות חסרים
    pcompany: 'ILCompany',
    ppicture: '',
    pdescription: ''
  });
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });


  // Fetch products on component mount
  useEffect(() => {
    dispatch(getProductsThunk());
    console.log("products", products);
  
  }, [dispatch]);

  // Handle quantity update dialog
  const openQuantityDialog = (product) => {
    setEditingProduct(product);
    setNewQuantity(product.psum);
    setQuantityDialogOpen(true);
  };

  const closeQuantityDialog = () => {
    setQuantityDialogOpen(false);
    setEditingProduct(null);
    setNewQuantity(0);
  };

  // const handleQuantityUpdate = () => {
  //   if (editingProduct) {
  //     dispatch(updateProductThunk({
  //       ...editingProduct,
  //       psum: newQuantity
  //     })).then(() => {
  //       setSnackbar({
  //         open: true,
  //         message: 'כמות המוצר עודכנה בהצלחה',
  //         severity: 'success'
  //       });
  //       closeQuantityDialog();
  //     }).catch(error => {
  //       setSnackbar({
  //         open: true,
  //         message: 'שגיאה בעדכון כמות המוצר',
  //         severity: 'error'
  //       });
  //     });
  //   }
  // };

  // Handle add product dialog
  const openAddProductDialog = () => {
    setAddProductDialogOpen(true);
  };

  const closeAddProductDialog = () => {
    setAddProductDialogOpen(false);
    setNewProduct({
      pname: '',
      pprice: 0,
      pdescription: '',
      pcategory: '',
      psum: 0,
      ppicture: ''
    });
    setSelectedImage(null);
  };

  const handleNewProductChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value
    });
  };

  const handleImageSelect = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const uploadImage = async () => {
    if (!selectedImage) {
      setSnackbar({
        open: true,
        message: 'אנא בחר תמונה',
        severity: 'warning'
      });
      return null;
    }
  
    setUploadingImage(true);
  
    const formData = new FormData();
    formData.append('file', selectedImage); // שינוי מ-'image' ל-'file'
  
    try {
      const response = await fetch('https://myFirstProjectBackend.onrender.com/api/Img/upload', {
        method: 'POST',
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error(`שגיאת שרת: ${response.status}`);
      }
  
      const data = await response.json();
      console.log("🔍 נתוני התמונה:", data);
      
      // אם השרת מחזיר URL מלא אבל אתה צריך נתיב יחסי:
      let imagePath = data.imageUrl;
      
      // אם זה URL מלא של Cloudinary למשל, חלץ רק את החלק הרלוונטי
      if (imagePath && imagePath.includes('cloudinary.com')) {
        // חלץ רק את החלק אחרי הדומיין
        const urlParts = imagePath.split('/');
        imagePath = '/' + urlParts.slice(8).join('/'); // או לפי הפורמט שהשרת מצפה לו
      }
      
      console.log("🔍 נתיב התמונה שנשמר:", imagePath);
      
      setUploadingImage(false);
      setSnackbar({
        open: true,
        message: 'התמונה הועלתה בהצלחה',
        severity: 'success'
      });
      
      return imagePath;
    } catch (error) {
      console.error("שגיאה בהעלאת תמונה:", error);
      setUploadingImage(false);
      setSnackbar({
        open: true,
        message: 'שגיאה בהעלאת התמונה',
        severity: 'error'
      });
      return null;
    }
  };
  
  const handleAddProduct = async () => {
    // Validate form
    if (!newProduct.pname || newProduct.psum <= 0) {
      setSnackbar({
        open: true,
        message: 'אנא מלא את כל השדות הנדרשים',
        severity: 'warning'
      });
      return;
    }

    // Upload image first
    const imageUrl = await uploadImage();
    if (!imageUrl) return;

    // Add product with image URL
    const productToAdd = {
      ...newProduct,
      ppicture: imageUrl
    };

    dispatch(addProductThunk(productToAdd))
      .then(() => {
        setSnackbar({
          open: true,
          message: 'המוצר נוסף בהצלחה',
          severity: 'success'
        });
        closeAddProductDialog();
      })
      .catch(error => {
        setSnackbar({
          open: true,
          message: 'שגיאה בהוספת המוצר',
          severity: 'error'
        });
      });
  };

  // Handle search, sort, and filter
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setPage(0); // Reset to first page when searching
  };

  const handleSortChange = (field) => {
    if (sortBy === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortDirection('asc');
    }
  };

  const handleFilterChange = (e) => {
    setFilterCategory(e.target.value);
    setPage(0); // Reset to first page when filtering
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Filter and sort products
  // const filteredProducts = products
  // .filter(product => 
  //   (filterCategory === 'all' || product.pcategory === filterCategory) &&
  //   (product.pcategory===searchTerm ||
  //    product.pdescription===searchTerm)
  // )
  // .sort((a, b) => {
  //   let comparison = 0;

  //   if (sortBy === 'name') {
  //     comparison = a.pname.localeCompare(b.pname);
  //   } else if (sortBy === 'price') {
  //     comparison = a.pprice - b.pprice;
  //   } else if (sortBy === 'quantity') {
  //     comparison = a.psum - b.psum;
  //   }

  //   return sortDirection === 'asc' ? comparison : -comparison;
  // });
const filteredProducts = (() => {
  const filtered = products?.filter(product => {
    const matchesCategory = searchTerm === 'כל המוצרים' || product.category === searchTerm;
    const matchesSearch = product.pcategory === searchTerm;
    return matchesCategory && matchesSearch;
  });
  
  // אם הרשימה המסוננת ריקה, החזר את כל המוצרים
  return filtered?.length > 0 ? filtered : products;
})();


  // Paginate products
  const paginatedProducts = filteredProducts.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <PageHeader>
          <Typography variant="h4" component="h1">
            ניהול מוצרים
          </Typography>
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            onClick={openAddProductDialog}
            sx={{ height: '5vh' }}
          >
            הוסף מוצר חדש
          </Button>
        </PageHeader>

        {/* Search and filters */}
        <Paper elevation={2} sx={{ p: 2, mb: 4, borderRadius: 2 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={4}>
              <SearchBar
                fullWidth
                placeholder="חיפוש מוצרים..."
                value={searchTerm}
                onChange={handleSearchChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon color="primary" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <FormControl fullWidth variant="outlined">
                <InputLabel id="category-filter-label">סינון לפי קטגוריה</InputLabel>
                <Select
                  labelId="category-filter-label"
                  // value={filterCategory}
                  onChange={handleFilterChange}
                  label="סינון לפי קטגוריה"
                  startAdornment={
                    <InputAdornment position="start">
                      <FilterListIcon color="primary" />
                    </InputAdornment>
                  }
                >
                  <MenuItem value="all">כל הקטגוריות</MenuItem>
                  {categories.map(category => (
                    <MenuItem key={category} value={category}>{category}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={5}>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Button
                  variant={sortBy === 'name' ? 'contained' : 'outlined'}
                  color="primary"
                  size="small"
                  onClick={() => handleSortChange('name')}
                  startIcon={<SortIcon />}
                  sx={{ flexGrow: 1, height: '5vh' }}
                >
                  מיון לפי שם {sortBy === 'name' && (sortDirection === 'asc' ? '↑' : '↓')}
                </Button>
                <Button
                  variant={sortBy === 'price' ? 'contained' : 'outlined'}
                  color="primary"
                  size="small"
                  onClick={() => handleSortChange('price')}
                  startIcon={<SortIcon />}
                  sx={{ flexGrow: 1, height: '5vh' }}
                >
                  מיון לפי מחיר {sortBy === 'price' && (sortDirection === 'asc' ? '↑' : '↓')}
                </Button>
                <Button
                  variant={sortBy === 'quantity' ? 'contained' : 'outlined'}
                  color="primary"
                  size="small"
                  onClick={() => handleSortChange('quantity')}
                  startIcon={<SortIcon />}
                  sx={{ flexGrow: 1, height: '5vh' }}
                >
                  מיון לפי כמות {sortBy === 'quantity' && (sortDirection === 'asc' ? '↑' : '↓')}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>

        {/* Products grid */}
        {products.length === 0 ? (
          <Paper sx={{ p: 4, textAlign: 'center' }}>
            <CircularProgress color="primary" sx={{ mb: 2 }} />
            <Typography variant="h6">טוען מוצרים...</Typography>
          </Paper>
        ) : paginatedProducts.length === 0 ? (
          <Paper sx={{ p: 4, textAlign: 'center' }}>
            <Typography variant="h6" color="text.secondary">
              לא נמצאו מוצרים התואמים את החיפוש
            </Typography>
          </Paper>
        ) : (
          <Grid container spacing={3}>
            {paginatedProducts.map(product => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={product.prodId}>
                <ProductCard>
                  {product.psum < 5 && (
                    <Chip
                      label={product.psum === 0 ? "אזל מהמלאי" : "מלאי נמוך"}
                      color={product.psum === 0 ? "error" : "warning"}
                      size="small"
                      sx={{
                        position: 'absolute',
                        top: 10,
                        right: 10,
                        zIndex: 1,
                      }}
                    />
                  )}
          
<StyledCardMedia
  component="img"
  image={product.ppicture?.startsWith('http') 
    ? product.ppicture 
    : `https://res.cloudinary.com/dvqdnn9c4/image/upload/v1751363224/products${product.ppicture}`
  }
  alt={product.pname}
  onError={(e) => {
    e.target.src = 'https://placehold.co/300x180/cccccc/333333?text=No+Image';
  }}
/>
                  <CardContent sx={{ flexGrow: 1, py: 1 }}>
                    <Typography variant="h6" component="h2" gutterBottom noWrap>
                      {product.pname}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1, height: 20, overflow: 'hidden' }}>
                      {product.pdescription}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                      <Typography variant="h6" color="primary.main">
                        ₪{product.pprice}
                      </Typography>
                      <Chip
                        icon={<InventoryIcon />}
                        label={`מלאי: ${product.psum}`}
                        color={product.psum > 10 ? "success" : product.psum > 0 ? "warning" : "error"}
                        variant="outlined"
                      />
                    
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                      קטגוריה: {product.pcategory}
                    </Typography>
                 
                  <Divider />
                  <CardActions sx={{ justifyContent: 'space-between', p: 1 }}>
                    <Tooltip title="עדכון כמות">
                      <Button
                        size="small"
                        variant="outlined"
                        color="primary"
                        startIcon={<EditIcon />}
                        onClick={() => openQuantityDialog(product)}
                      >
                        עדכון כמות
                      </Button>
                    </Tooltip>
                    {/* <Tooltip title="עריכת מוצר">
                      <IconButton color="secondary">
                        <EditIcon />
                      </IconButton>
                    </Tooltip> */}
                  </CardActions>
                   </Box>
                  </CardContent >
                 
                </ProductCard>
              </Grid>
            ))}
          </Grid>
        )}

        {/* Pagination */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <TablePagination
            component="div"
            count={filteredProducts.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            rowsPerPageOptions={[12, 24, 36, 48]}
            labelRowsPerPage="מוצרים בעמוד:"
            labelDisplayedRows={({ from, to, count }) => `${from}-${to} מתוך ${count}`}
            sx={{
              '.MuiTablePagination-selectLabel, .MuiTablePagination-displayedRows': {
                margin: 0,
              },
            }}
          />
        </Box>

        {/* Quantity Update Dialog */}
        <Dialog open={quantityDialogOpen} onClose={closeQuantityDialog} dir="rtl">
          <DialogTitle>
            עדכון כמות מוצר: {editingProduct?.pname}
          </DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="כמות חדשה"
              type="number"
              fullWidth
              variant="outlined"
              value={newQuantity}
              onChange={(e) => setNewQuantity(parseInt(e.target.value) || 0)}
              InputProps={{
                inputProps: { min: 0 }
              }}
              sx={{ mt: 2 }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={closeQuantityDialog} color="primary" startIcon={<CancelIcon />}>
              ביטול
            </Button>
            {/* <Button onClick={handleQuantityUpdate} color="secondary" variant="contained" startIcon={<SaveIcon />}>
              שמור
            </Button> */}
          </DialogActions>
        </Dialog>

        {/* Add Product Dialog */}
        <Dialog
          open={addProductDialogOpen}
          onClose={closeAddProductDialog}
          fullWidth
          maxWidth="md"
          dir="rtl"
        >
          <DialogTitle>
            הוספת מוצר חדש
          </DialogTitle>
          <DialogContent>
            <Grid container spacing={2} sx={{ mt: 1 }}>
              <Grid item xs={12} md={6}>
                <TextField
                  name="pname"
                  label="שם המוצר"
                  fullWidth
                  variant="outlined"
                  value={newProduct.pname}
                  onChange={handleNewProductChange}
                  required
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  name="pprice"
                  label="מחיר"
                  type="number"
                  fullWidth
                  variant="outlined"
                  value={newProduct.pprice}
                  onChange={handleNewProductChange}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">₪</InputAdornment>,
                    inputProps: { min: 0, step: 0.01 }
                  }}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="pdescription"
                  label="תיאור המוצר"
                  fullWidth
                  variant="outlined"
                  value={newProduct.pdescription}
                  onChange={handleNewProductChange}
                  multiline
                  rows={3}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth variant="outlined" required>
                  <InputLabel id="category-label">קטגוריה</InputLabel>
                  <Select
                    labelId="category-label"
                    name="pcategory"
                    value={newProduct.pcategory}
                    onChange={handleNewProductChange}
                    label="קטגוריה"
                  >
                    {categories.map(category => (
                      <MenuItem key={category} value={category}>{category}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  name="psum"
                  label="כמות במלאי"
                  type="number"
                  fullWidth
                  variant="outlined"
                  value={newProduct.psum}
                  onChange={handleNewProductChange}
                  InputProps={{
                    inputProps: { min: 0 }
                  }}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ border: '1px dashed', borderColor: 'primary.main', borderRadius: 2, p: 3, textAlign: 'center' }}>
                  <input
                    accept="image/*"
                    style={{ display: 'none' }}
                    id="product-image-upload"
                    type="file"
                    onChange={handleImageSelect}
                  />
                  <label htmlFor="product-image-upload">
                    <Button
                      variant="outlined"
                      component="span"
                      startIcon={<UploadIcon />}
                      sx={{ mb: 2 }}
                    >
                      בחר תמונה למוצר
                    </Button>
                  </label>
                  {selectedImage && (
                    <Box sx={{ mt: 2 }}>
                      <Typography variant="body2" gutterBottom>
                        נבחרה תמונה: {selectedImage.name}
                      </Typography>
                      <Box
                        component="img"
                        src={URL.createObjectURL(selectedImage)}
                        alt="תצוגה מקדימה"
                        sx={{
                          maxHeight: 200,
                          maxWidth: '100%',
                          objectFit: 'contain',
                          mt: 1,
                          borderRadius: 1
                        }}
                      />
                    </Box>
                  )}
                </Box>
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={closeAddProductDialog} color="primary" startIcon={<CancelIcon />}>
              ביטול
            </Button>
            <Button
              onClick={handleAddProduct}
              color="secondary"
              variant="contained"
              startIcon={<SaveIcon />}
              disabled={uploadingImage}
            >
              {uploadingImage ? <CircularProgress size={24} /> : 'הוסף מוצר'}
            </Button>
          </DialogActions>
        </Dialog>

        {/* Snackbar for notifications */}
        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert
            onClose={() => setSnackbar({ ...snackbar, open: false })}
            severity={snackbar.severity}
            variant="filled"
            sx={{ width: '100%' }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Container>
    </ThemeProvider>
  );
};

