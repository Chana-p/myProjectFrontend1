// // import { useSelector } from "react-redux";
// // import { useNavigate } from "react-router-dom";
// // import Typography from '@mui/material/Typography';
// // import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
// // import Box from '@mui/material/Box';
// // import Link from '@mui/material/Link';
// // export const Home = () => {
// //     const preventDefault = (event) => event.preventDefault();
// //     const CName = useSelector(state => state.user.custDetails.custName);
// //     const navigate = useNavigate();
// //     const newOrd = () => {
// //         navigate('/newOrder')
// //     }
// //     const Ord = () => {
// //         navigate('/Orders')
// //     }
// //     const ImageSrc = styled('span')({
// //         position: 'absolute',
// //         left: 0,
// //         right: 0,
// //         top: 0,
// //         bottom: 0,
// //         backgroundSize: 'cover',
// //         backgroundPosition: 'center 40%',
// //     });

// //     const Image = styled('span')(({ theme }) => ({
// //         position: 'absolute',
// //         left: 0,
// //         right: 0,
// //         top: 0,
// //         bottom: 0,
// //         display: 'flex',
// //         alignItems: 'center',
// //         justifyContent: 'center',
// //         color: theme.palette.common.white,
// //     }));

// //     const ImageBackdrop = styled('span')(({ theme }) => ({
// //         position: 'absolute',
// //         left: 0,
// //         right: 0,
// //         top: 0,
// //         bottom: 0,
// //         backgroundColor: theme.palette.common.black,
// //         opacity: 0.4,
// //         transition: theme.transitions.create('opacity'),
// //     }));

// //     const ImageMarked = styled('span')(({ theme }) => ({
// //         height: 3,
// //         width: 18,
// //         backgroundColor: theme.palette.common.white,
// //         position: 'absolute',
// //         bottom: -2,
// //         left: 'calc(50% - 9px)',
// //         transition: theme.transitions.create('opacity'),
// //     }));



// //     return <div 
    
// //     style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/basisLabait.jpg"})`, height: "90vh" }}>
// //         <ImageSrc style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/basisLabait.jpg"})` }} />
// //         <ImageBackdrop className="MuiImageBackdrop-root" />
// //         <Image> <Typography component="span" variant="subtitle1" color="inherit" sx={(theme) => ({
// //             fontFamily: "cursive",
// //             position: 'relative', p: 4, pt: 2, pb: `calc(${theme.spacing(1)} + 6px)`,
// //         })}>
// //             <h1 style={{ fontSize: "xxx-large" }}>hello {CName}</h1>
// //             <h2 style={{ fontSize: "xx-large" }}>wellcome To Your Way To Perfect Building</h2>
// //             <span style={{}} onClick={newOrd}>new order</span><ImageMarked className="MuiImageMarked-root" />
// //             <span onClick={Ord}>my old orders</span>
// //             <ImageMarked className="MuiImageMarked-root" />
// //                  </Typography>  </Image>


// //     </div>
// // }

// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import Typography from '@mui/material/Typography';
// import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Link from '@mui/material/Link';
// import Button from '@mui/material/Button';
// import Container from '@mui/material/Container';
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';

// export const Home = () => {
//     const preventDefault = (event) => event.preventDefault();
//     const CName = useSelector(state => state.user.custDetails.custName);
//     const navigate = useNavigate();
//     const newOrd = () => {
//         navigate('/newOrder')
//     }
//     const Ord = () => {
//         navigate('/Orders')
//     }
//     const ImageSrc = styled('span')({
//         position: 'absolute',
//         left: 0,
//         right: 0,
//         top: 0,
//         bottom: 0,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center 40%',
//     });

//     const Image = styled('span')(({ theme }) => ({
//         position: 'absolute',
//         left: 0,
//         right: 0,
//         top: 0,
//         bottom: 0,
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         color: theme.palette.common.white,
//     }));

//     const ImageBackdrop = styled('span')(({ theme }) => ({
//         position: 'absolute',
//         left: 0,
//         right: 0,
//         top: 0,
//         bottom: 0,
//         backgroundColor: theme.palette.common.black,
//         opacity: 0.4,
//         transition: theme.transitions.create('opacity'),
//     }));

//     const ImageMarked = styled('span')(({ theme }) => ({
//         height: 3,
//         width: 18,
//         backgroundColor: theme.palette.common.white,
//         position: 'absolute',
//         bottom: -2,
//         left: 'calc(50% - 9px)',
//         transition: theme.transitions.create('opacity'),
//     }));

