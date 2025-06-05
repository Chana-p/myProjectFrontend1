import React from 'react';
import { useSelector } from 'react-redux';
import { Navigation } from './components/navigation';
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import { Routing } from './components/routing';

export const App = () => {
  // בדיקה אם המשתמש מזוהה
  const isAuthenticated = useSelector(state => 
    state.user?.CID !== -1 || state.user?.EID !== -1
  );
  
  // קבלת הנתיב הנוכחי
  const location = useLocation();
  const currentPath = location.pathname;
  
  // בדיקה אם הנתיב הנוכחי הוא לוגין או לקוח חדש
  const isLoginOrNewCustomer = 
    currentPath === '/login' || 
    currentPath === '/newcustomer' ||
    currentPath === '/welcome';
  
  // הצגת התפריט רק אם המשתמש מזוהה וגם לא נמצא בדף לוגין או לקוח חדש
  const shouldShowNavigation = isAuthenticated || !isLoginOrNewCustomer;
  
  return (
    <div className="app-container">
      {shouldShowNavigation && <Navigation />}
      <main className="main-content">
        <Routing />
      </main>
    </div>
  );
};

export default App;
