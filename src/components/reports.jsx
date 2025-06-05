import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Typography, 
  Paper, 
  Grid, 
  Card, 
  CardContent, 
  Box,
  TextField,
  Button,
  Tabs,
  Tab,
  Divider,
  CircularProgress
} from '@mui/material';
import { styled } from '@mui/material/styles';
import BarChartIcon from '@mui/icons-material/BarChart';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import InventoryIcon from '@mui/icons-material/Inventory';
import PeopleIcon from '@mui/icons-material/People';
import DateRangeIcon from '@mui/icons-material/DateRange';
import PrintIcon from '@mui/icons-material/Print';
import GetAppIcon from '@mui/icons-material/GetApp';

// Mock data for charts
const mockSalesData = [
  { month: 'ינואר', sales: 12000 },
  { month: 'פברואר', sales: 19000 },
  { month: 'מרץ', sales: 15000 },
  { month: 'אפריל', sales: 22000 },
  { month: 'מאי', sales: 28000 },
  { month: 'יוני', sales: 32000 },
];

const mockProductData = [
  { name: 'מלט', quantity: 250, revenue: 25000 },
  { name: 'חול', quantity: 180, revenue: 9000 },
  { name: 'ברזל בניין', quantity: 120, revenue: 36000 },
  { name: 'בלוקים', quantity: 300, revenue: 15000 },
  { name: 'צבע', quantity: 90, revenue: 13500 },
];

const mockCustomerData = [
  { name: 'אבי כהן', orders: 12, spent: 45000 },
  { name: 'שרה לוי', orders: 8, spent: 32000 },
  { name: 'יוסי מזרחי', orders: 15, spent: 58000 },
  { name: 'רונית אברהם', orders: 5, spent: 21000 },
  { name: 'דוד פרץ', orders: 10, spent: 39000 },
];

// Custom styled components
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

const StatsCard = styled(Card)(({ theme }) => ({
  height: '100%',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
  }
}));

const StatValue = styled(Typography)(({ theme }) => ({
  fontSize: '2rem',
  fontWeight: 'bold',
  marginBottom: theme.spacing(1),
}));

const ChartContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  height: '100%',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
}));

const DataTable = styled('table')(({ theme }) => ({
  width: '100%',
  borderCollapse: 'collapse',
  '& th, & td': {
    padding: theme.spacing(1.5),
    textAlign: 'right',
    borderBottom: '1px solid #e0e0e0',
  },
  '& th': {
    backgroundColor: '#f5f5f5',
    fontWeight: 'bold',
  },
  '& tr:last-child td': {
    borderBottom: 'none',
  },
  '& tr:hover': {
    backgroundColor: '#f9f9f9',
  }
}));