//     const ActionButton = styled(Button)(({ theme }) => ({
//         margin: theme.spacing(2),
//         color: theme.palette.common.white,
//         backgroundColor: 'rgba(0, 0, 0, 0.5)',
//         borderColor: theme.palette.common.white,
//         borderRadius: '25px',
//         padding: '15px 40px',
//         fontSize: '1.4rem',
//         fontWeight: 'bold',
//         fontFamily: "'Varela Round', 'Assistant', sans-serif",
//         transition: 'all 0.3s ease',
//         minWidth: '220px',
//         height: '70px',
//         whiteSpace: 'nowrap',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         '&:hover': {
//             backgroundColor: 'rgba(255, 255, 255, 0.2)',
//             transform: 'scale(1.05)',
//             boxShadow: '0 0 15px rgba(255, 255, 255, 0.5)',
//         },
//     }));

//     const ContentContainer = styled(Box)(({ theme }) => ({
//         textAlign: 'center',
//         padding: theme.spacing(4),
//         borderRadius: '15px',
//         backgroundColor: 'rgba(0, 0, 0, 0.6)',
//         backdropFilter: 'blur(5px)',
//         maxWidth: '900px',
//         margin: '0 auto',
//         boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
//         border: '1px solid rgba(255, 255, 255, 0.18)',
//     }));

//     const TagLine = styled(Typography)(({ theme }) => ({
//         color: '#f8f8f8',
//         margin: theme.spacing(3, 0),
//         fontStyle: 'italic',
//         fontFamily: "'Heebo', 'Assistant', sans-serif",
//         textShadow: '1px 1px 2px rgba(0,0,0,0.7)',
//     }));

//     return <div 
//         style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/basisLabait.jpg"})`, height: "90vh" }}>
//         <ImageSrc style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/basisLabait.jpg"})` }} />
//         <ImageBackdrop className="MuiImageBackdrop-root" />
//         <Image>
//             <ContentContainer>
//                 <Typography 
//                     variant="h1" 
//                     component="h1" 
//                     sx={{
//                         fontFamily: "'Rubik', 'Assistant', sans-serif",
//                         fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
//                         fontWeight: 'bold',
//                         marginBottom: 2,
//                         textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
//                         color: '#ffffff'
//                     }}
//                 >
//                     שלום {CName}
//                 </Typography>
                
//                 <Typography 
//                     variant="h2" 
//                     component="h2" 
//                     sx={{
//                         fontFamily: "'Rubik', 'Assistant', sans-serif",
//                         fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
//                         marginBottom: 2,
//                         textShadow: '1px 1px 3px rgba(0,0,0,0.5)',
//                         color: '#f0f0f0'
//                     }}
//                 >
//                     ברוכים הבאים לדרך שלך לבניין מושלם
//                 </Typography>
                
//                 <TagLine variant="h5">
//                     הזמנה ישירה מהיבואנים - מחירים ללא תחרות, איכות ללא פשרות 
                    
//                 </TagLine>
                
//                 <Box sx={{ my: 2 }}>
//                     <Typography variant="body1" sx={{ 
//                         color: '#e0e0e0', 
//                         maxWidth: '700px', 
//                         margin: '0 auto', 
//                         lineHeight: 1.6,
//                         fontSize: '1.1rem',
//                         fontFamily: "'Assistant', 'Heebo', sans-serif",
//                     }}>
//                         באתר שלנו תוכלו להזמין חומרי בניין ישירות מהיבואנים המובילים בשוק, 
//                         ללא פערי תיווך וללא המתנה מיותרת. אנו מתחייבים לאיכות מעולה, 
//                         שירות מקצועי ומשלוחים מהירים לכל רחבי הארץ.
//                     </Typography>
//                 </Box>
                
//                 <Grid container spacing={4} justifyContent="center" sx={{ mt: 2 }}>
//                     <Grid item>
//                         <ActionButton 
//                             variant="outlined" 
//                             onClick={newOrd}
//                             startIcon={<span role="img" aria-label="new" style={{ fontSize: '1.5rem', marginRight: '8px' }}>🏗️</span>}
//                         >
//                             הזמנה חדשה
//                         </ActionButton>
//                     </Grid>
//                     <Grid item>
//                         <ActionButton 
//                             variant="outlined" 
//                             onClick={Ord}
//                             startIcon={<span role="img" aria-label="history" style={{ fontSize: '1.5rem', marginRight: '8px' }}>📦</span>}
//                         >
//                             ההזמנות שלי
//                         </ActionButton>
//                     </Grid>
//                 </Grid>
                
//                 <Typography variant="subtitle1" sx={{ 
//                     mt: 4, 
//                     color: '#cccccc', 
//                     fontSize: '0.95rem',
//                     fontFamily: "'Assistant', 'Heebo', sans-serif",
//                 }}>
//                     מחפשים ייעוץ מקצועי? צוות המומחים שלנו זמין עבורכם בכל שאלה 🛠️
//                 </Typography>
//             </ContentContainer>
//         </Image>
//     </div>
// }

