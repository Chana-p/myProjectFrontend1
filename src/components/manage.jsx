// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import ButtonBase from '@mui/material/ButtonBase';
// import Typography from '@mui/material/Typography';
// import { useNavigate } from 'react-router-dom';

// export const Manage=()=>{

//     const navigate = useNavigate();
//     const images = [
//         {
//           url: '/static/images/buttons/breakfast.jpg',
//           title: 'Employees',
//           width: '40%',
//           navigateTo:'ManageEmployees'
//         },
//         {
//           url: '/static/images/buttons/burgers.jpg',
//           title: 'Products',
//           width: '30%',
//           navigateTo:'ManageProducts'
//         },
//         {
//           url: '/static/images/buttons/camera.jpg',
//           title: 'Customers',
//           width: '30%',
//           navigateTo:'ManageCustomers'
//         },
//       ];
      
//       const ImageButton = styled(ButtonBase)(({ theme }) => ({
//         position: 'relative',
//         height: 700,
//         [theme.breakpoints.down('sm')]: {
//           width: '100% !important', // Overrides inline-style
//           height: 100,
//         },
//         '&:hover, &.Mui-focusVisible': {
//           zIndex: 1,
//           '& .MuiImageBackdrop-root': {
//             opacity: 0.15,
//           },
//           '& .MuiImageMarked-root': {
//             opacity: 0,
//           },
//           '& .MuiTypography-root': {
//             border: '4px solid currentColor',
//           },
//         },
//       }));
      
//       const ImageSrc = styled('span')({
//         position: 'absolute',
//         left: 0,
//         right: 0,
//         top: 0,
//         bottom: 0,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center 40%',
//       });
      
//       const Image = styled('span')(({ theme }) => ({
//         position: 'absolute',
//         left: 0,
//         right: 0,
//         top: 0,
//         bottom: 0,
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         color: theme.palette.common.white,
//       }));
      
//       const ImageBackdrop = styled('span')(({ theme }) => ({
//         position: 'absolute',
//         left: 0,
//         right: 0,
//         top: 0,
//         bottom: 0,
//         backgroundColor: theme.palette.common.black,
//         opacity: 0.4,
//         transition: theme.transitions.create('opacity'),
//       }));
      
//       const ImageMarked = styled('span')(({ theme }) => ({
//         height: 3,
//         width: 18,
//         backgroundColor: theme.palette.common.white,
//         position: 'absolute',
//         bottom: -2,
//         left: 'calc(50% - 9px)',
//         transition: theme.transitions.create('opacity'),
//       }));

//     return <div >
//       {/* style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/basisLabait2.jpg"})`, height: "90vh" ,width:"100%"}} */}
// <h1 style={{fontSize:"70px"}}>wellcome manager</h1>

// <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
//       {images.map((image) => (
//         <ImageButton
//           focusRipple
//           key={image.title}
//           style={{
//             width: image.width,
//           }} onClick={()=> navigate( image.navigateTo )}
//         >
//           <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
//           <ImageBackdrop className="MuiImageBackdrop-root" />
//           <Image>
//             <Typography
//               component="span"
//               variant="subtitle1"
//               color="inherit"
//               sx={(theme) => ({
//                 position: 'relative',
//                 p: 4,
//                 pt: 2,
//                 pb: `calc(${theme.spacing(1)} + 6px)`,
//               })}
//             >
//               {image.title}
//               <ImageMarked className="MuiImageMarked-root" />
//             </Typography>
//           </Image>
//         </ImageButton>
//       ))} </Box>
//     </div>
// }

import * as React from 'react';
import { Box, Button, Typography, Container, Grid, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import InventoryIcon from '@mui/icons-material/Inventory';
import PeopleIcon from '@mui/icons-material/People';

export const Manage = () => {
  const navigate = useNavigate();
  
  const managementOptions = [
    {
      title: 'Employees',
      icon: <PersonIcon fontSize="large" />,
      description: 'ניהול עובדים, הוספה, עריכה ומחיקה',
      navigateTo: 'ManageEmployees',
      color: '#3f51b5'
    },
    {
      title: 'Products',
      icon: <InventoryIcon fontSize="large" />,
      description: 'ניהול מוצרים, מלאי ומחירים',
      navigateTo: 'ManageProducts',
      color: '#f50057'
    },
    {
      title: 'Customers',
      icon: <PeopleIcon fontSize="large" />,
      description: 'ניהול לקוחות והזמנות',
      navigateTo: 'ManageCustomers',
      color: '#00a152'
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography 
        variant="h2" 
        component="h1" 
        align="center" 
        gutterBottom 
        sx={{ 
          fontWeight: 'bold', 
          color: '#333',
          mb: 4
        }}
      >
        ברוך הבא, מנהל
      </Typography>
      
      <Grid container spacing={4}>
        {managementOptions.map((option) => (
          <Grid item xs={12} md={4} key={option.title}>
            <Paper 
              elevation={3} 
              sx={{ 
                p: 3, 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                borderRadius: 2,
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: 6,
                  cursor: 'pointer'
                }
              }}
              onClick={() => navigate(option.navigateTo)}
            >
              <Box 
                sx={{ 
                  p: 2, 
                  borderRadius: '50%', 
                  backgroundColor: `${option.color}20`,
                  color: option.color,
                  mb: 2
                }}
              >
                {option.icon}
              </Box>
              <Typography variant="h5" component="h2" gutterBottom>
                {option.title}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {option.description}
              </Typography>
              <Box sx={{ flexGrow: 1 }} />
              <Button 
                variant="contained" 
                sx={{ 
                  mt: 3,
                  backgroundColor: option.color,
                  '&:hover': {
                    backgroundColor: option.color,
                    filter: 'brightness(90%)'
                  }
                }}
                onClick={() => navigate(option.navigateTo)}
              >
                כניסה לניהול
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};


