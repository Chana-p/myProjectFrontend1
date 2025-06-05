import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Profile.css'; // You'll need to create this CSS file

export const Profile = () => {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('info');
  const [editMode, setEditMode] = useState(false);
  const [userForm, setUserForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    company: '',
  });
  
  // Get user data from Redux store
  const userData = useSelector(state => state.user.custDetails);
  
  // Sample data for demonstration
  const [recentOrders, setRecentOrders] = useState([]);
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      duration: 800,
      once: false,
      mirror: true
    });
    
    // Simulate data loading
    setTimeout(() => {
      if (userData) {
        setUserForm({
          name: userData.custName || '',
          email: userData.email || '',
          phone: userData.phone || '',
          address: userData.address || '',
          company: userData.company || '',
        });
      }
      
      // Sample data for demonstration
      setRecentOrders([
        { id: 1001, date: '15/04/2023', status: 'הושלמה', total: 1250.80 },
        { id: 1002, date: '02/05/2023', status: 'בהכנה', total: 876.40 },
        { id: 1003, date: '18/05/2023', status: 'נשלחה', total: 2340.15 }
      ]);
      
      setFavoriteProducts([
        { id: 101, name: 'מלט תמי 42.5', price: 29.90, image: '/cement.jpg' },
        { id: 102, name: 'פטיש 5 ק"ג', price: 149.90, image: '/hammer.jpg' },
        { id: 103, name: 'צינור PVC 110', price: 34.50, image: '/pipe.jpg' }
      ]);
      
      setNotifications([
        { id: 1, date: '20/05/2023', text: 'ההזמנה שלך #1003 נשלחה', read: false },
        { id: 2, date: '18/05/2023', text: 'מבצע חדש: 20% הנחה על כלי עבודה', read: true },
        { id: 3, date: '15/05/2023', text: 'ההזמנה שלך #1002 התקבלה', read: true }
      ]);
      
      setLoading(false);
    }, 1000);
  }, [userData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserForm({
      ...userForm,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would dispatch an action to update the user profile
    // For example: dispatch(updateUserProfile(userForm));
    setEditMode(false);
    // Show success message
    alert('הפרופיל עודכן בהצלחה!');
  };

  const markAllNotificationsAsRead = () => {
    setNotifications(notifications.map(notification => ({
      ...notification,
      read: true
    })));
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
    <div className="profile-page">
      <div className="container">
        {/* Profile Header */}
        <div className="profile-header" data-aos="fade-down">
          <div className="profile-cover">
            <div className="profile-avatar">
              {userForm.name ? (
                <div className="avatar-initials">
                  {userForm.name.split(' ').map(name => name[0]).join('')}
                </div>
              ) : (
                <i className="fas fa-user"></i>
              )}
            </div>
          </div>
          <div className="profile-info">
            <h1>{userForm.name || 'משתמש'}</h1>
            <p className="profile-meta">
              <span><i className="fas fa-envelope"></i> {userForm.email || 'אין מידע'}</span>
              <span><i className="fas fa-phone"></i> {userForm.phone || 'אין מידע'}</span>
            </p>
          </div>
        </div>

        {/* Profile Navigation */}
        <div className="profile-nav" data-aos="fade-up">
          <button 
            className={`nav-tab ${activeTab === 'info' ? 'active' : ''}`}
            onClick={() => setActiveTab('info')}
          >
            <i className="fas fa-user"></i> פרטים אישיים
          </button>
          <button 
            className={`nav-tab ${activeTab === 'orders' ? 'active' : ''}`}
            onClick={() => setActiveTab('orders')}
          >
            <i className="fas fa-shopping-bag"></i> הזמנות
          </button>
          <button 
            className={`nav-tab ${activeTab === 'favorites' ? 'active' : ''}`}
            onClick={() => setActiveTab('favorites')}
          >
            <i className="fas fa-heart"></i> מוצרים מועדפים
          </button>
          <button 
            className={`nav-tab ${activeTab === 'notifications' ? 'active' : ''}`}
            onClick={() => setActiveTab('notifications')}
          >
            <i className="fas fa-bell"></i> התראות
            {notifications.filter(n => !n.read).length > 0 && (
              <span className="notification-badge">
                {notifications.filter(n => !n.read).length}
              </span>
            )}
          </button>
          <button 
            className={`nav-tab ${activeTab === 'settings' ? 'active' : ''}`}
            onClick={() => setActiveTab('settings')}
          >
            <i className="fas fa-cog"></i> הגדרות
          </button>
        </div>

        {/* Profile Content */}
        <div className="profile-content" data-aos="fade-up">
          {/* Personal Information Tab */}
          {activeTab === 'info' && (
            <div className="tab-content">
              <div className="section-header">
                <h2>פרטים אישיים</h2>
                <button 
                  className="btn-edit" 
                  onClick={() => setEditMode(!editMode)}
                >
                  {editMode ? 'ביטול' : 'עריכה'} <i className={`fas fa-${editMode ? 'times' : 'edit'}`}></i>
                </button>
              </div>

              {editMode ? (
                <form onSubmit={handleSubmit} className="profile-form">
                  <div className="form-group">
                    <label htmlFor="name">שם מלא</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={userForm.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">דואר אלקטרוני</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={userForm.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">טלפון</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={userForm.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="address">כתובת</label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={userForm.address}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="company">חברה</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={userForm.company}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-actions">
                    <button type="submit" className="btn-save">
                      שמור שינויים <i className="fas fa-save"></i>
                    </button>
                  </div>
                </form>
              ) : (
                <div className="profile-details">
                  <div className="detail-item">
                    <div className="detail-label">שם מלא</div>
                    <div className="detail-value">{userForm.name || 'לא הוגדר'}</div>
                  </div>
                  <div className="detail-item">
                    <div className="detail-label">דואר אלקטרוני</div>
                    <div className="detail-value">{userForm.email || 'לא הוגדר'}</div>
                  </div>
                  <div className="detail-item">
                    <div className="detail-label">טלפון</div>
                    <div className="detail-value">{userForm.phone || 'לא הוגדר'}</div>
                  </div>
                  <div className="detail-item">
                    <div className="detail-label">כתובת</div>
                    <div className="detail-value">{userForm.address || 'לא הוגדר'}</div>
                  </div>
                  <div className="detail-item">
                    <div className="detail-label">חברה</div>
                    <div className="detail-value">{userForm.company || 'לא הוגדר'}</div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Orders Tab */}
          {activeTab === 'orders' && (
            <div className="tab-content">
              <div className="section-header">
                <h2>ההזמנות שלי</h2>
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
                            <span className={`status-badge ${
                              order.status === 'הושלמה' ? 'completed' : 
                              order.status === 'נשלחה' ? 'shipped' : 'pending'
                            }`}>
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
                <div className="no-data-message">
                  <i className="fas fa-shopping-bag"></i>
                  <p>אין הזמנות להצגה</p>
                  <Link to="/products" className="btn-primary">התחל בקנייה</Link>
                </div>
              )}
            </div>
          )}

          {/* Favorites Tab */}
          {activeTab === 'favorites' && (
            <div className="tab-content">
              <div className="section-header">
                <h2>מוצרים מועדפים</h2>
              </div>
              
              {favoriteProducts.length > 0 ? (
                <div className="favorites-grid">
                  {favoriteProducts.map(product => (
                    <div key={product.id} className="product-card" data-aos="fade-up">
                      <div className="product-image">
                        <img src={`${process.env.PUBLIC_URL}${product.image}`} alt={product.name} />
                        <button className="btn-remove-favorite">
                          <i className="fas fa-heart-broken"></i>
                        </button>
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
              ) : (
                <div className="no-data-message">
                  <i className="fas fa-heart"></i>
                  <p>אין מוצרים מועדפים להצגה</p>
                  <Link to="/products" className="btn-primary">עבור לחנות</Link>
                </div>
              )}
            </div>
          )}

          {/* Notifications Tab */}
          {activeTab === 'notifications' && (
            <div className="tab-content">
              <div className="section-header">
                <h2>התראות</h2>
                {notifications.filter(n => !n.read).length > 0 && (
                  <button 
                    className="btn-mark-read"
                    onClick={markAllNotificationsAsRead}
                  >
                    סמן הכל כנקרא <i className="fas fa-check-double"></i>
                  </button>
                )}
              </div>
              
              {notifications.length > 0 ? (
                <div className="notifications-list">
                  {notifications.map(notification => (
                    <div 
                      key={notification.id} 
                      className={`notification-item ${!notification.read ? 'unread' : ''}`}
                      data-aos="fade-right"
                    >
                      <div className="notification-icon">
                        <i className="fas fa-bell"></i>
                      </div>
                      <div className="notification-content">
                        <p>{notification.text}</p>
                        <span className="notification-date">{notification.date}</span>
                      </div>
                      {!notification.read && (
                        <div className="notification-badge">חדש</div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="no-data-message">
                  <i className="fas fa-bell-slash"></i>
                  <p>אין התראות להצגה</p>
                </div>
              )}
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <div className="tab-content">
              <div className="section-header">
                <h2>הגדרות</h2>
              </div>
              
              <div className="settings-section">
                <h3>העדפות התראות</h3>
                <div className="settings-options">
                  <div className="setting-item">
                    <div className="setting-label">התראות על הזמנות</div>
                    <label className="switch">
                      <input type="checkbox" defaultChecked={true} />
                      <span className="slider round"></span>
                    </label>
                  </div>
                  <div className="setting-item">
                    <div className="setting-label">התראות על מבצעים</div>
                    <label className="switch">
                      <input type="checkbox" defaultChecked={true} />
                      <span className="slider round"></span>
                    </label>
                  </div>
                  <div className="setting-item">
                    <div className="setting-label">התראות על מוצרים חדשים</div>
                    <label className="switch">
                      <input type="checkbox" defaultChecked={false} />
                      <span className="slider round"></span>
                    </label>
                  </div>
                </div>
              </div>
              
              <div className="settings-section">
                <h3>אבטחה</h3>
                <div className="settings-options">
                  <button className="btn-change-password">
                    שינוי סיסמה <i className="fas fa-key"></i>
                  </button>
                  <button className="btn-two-factor">
                    הפעל אימות דו-שלבי <i className="fas fa-shield-alt"></i>
                  </button>
                </div>
              </div>
              
              <div className="settings-section">
                <h3>העדפות תצוגה</h3>
                <div className="settings-options">
                  <div className="setting-item">
                    <div className="setting-label">מצב כהה</div>
                    <label className="switch">
                      <input type="checkbox" defaultChecked={false} />
                      <span className="slider round"></span>
                    </label>
                  </div>
                  <div className="setting-item">
                    <div className="setting-label">גודל טקסט</div>
                    <div className="text-size-options">
                      <button className="text-size-option">A-</button>
                      <button className="text-size-option active">A</button>
                      <button className="text-size-option">A+</button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="settings-section danger-zone">
                <h3>אזור מסוכן</h3>
                <div className="settings-options">
                  <button className="btn-delete-account">
                    מחק חשבון <i className="fas fa-trash-alt"></i>
                  </button>
                </div>
                <p className="danger-note">פעולה זו תמחק את כל הנתונים שלך ואינה ניתנת לביטול.</p>
              </div>
            </div>
          )}
        </div>
        
        {/* Activity Summary */}
        <div className="activity-summary" data-aos="fade-up">
          <div className="summary-card">
            <div className="summary-icon">
              <i className="fas fa-shopping-bag"></i>
            </div>
            <div className="summary-info">
              <h3>{recentOrders.length}</h3>
              <p>הזמנות</p>
            </div>
          </div>
          <div className="summary-card">
            <div className="summary-icon">
              <i className="fas fa-heart"></i>
            </div>
            <div className="summary-info">
              <h3>{favoriteProducts.length}</h3>
              <p>מוצרים מועדפים</p>
            </div>
          </div>
          <div className="summary-card">
            <div className="summary-icon">
              <i className="fas fa-bell"></i>
            </div>
            <div className="summary-info">
              <h3>{notifications.filter(n => !n.read).length}</h3>
              <p>התראות חדשות</p>
            </div>
          </div>
          <div className="summary-card">
            <div className="summary-icon">
              <i className="fas fa-calendar-check"></i>
            </div>
            <div className="summary-info">
              <h3>3</h3>
              <p>חודשי חברות</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
 