import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Home.css';
export const Home = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [recentOrders, setRecentOrders] = useState([]);
  const navigate = useNavigate();

  // אתחול ספריית האנימציות
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true
    });
    
    // כאן תוכל להוסיף את הלוגיקה לטעינת נתוני המשתמש, קטגוריות, מוצרים והזמנות אחרונות
    // לדוגמה:
    const fetchData = async () => {
      try {
        // בדיקה אם המשתמש מחובר
       // const user = useSelector(state=>state.user.custDetails);//localStorage.getItem('user');
        // if (!user) {
        //   navigate('/login');
        //   return;
        // }
        
        //setUserData(JSON.parse(user));
        
        // טעינת קטגוריות
        // const categoriesResponse = await fetch('/api/categories');
        // const categoriesData = await categoriesResponse.json();
        // setCategories(categoriesData);
        
        // לצורך הדוגמה, נשתמש בנתונים סטטיים
        setCategories([
          { id: 1, name: 'חומרי בניין', icon: 'building', count: 120 },
          { id: 2, name: 'כלי עבודה', icon: 'tools', count: 85 },
          { id: 3, name: 'אינסטלציה', icon: 'faucet', count: 64 },
          { id: 4, name: 'חשמל', icon: 'bolt', count: 92 }
        ]);
        
        setFeaturedProducts([
          { id: 101, name: 'מלט תמי 42.5', price: 29.90, image: '/cement.jpg' },
          { id: 102, name: 'פטיש 5 ק"ג', price: 149.90, image: '/hammer.jpg' },
          { id: 103, name: 'צינור PVC 110', price: 34.50, image: '/pipe.jpg' },
          { id: 104, name: 'כבל חשמל 3x2.5', price: 7.90, image: '/cable.jpg' }
        ]);
        
        setRecentOrders([
          { id: 1001, date: '15/04/2023', status: 'הושלמה', total: 1250.80 },
          { id: 1002, date: '02/05/2023', status: 'בהכנה', total: 876.40 }
        ]);
        
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
    
    fetchData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>טוען נתונים...</p>
      </div>
    );
  }

  return (
    <div className="home-page">
      {/* Header */}
      <header className="dashboard-header">
        <div className="container">
          <div className="header-content">
            <div className="logo-container">
              <img src={`${process.env.PUBLIC_URL}/basisLabait.jpg`} alt="בסיס לבית" className="header-logo" />
            </div>
            <div className="header-actions">
              <div className="user-welcome">
                <span>שלום, {userData?.custName || 'אורח'}</span>
              </div>
              <div className="header-buttons">
                <Link to="/cart" className="btn-cart">
                  <i className="fas fa-shopping-cart"></i>
                  <span className="cart-count">0</span>
                </Link>
                <button onClick={handleLogout} className="btn-logout">
                  <i className="fas fa-sign-out-alt"></i> התנתק
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="header-wave">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
            <path fill="#ffffff" fillOpacity="1" d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,42.7C960,43,1056,53,1152,53.3C1248,53,1344,43,1392,37.3L1440,32L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"></path>
          </svg>
        </div>
      </header>

      {/* Main Content */}
      <main className="dashboard-main">
        <div className="container">
          {/* Welcome Banner */}
          <section className="welcome-banner" data-aos="fade-up">
            <div className="banner-content">
              <h1>ברוכים הבאים למערכת ההזמנות</h1>
              <p>כאן תוכלו להזמין מוצרים, לעקוב אחר הזמנות ולנהל את החשבון שלכם</p>
              <Link to="/newOrder" className="btn-primary">התחל בקנייה</Link>
            </div>
            <div className="banner-image">
              <img  src={`${process.env.PUBLIC_URL}/basisLabait.jpg`} alt="בסיס לבית" />
            </div>
          </section>

          {/* Categories Section */}
          <section className="categories-section" data-aos="fade-up">
            <div className="section-header">
              <h2>קטגוריות מוצרים</h2>
              <Link to="/products" className="view-all">צפה בכל המוצרים</Link>
            </div>
            <div className="categories-grid">
              {categories.map(category => (
                <div key={category.id} className="category-card" data-aos="zoom-in" data-aos-delay={category.id * 100}>
                  <div className="category-icon">
                    <i className={`fas fa-${category.icon}`}></i>
                  </div>
                  <h3>{category.name}</h3>
                  <p>{category.count} מוצרים</p>
                  <Link to={`/products/category/${category.id}`} className="category-link">
                    צפה במוצרים <i className="fas fa-arrow-left"></i>
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* Featured Products */}
          <section className="featured-products" data-aos="fade-up">
            <div className="section-header">
              <h2>מוצרים מומלצים</h2>
              <Link to="/products/featured" className="view-all">צפה בכל המוצרים המומלצים</Link>
            </div>
            <div className="products-grid">
              {featuredProducts.map(product => (
                <div key={product.id} className="product-card" data-aos="fade-up" data-aos-delay={product.id % 100 * 50}>
                  <div className="product-image">
                    <img src={`${process.env.PUBLIC_URL}${product.image}`} alt={product.name} />
                  </div>
                  <div className="product-details">
                    <h3>{product.name}</h3>
                    <p className="product-price">₪{product.price.toFixed(2)}</p>
                    <div className="product-actions">
                      <button className="btn-add-to-cart">
                        <i className="fas fa-cart-plus"></i> הוסף לסל
                      </button>
                      <Link to={`/products/${product.id}`} className="btn-view-product">
                        <i className="fas fa-eye"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Recent Orders */}
          <section className="recent-orders" data-aos="fade-up">
            <div className="section-header">
              <h2>הזמנות אחרונות</h2>
              <Link to="/orders" className="view-all">צפה בכל ההזמנות</Link>
            </div>
            {recentOrders.length > 0 ? (
              <div className="orders-table-container">
                <table className="orders-table">
                  <thead>
                    <tr>
                      <th>מס' הזמנה</th>
                      <th>תאריך</th>
                      <th>סטטוס</th>
                      <th>סכום</th>
                      <th>פעולות</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentOrders.map(order => (
                      <tr key={order.id} data-aos="fade-right">
                        <td>#{order.id}</td>
                        <td>{order.date}</td>
                        <td>
                          <span className={`status-badge ${order.status === 'הושלמה' ? 'completed' : 'pending'}`}>
                            {order.status}
                          </span>
                        </td>
                        <td>₪{order.total.toFixed(2)}</td>
                        <td>
                          <Link to={`/orders/${order.id}`} className="btn-view-order">
                            צפה בפרטים
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="no-orders-message">
                <p>אין הזמנות אחרונות להצגה</p>
                <Link to="/products" className="btn-primary">התחל בקנייה</Link>
              </div>
            )}
          </section>

          {/* Quick Links */}
          <section className="quick-links" data-aos="fade-up">
            <div className="quick-link-card" data-aos="zoom-in">
              <div className="quick-link-icon">
                <i className="fas fa-file-invoice"></i>
              </div>
              <h3>הצעות מחיר</h3>
              <p>צפה בהצעות מחיר שהוכנו עבורך</p>
              <Link to="/quotes" className="quick-link-button">
                צפה בהצעות <i className="fas fa-arrow-left"></i>
              </Link>
            </div>
            <div className="quick-link-card" data-aos="zoom-in" data-aos-delay="100">
              <div className="quick-link-icon">
                <i className="fas fa-truck"></i>
              </div>
              <h3>מעקב משלוחים</h3>
              <p>עקוב אחר סטטוס המשלוחים שלך</p>
              <Link to="/shipments" className="quick-link-button">
                עקוב אחר משלוחים <i className="fas fa-arrow-left"></i>
              </Link>
            </div>
            <div className="quick-link-card" data-aos="zoom-in" data-aos-delay="200">
              <div className="quick-link-icon">
                <i className="fas fa-user-cog"></i>
              </div>
              <h3>הגדרות חשבון</h3>
              <p>עדכן את פרטי החשבון שלך</p>
              <Link to="/account" className="quick-link-button">
                עדכן פרטים <i className="fas fa-arrow-left"></i>
              </Link>
            </div>
            <div className="quick-link-card" data-aos="zoom-in" data-aos-delay="300">
              <div className="quick-link-icon">
                <i className="fas fa-headset"></i>
              </div>
              <h3>תמיכה</h3>
              <p>צור קשר עם נציג שירות לקוחות</p>
              <Link to="/support" className="quick-link-button">
                צור קשר <i className="fas fa-arrow-left"></i>
              </Link>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="dashboard-footer">
        <div className="footer-wave">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
          <path fill="#5d4037" fillOpacity="1" d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,42.7C960,43,1056,53,1152,53.3C1248,53,1344,43,1392,37.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
          </svg>
        </div>
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <img src={`${process.env.PUBLIC_URL}/basisLabait.jpg`} alt="בסיס לבית" />
            </div>
            <div className="footer-info">
              <p>© 2023 כל הזכויות שמורות לחברת בסיס לבית בע"מ</p>
              <p>רחוב הבונים 15, אזור התעשייה, חולון | טלפון: 03-1234567</p>
            </div>
            <div className="footer-links">
              <Link to="/terms">תנאי שימוש</Link>
              <span className="separator">|</span>
              <Link to="/privacy">מדיניות פרטיות</Link>
              <span className="separator">|</span>
              <Link to="/contact">צור קשר</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};




