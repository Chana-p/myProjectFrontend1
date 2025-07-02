import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HistoryIcon from '@mui/icons-material/History';
import SettingsIcon from '@mui/icons-material/Settings';
import PeopleIcon from '@mui/icons-material/People';
import InventoryIcon from '@mui/icons-material/Inventory';
import BarChartIcon from '@mui/icons-material/BarChart';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { editUserDetails } from '../redux/slices/userSlice';

// לוגו מותאם אישית
const Logo = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  fontFamily: "'Rubik', 'Assistant', sans-serif",
  fontWeight: 'bold',
  fontSize: '1.5rem',
  color: 'white',
  textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
  '& img': {
    marginRight: theme.spacing(1),
    height: 40,
  },
}));

// סרגל ניווט שקוף עם אפקט זכוכית
const TransparentAppBar = styled(AppBar)(({ theme }) => ({
  background: 'rgba(0, 0, 0, 0.6)',
  backdropFilter: 'blur(10px)',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
}));

// תמונת רקע בצד של התפריט הנפתח
const DrawerHeader = styled('div')({
    height: '180px',
    backgroundColor: '#1976d2', // צבע פשוט במקום גרדיאנט או תמונה
    display: 'flex',
    alignItems: 'flex-end',
    padding: '16px',
  });

const UserInfo = styled('div')({
  position: 'relative',
  zIndex: 1,
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  '& .MuiAvatar-root': {
    marginRight: '12px',
    border: '2px solid white',
  },
});

// כפתור מותאם אישית
const NavButton = styled(Button)(({ theme }) => ({
  color: 'white',
  margin: theme.spacing(0, 0.5),
  fontFamily: "'Assistant', 'Heebo', sans-serif",
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
}));

export const Navigation = () => {
 
  // קבלת פרטי המשתמש מה-Redux store
  const userType = useSelector(state => state.user?.userType || 'customer'); // 'admin', 'employee', 'customer'
  const userName = useSelector(state => state.user?.userDetails?.custName ||state.user?.userDetails?.ename|| 'אורח');
  const userDetails = useSelector(state => state.user?.userDetails);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // מצב התפריט הנייד
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState(null);



  // פונקציות לטיפול בתפריט
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // פונקציית התנתקות
  const handleLogout = () => {
    dispatch(editUserDetails({}));
    navigate('/welcome');
  };

  // ניווט לדפים שונים
  const navigateTo = (path) => {
    console.log("navigateTo called with path:", path);
    navigate(path);
    setMobileOpen(false);
    handleCloseUserMenu();
  };

  // הגדרת תפריטים שונים לפי סוג המשתמש
  const getMenuItems = () => {
    const commonItems = [
      { text: 'דף הבית', icon: <HomeIcon />, path: '/Home' },
    ];

    const customerItems = [
      { text: 'הזמנה חדשה', icon: <ShoppingCartIcon />, path: '/newOrder' },
      { text: 'ההזמנות שלי', icon: <HistoryIcon />, path: '/oldOrders' },
      { text: 'הפרופיל שלי', icon: <PersonIcon />, path: '/profile' },
      { text: 'צור קשר', icon: <SupportAgentIcon />, path: '/contact' },
    ];

    const employeeItems = [
      { text: 'הזמנות לקוחות', icon: <ShoppingCartIcon />, path: '/listOrdersForEmployee' },
      { text: 'ניהול מלאי', icon: <InventoryIcon />, path: 'manage/manageProducts' },
      { text: 'תמיכת לקוחות', icon: <SupportAgentIcon />, path: '/support' },
    ];

    const adminItems = [
      { text: 'ניהול עובדים', icon: <PeopleIcon />, path: 'manage/manageEmployees' },
      { text: 'ניהול לקוחות', icon: <PeopleIcon />, path: 'manage/manageCustomers' },
      { text: 'ניהול מלאי', icon: <InventoryIcon />, path: 'manage/manageProducts' },
      { text: 'דוחות וסטטיסטיקות', icon: <BarChartIcon />, path: 'manage/reports' },
      { text: 'הגדרות מערכת', icon: <SettingsIcon />, path: 'manage/settings' },
    ];

    switch (userType) {
      case 'admin':
        return [...commonItems, ...adminItems];
      case 'employee':
        return [...commonItems, ...employeeItems];
      default: // customer
        return [...commonItems, ...customerItems];
    }
  };

  // תפריט נייד (drawer)
  const drawer = (
    <Box sx={{ width: 280 }}>
      <DrawerHeader>
        <UserInfo>
          <Avatar sx={{ bgcolor: userType === 'admin' ? '#f44336' : userType === 'employee' ? '#2196f3' : '#4caf50' }}>
            {userName.charAt(0)}
          </Avatar>
          <Box>
            <Typography variant="subtitle1" fontWeight="bold">{userName}</Typography>
            <Typography variant="caption">
              {userType === 'admin' ? 'מנהל מערכת' : userType === 'employee' ? 'עובד' : 'לקוח'}
            </Typography>
          </Box>
        </UserInfo>
      </DrawerHeader>
      <Divider />
      <List>
        {getMenuItems().map((item) => (
          <ListItem component="button" key={item.text} onClick={() => navigateTo(item.path)}>
            <ListItemIcon sx={{ color: userType === 'admin' ? '#f44336' : userType === 'employee' ? '#2196f3' : '#4caf50' }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem component="button" onClick={handleLogout}>
          <ListItemIcon sx={{ color: '#757575' }}>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="התנתקות" />
        </ListItem>
      </List>
    </Box>
  );

  // צבע לפי סוג המשתמש
  const getUserColor = () => {
    switch (userType) {
      case 'admin':
        return '#f44336'; // אדום למנהל
      case 'employee':
        return '#2196f3'; // כחול לעובד
      default:
        return '#4caf50'; // ירוק ללקוח
    }
  };

  return (
    <>
      <TransparentAppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* תצוגת מובייל */}
            <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="open drawer"
                edge="start"
                color="inherit"
                onClick={handleDrawerToggle}
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
            
            {/* לוגו - מוצג בכל גודל מסך */}
            <Logo>
              <img src={`${process.env.PUBLIC_URL}/basisLabait2.jpg`} alt="Logo" />
              בניה ישירה
            </Logo>

            {/* תפריט למסך רחב */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
              {getMenuItems().map((item) => (
                <NavButton
                  key={item.text}
                  onClick={() => navigateTo(item.path)}
                  startIcon={item.icon}
                >
                  {item.text}
                </NavButton>
              ))}
            </Box>

            {/* אזור משתמש */}
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="הגדרות משתמש">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar 
                    sx={{ 
                      bgcolor: getUserColor(),
                      border: `2px solid ${getUserColor()}` 
                    }}
                  >
                    {userName.charAt(0)}
                  </Avatar>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={() => navigateTo('/profile')}>
                  <PersonIcon sx={{ mr: 1 }} />
                  <Typography textAlign="center">הפרופיל שלי</Typography>
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                  <LogoutIcon sx={{ mr: 1 }} />
                  <Typography textAlign="center">התנתקות</Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </TransparentAppBar>

      {/* תפריט נייד */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // לביצועים טובים יותר במובייל
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 280 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};
