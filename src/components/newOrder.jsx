import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import '../styles/NewOrder.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { getProductsThunk } from '../redux/slices/getProductsThunk';
import { addOrderThunk } from "../redux/slices/addOrderThunk";
import { getEmployeesThunk } from '../redux/slices/getEmployeesThunk';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
// קומפוננטת אלרט מותאמת אישית
const CustomAlert = ({ isOpen, onClose, type, title, message, onConfirm }) => {
  if (!isOpen) return null;

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <i className="fas fa-check-circle"></i>;
      case 'error':
        return <i className="fas fa-exclamation-triangle"></i>;
      case 'warning':
        return <i className="fas fa-exclamation-circle"></i>;
      case 'info':
        return <i className="fas fa-info-circle"></i>;
      default:
        return <i className="fas fa-info-circle"></i>;
    }
  };

  return (
    <div className="custom-alert-overlay">
      <div className={`custom-alert custom-alert-${type}`}>
        <div className="alert-header">
          <div className="alert-icon">
            {getIcon()}
          </div>
          <h3 className="alert-title">{title}</h3>
        </div>
        <div className="alert-body">
          <p className="alert-message">{message}</p>
        </div>
        <div className="alert-actions">
          {onConfirm ? (
            <>
              <button className="alert-btn alert-btn-secondary" onClick={onClose}>
                ביטול
              </button>
              <button className="alert-btn alert-btn-primary" onClick={onConfirm}>
                אישור
              </button>
            </>
          ) : (
            <button className="alert-btn alert-btn-primary" onClick={onClose}>
              אישור
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export const NewOrder = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const products = useSelector(state => state.Products.productsList);
  const [categories, setCategories] = useState(['חומרי בניין', 'כלי עבודה', 'אינסטלציה', 'חשמל']);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState([]);
  const CID = useSelector(state => state.user.CID);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);
  const employees = useSelector(state => state.Employees.employees);
  const [listEmps, setListEmps] = useState(false);
  const [employee, setEmployee] = useState(null);
// State עבור האלרט המותאם אישית
  const [alert, setAlert] = useState({
    isOpen: false,
    type: 'info',
    title: '',
    message: '',
    onConfirm: null
  });

  // פונקציה להצגת אלרט
  const showAlert = (type, title, message, onConfirm = null) => {
    setAlert({
      isOpen: true,
      type,
      title,
      message,
      onConfirm
    });
  };

  // פונקציה לסגירת אלרט
  const closeAlert = () => {
    setAlert(prev => ({ ...prev, isOpen: false }));
  };
  // אתחול ספריית האנימציות
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true
    });

    // בדיקה אם המשתמש מחובר
    if (CID === -1) {
      navigate('/login');
      return;
    }
    // פונקציה לטעינת מוצרים מהשרת
    dispatch(getProductsThunk());
    setLoading(false);
  }, []);







  // פונקציה להוספת מוצר לסל
  const addToCart = (product) => {
    getEmps();
    const existingItem = cart.find(item => item.prodId === product.prodId);

    if (existingItem) {
      setCart(cart.map(item =>
        item.prodId === product.prodId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // פונקציה להסרת מוצר מהסל
  const removeFromCart = (productId) => {
  const product = cart.find(item => item.prodId === productId);

    showAlert(
      'warning',
      'האם אתה בטוח?',
      `האם ברצונך להסיר את "${product?.pname}" מההזמנה?`,
      () => {
        setCart(cart.filter(item => item.prodId !== productId));
        closeAlert();
        showAlert('info', 'הוסר מההזמנה', 'המוצר הוסר בהצלחה מההזמנה שלך');
      }
    );
  };

  // פונקציה לעדכון כמות של מוצר בסל
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;

    setCart(cart.map(item =>
      item.prodId === productId
        ? { ...item, quantity: newQuantity }
        : item
    ));
  };

  // פונקציה לסינון מוצרים לפי קטגוריה וחיפוש
  const filteredProducts = products?.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.pname.includes(searchTerm);
    return matchesCategory && matchesSearch;
  });

  // חישוב סכום ההזמנה
  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  //employees
  const getEmps = () => {
    if (employees.length === 0){
    dispatch(getEmployeesThunk());
    console.log(employees);
    setListEmps(true);
  }}
  const handleEmployeeChange = (event) => {
    setListEmps(true);
console.log(event.target.value);
    setEmployee(event.target.value);
  };


  // פונקציה לשליחת ההזמנה
  const submitOrder = async () => {
    if (cart.length === 0) {
      showAlert('warning', 'הסל ריק', 'אנא הוסף מוצרים לפני שליחת ההזמנה.');
      return;
    }

  showAlert(
      'info',
      'אישור הזמנה',
      'האם אתה בטוח שברצונך לשלוח את ההזמנה?',
      async () => {
        try {
          closeAlert();

          dispatch(addOrderThunk({
            details: cart.map(item => ({
              "prodId": item.prodId,
              "prodName": "string",
              "prodPic": "string",
              "orderId": 0,
              "count": item.quantity,
              "cost": 0
            })),
            id: CID,
            empId: employee ? employee : 0
          }));

          // אישור הזמנה
          showAlert('success', 'הזמנה נשלחה!', 'ההזמנה נשלחה בהצלחה! תקבל עדכון כשההזמנה תטופל.');
          setCart([]);

          setTimeout(() => {
            navigate('/orders');
          }, 2000);

        } catch (error) {
          console.error('Error submitting order:', error);
          showAlert('error', 'שגיאה', 'אירעה שגיאה בשליחת ההזמנה. אנא נסה שנית.');
        }
      }
    );
  };

  // תצוגת טעינה
  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>טוען מוצרים...</p>
      </div>
    );
  }

  return (
    <div className="new-order-page">
      {/* כותרת הדף */}
      <div className="order-header">
        <div className="container">
          <div className="header-content" data-aos="fade-up">
            <h1>הזמנה חדשה</h1>
            <p>בחר מוצרים מהקטלוג והוסף אותם להזמנה שלך</p>
          </div>
        </div>
        <div className="header-wave">
        </div>
      </div>

      {/* תוכן עיקרי */}
      <div className="order-content">
        <div className="container">
          <div className="order-grid">
            {/* חלק שמאלי - רשימת מוצרים */}
            <div className="products-section">
              <div className="filter-controls" data-aos="fade-up">
                <div className="search-box">
                  <input
                    type="text"
                    placeholder="חיפוש מוצרים..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <i className="fas fa-search"></i>
                </div>
                <div className="category-filter">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    <option value="all">כל הקטגוריות</option>
                    {categories.map((category, index) => (
                      <option key={index} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="products-grid">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map(product => (
                    <div className="product-card" key={product.prodId} data-aos="fade-up">
                      <div className="product-image">
                        <img src={`${`https://res.cloudinary.com/dvqdnn9c4/image/upload/v1751363224/products${product.ppicture}`}`} alt={product.name} />
                      </div>
                      <div className="product-details">
                        <h3>{product.pname}</h3>
                        <p className="product-category">כלי עבודה</p> {/*{product.category} */}
                        <p className="product-price">product.price.toFixed(2)</p>{/* ₪ 10*/}
                        <p className="product-stock">במלאי: {product.psum}</p>
                      </div>
                      <button
                        className="add-to-cart-btn"
                        onClick={() => addToCart(product)}
                      >
                        הוסף להזמנה <i className="fas fa-plus"></i>
                      </button>
                    </div>
                  ))
                ) : (
                  <div className="no-products-message">
                    <p>לא נמצאו מוצרים התואמים את החיפוש</p>
                  </div>
                )}
              </div>
            </div>

            {/* חלק ימני - סל הקניות */}
            <div className="cart-section" data-aos="fade-left">
              <div className="cart-container">
                <h2>סל ההזמנה שלך</h2>

                {cart.length > 0 ? (
                  <>
                    <div className="cart-items">
                      {cart.map(item => (
                        <div className="cart-item" key={item.prodId}>
                          <div className="item-image">
                            <img src={`${process.env.PUBLIC_URL}${item.image}`} alt={item.pname} />
                          </div>
                          <div className="item-details">
                            <h4>{item.pname}</h4>
                            <p className="item-price">₪10</p>
                          </div>
                          <div className="item-quantity">
                            <button
                              className="quantity-btn"
                              onClick={() => updateQuantity(item.prodId, item.quantity - 1)}
                            >
                              -
                            </button>
                            <span>{item.quantity}</span>
                            <button
                              className="quantity-btn"
                              onClick={() => updateQuantity(item.prodId, item.quantity + 1)}
                            >
                              +
                            </button>
                          </div>
                          <div className="item-total">
                            ₪{(10 * item.quantity)}
                          </div>
                          <button
                            className="remove-btn"
                            onClick={() => removeFromCart(item.prodId)}
                          >
                            <i className="fas fa-trash-alt"></i>
                          </button>
                        </div>
                      ))}
                    </div>

                    <div className="cart-summary">
                      <div className="summary-row">
                        <span>סה"כ מוצרים:</span>
                        <span>{cart.reduce((total, item) => total + item.quantity, 0)}</span>
                      </div>
                      <div className="summary-row">
                        <span>סה"כ לתשלום:</span>
                        <span className="cart-total">₪100</span>
                      </div>
                    </div>

                    <div className="cart-actions">
                      <button
                        className="submit-order-btn pulse-animation"
                        onClick={submitOrder}
                      >
                        שלח הזמנה
                      </button>
                      <button
                        className="clear-cart-btn"
                             onClick={() => {
                          showAlert(
                            'warning',
                            'נקה סל',
                            'האם אתה בטוח שברצונך לנקות את כל הסל?',
                            () => {
                              setCart([]);
                              closeAlert();
                              showAlert('info', 'הסל נוקה', 'כל המוצרים הוסרו מהסל בהצלחה');
                            }
                          );
                        }}
                      >
                        נקה סל
                      </button>
                      <FormControl sx={{ m: 1, minWidth: " 250px" }} onClick={(e) => setListEmps(true)}>
                        <InputLabel id="employee-select-label" >בחר עובד לטיפול בהזמנה</InputLabel>
                        <Select
                          labelId="employee-select-label"
                          id="employee-select"
                          value={employee}
                          label="בחר עובד לטיפול בהזמנה"
                          onChange={handleEmployeeChange}
                        >
                          {employees?.map((emp) => (
                            <MenuItem key={emp.ename} value={emp.empId}>
                              {emp.ename}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </div>
                  </>
                ) : (
                  <div className="empty-cart">
                    <i className="fas fa-shopping-cart"></i>
                    <p>הסל שלך ריק</p>
                    <p className="empty-cart-subtext">הוסף מוצרים מהקטלוג להזמנה שלך</p>
                  </div>
                )}

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* מידע נוסף */}
      <div className="order-info-section">
        <div className="section-wave-top">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffffff" fillOpacity="1" d="M0,160L48,170.7C96,181,192,203,288,202.7C384,203,480,181,576,165.3C672,149,768,139,864,154.7C960,171,1056,213,1152,218.7C1248,224,1344,192,1392,176L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
          </svg>
        </div>
        <div className="container">
          <div className="info-grid">
            <div className="info-card" data-aos="fade-up" data-aos-delay="100">
              <div className="info-icon">
                <i className="fas fa-truck"></i>
              </div>
              <h3>משלוחים</h3>
              <p>משלוחים מהירים לכל רחבי הארץ. הזמנות מעל 5,000 ש"ח - משלוח חינם!</p>
            </div>
            <div className="info-card" data-aos="fade-up" data-aos-delay="200">
              <div className="info-icon">
                <i className="fas fa-credit-card"></i>
              </div>
              <h3>תשלום</h3>
              <p>אפשרויות תשלום מגוונות: אשראי, העברה בנקאית, שוטף + 30/60/90.</p>
            </div>
            <div className="info-card" data-aos="fade-up" data-aos-delay="300">
              <div className="info-icon">
                <i className="fas fa-exchange-alt"></i>
              </div>
              <h3>החזרות והחלפות</h3>
              <p>ניתן להחזיר מוצרים תוך 14 יום מקבלת ההזמנה, בהתאם למדיניות החברה.</p>
            </div>
            <div className="info-card" data-aos="fade-up" data-aos-delay="400">
              <div className="info-icon">
                <i className="fas fa-headset"></i>
              </div>
              <h3>שירות לקוחות</h3>
              <p>צוות השירות שלנו זמין לענות על כל שאלה בימים א'-ה' בין השעות 8:00-17:00.</p>
            </div>
          </div>
        </div>
        <div className="section-wave-bottom">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      {/* הזמנות קודמות */}
      <div className="previous-orders-section">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">הזמנות אחרונות שלך</h2>
          <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
            לנוחיותך, תוכל לראות את ההזמנות האחרונות שביצעת ולהזמין שוב מוצרים שהזמנת בעבר
          </p>

          <div className="previous-orders-actions" data-aos="fade-up" data-aos-delay="200">
            <button className="view-all-orders-btn" onClick={() => navigate('/orders')}>
              צפה בכל ההזמנות <i className="fas fa-arrow-left"></i>
            </button>
          </div>
        </div>
      </div>

      {/* פוטר */}
      <footer className="order-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-info">
              <p>© 2023 כל הזכויות שמורות לחברת ContractorHub   בע"מ</p>
            </div>
            <div className="footer-support">
              <p>
                <i className="fas fa-phone"></i> לתמיכה: 03-1234567
              </p>
            </div>
          </div>
        </div>
      </footer>
      
      {/* קומפוננטת האלרט המותאמת אישית */}
      <CustomAlert
        isOpen={alert.isOpen}
        onClose={closeAlert}
        type={alert.type}
        title={alert.title}
        message={alert.message}
        onConfirm={alert.onConfirm}
      />
    </div>
  );
};