const Reports = () => {
  const [tabValue, setTabValue] = useState(0);
  const [dateRange, setDateRange] = useState({
    startDate: '2023-01-01',
    endDate: '2023-12-31',
  });
  const [loading, setLoading] = useState(false);

  // Handle tab change
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  // Handle date range change
  const handleDateChange = (field) => (event) => {
    setDateRange({
      ...dateRange,
      [field]: event.target.value
    });
  };

  // Generate report
  const handleGenerateReport = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  // Export report
  const handleExportReport = (format) => {
    // Here you would implement the export functionality
    console.log(`Exporting report in ${format} format`);
  };

  // Print report
  const handlePrintReport = () => {
    window.print();
  };

  return (
   
 <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
 <PageHeader>
   <BarChartIcon />
   <Typography variant="h4" component="h1" fontWeight="bold">
     דוחות וסטטיסטיקות
   </Typography>
 </PageHeader>

 <Paper sx={{ p: 3, mb: 4 }}>
   <Grid container spacing={3} alignItems="center">
     <Grid item xs={12} md={3}>
       <Box display="flex" alignItems="center">
         <DateRangeIcon sx={{ mr: 1, color: '#1976d2' }} />
         <Typography variant="subtitle1" fontWeight="bold">טווח תאריכים:</Typography>
       </Box>
     </Grid>
     <Grid item xs={12} md={3}>
       <TextField
         label="מתאריך"
         type="date"
         fullWidth
         value={dateRange.startDate}
         onChange={handleDateChange('startDate')}
         InputLabelProps={{ shrink: true }}
       />
     </Grid>
     <Grid item xs={12} md={3}>
       <TextField
         label="עד תאריך"
         type="date"
         fullWidth
         value={dateRange.endDate}
         onChange={handleDateChange('endDate')}
         InputLabelProps={{ shrink: true }}
       />
     </Grid>
     <Grid item xs={12} md={3}>
       <Button
         variant="contained"
         color="primary"
         fullWidth
         onClick={handleGenerateReport}
         disabled={loading}
         startIcon={loading ? <CircularProgress size={20} /> : null}
       >
         {loading ? 'מייצר דוח...' : 'הפק דוח'}
       </Button>
     </Grid>
   </Grid>
 </Paper>

 <Box sx={{ mb: 3 }}>
   <Tabs
     value={tabValue}
     onChange={handleTabChange}
     variant="scrollable"
     scrollButtons="auto"
     textColor="primary"
     indicatorColor="primary"
   >
     <Tab icon={<TrendingUpIcon />} label="סקירה כללית" />
     <Tab icon={<AttachMoneyIcon />} label="מכירות" />
     <Tab icon={<InventoryIcon />} label="מוצרים" />
     <Tab icon={<PeopleIcon />} label="לקוחות" />
   </Tabs>
 </Box>

 {/* Overview Tab */}
 {tabValue === 0 && (
   <Grid container spacing={3}>
     <Grid item xs={12} md={4}>
       <StatsCard>
         <CardContent>
           <Box display="flex" alignItems="center" mb={2}>
             <AttachMoneyIcon sx={{ mr: 1, color: '#4caf50' }} />
             <Typography variant="h6" fontWeight="bold">סה"כ מכירות</Typography>
           </Box>
           <StatValue color="primary">₪ 245,680</StatValue>
           <Typography variant="body2" color="textSecondary">
             גידול של 18% לעומת התקופה המקבילה אשתקד
           </Typography>
         </CardContent>
       </StatsCard>
     </Grid>
     <Grid item xs={12} md={4}>
       <StatsCard>
         <CardContent>
           <Box display="flex" alignItems="center" mb={2}>
             <InventoryIcon sx={{ mr: 1, color: '#2196f3' }} />
             <Typography variant="h6" fontWeight="bold">הזמנות</Typography>
           </Box>
           <StatValue color="primary">187</StatValue>
           <Typography variant="body2" color="textSecondary">
             ממוצע של 23 הזמנות בחודש
           </Typography>
         </CardContent>
       </StatsCard>
     </Grid>
     <Grid item xs={12} md={4}>
       <StatsCard>
         <CardContent>
           <Box display="flex" alignItems="center" mb={2}>
             <PeopleIcon sx={{ mr: 1, color: '#ff9800' }} />
             <Typography variant="h6" fontWeight="bold">לקוחות חדשים</Typography>
           </Box>
           <StatValue color="primary">42</StatValue>
           <Typography variant="body2" color="textSecondary">
             גידול של 12% לעומת התקופה המקבילה אשתקד
           </Typography>
         </CardContent>
       </StatsCard>
     </Grid>

     <Grid item xs={12}>
       <ChartContainer>
         <Typography variant="h6" fontWeight="bold" mb={3}>
           מגמת מכירות שנתית
         </Typography>
         <Box height={300} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
           {/* Here you would typically render a chart component */}
           <Typography variant="body1" color="textSecondary">
             גרף מכירות יוצג כאן (יש להטמיע ספריית גרפים כגון Recharts או Chart.js)
           </Typography>
         </Box>
       </ChartContainer>
     </Grid>
   </Grid>
 )}

 {/* Sales Tab */}
 {tabValue === 1 && (
   <Grid container spacing={3}>
     <Grid item xs={12}>
       <ChartContainer>
         <Typography variant="h6" fontWeight="bold" mb={3}>
           מכירות לפי חודש
         </Typography>
         <Box height={300} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
           <Typography variant="body1" color="textSecondary">
             גרף מכירות חודשי יוצג כאן
           </Typography>
         </Box>
       </ChartContainer>
     </Grid>
     <Grid item xs={12}>
       <ChartContainer>
         <Typography variant="h6" fontWeight="bold" mb={3}>
           פירוט מכירות
         </Typography>
         <DataTable>
           <thead>
             <tr>
               <th>חודש</th>
               <th>מספר הזמנות</th>
               <th>סה"כ מכירות</th>
               <th>ממוצע להזמנה</th>
             </tr>
           </thead>
           <tbody>
             {mockSalesData.map((item, index) => (
               <tr key={index}>
                 <td>{item.month}</td>
                 <td>{Math.floor(item.sales / 2500)}</td>
                 <td>₪ {item.sales.toLocaleString()}</td>
                 <td>₪ {Math.floor(item.sales / (item.sales / 2500)).toLocaleString()}</td>
               </tr>
             ))}
           </tbody>
         </DataTable>
       </ChartContainer>
     </Grid>
   </Grid>
 )}

 {/* Products Tab */}
 {tabValue === 2 && (
   <Grid container spacing={3}>
     <Grid item xs={12} md={6}>
       <ChartContainer>
         <Typography variant="h6" fontWeight="bold" mb={3}>
           מוצרים מובילים לפי כמות
         </Typography>
         <Box height={300} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
           <Typography variant="body1" color="textSecondary">
             גרף מוצרים מובילים יוצג כאן
           </Typography>
         </Box>
       </ChartContainer>
     </Grid>
     <Grid item xs={12} md={6}>
       <ChartContainer>
         <Typography variant="h6" fontWeight="bold" mb={3}>
           מוצרים מובילים לפי הכנסה
         </Typography>
         <Box height={300} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
           <Typography variant="body1" color="textSecondary">
             גרף הכנסות לפי מוצר יוצג כאן
           </Typography>
         </Box>
       </ChartContainer>
     </Grid>
     <Grid item xs={12}>
       <ChartContainer>
         <Typography variant="h6" fontWeight="bold" mb={3}>
           פירוט מכירות לפי מוצר
         </Typography>
         <DataTable>
           <thead>
             <tr>
               <th>שם המוצר</th>
               <th>כמות שנמכרה</th>
               <th>הכנסה</th>
               <th>מחיר ממוצע ליחידה</th>
             </tr>
           </thead>
           <tbody>
             {mockProductData.map((item, index) => (
               <tr key={index}>
                 <td>{item.name}</td>
                 <td>{item.quantity}</td>
                 <td>₪ {item.revenue.toLocaleString()}</td>
                 <td>₪ {Math.floor(item.revenue / item.quantity).toLocaleString()}</td>
               </tr>
             ))}
           </tbody>
         </DataTable>
       </ChartContainer>
     </Grid>
   </Grid>
 )}

 {/* Customers Tab */}
 {tabValue === 3 && (
   <Grid container spacing={3}>
     <Grid item xs={12} md={6}>
       <ChartContainer>
         <Typography variant="h6" fontWeight="bold" mb={3}>
           לקוחות מובילים לפי הזמנות
         </Typography>
         <Box height={300} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
           <Typography variant="body1" color="textSecondary">
             גרף לקוחות מובילים יוצג כאן
           </Typography>
         </Box>
       </ChartContainer>
     </Grid>
     <Grid item xs={12} md={6}>
       <ChartContainer>
         <Typography variant="h6" fontWeight="bold" mb={3}>
           לקוחות מובילים לפי הכנסה
         </Typography>
         <Box height={300} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
           <Typography variant="body1" color="textSecondary">
             גרף הכנסות לפי לקוח יוצג כאן
           </Typography>
         </Box>
       </ChartContainer>
     </Grid>
     <Grid item xs={12}>
       <ChartContainer>
         <Typography variant="h6" fontWeight="bold" mb={3}>
           פירוט לקוחות מובילים
         </Typography>
         <DataTable>
           <thead>
             <tr>
               <th>שם הלקוח</th>
               <th>מספר הזמנות</th>
               <th>סה"כ רכישות</th>
               <th>ממוצע להזמנה</th>
             </tr>
           </thead>
           <tbody>
             {mockCustomerData.map((item, index) => (
               <tr key={index}>
                 <td>{item.name}</td>
                 <td>{item.orders}</td>
                 <td>₪ {item.spent.toLocaleString()}</td>
                 <td>₪ {Math.floor(item.spent / item.orders).toLocaleString()}</td>
               </tr>
             ))}
           </tbody>
         </DataTable>
       </ChartContainer>
     </Grid>
   </Grid>
 )}

 <Box sx={{ mt: 4, display: 'flex', justifyContent: 'flex-end' }}>
   <Button
     variant="outlined"
     startIcon={<PrintIcon />}
     onClick={handlePrintReport}
     sx={{ mr: 2 }}
   >
     הדפס דוח
   </Button>
   <Button
     variant="contained"
     startIcon={<GetAppIcon />}
     onClick={() => handleExportReport('excel')}
   >
     ייצא לאקסל
   </Button>
 </Box>
</Container>
);
};

export default Reports;
