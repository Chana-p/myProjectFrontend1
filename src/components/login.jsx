

// // import { useEffect, useState } from "react"
// // import { useNavigate } from "react-router-dom";
// // import { useDispatch, useSelector } from "react-redux";
// // import './public.css'
// // import { editPassword, editcustomername } from "../redux/slices/userSlice";
// // export const Login = () => {
// //     const navigate = useNavigate();
// //     const CID = useSelector(state => state.user.CID);
// //     const EID = useSelector(state => state.user.EID);
// //     const failed = useSelector(state => state.user.failed);

// //     const [newcustomer, setNewcustomer] = useState(false)


// //     useEffect(() => {
// //         if (CID !== -1)
// //             navigate(`/Home`)
// //         if (EID === 10000) {
// //             navigate(`Manage`)
// //         }
// //         if (EID !== -1 && EID !== 10000)
// //             navigate(`/listOrdersForEmployee`)//employee    
// //         if (CID === -1 && failed) {
// //             setNewcustomer(true);
// //             console.log(details);
// //             navigate(`/newcustomer`);
// //         }
// //         console.log("failed"+failed);
// //         console.log("cid"+CID);
// //         console.log("eid"+EID);
// //     }, [failed, CID, EID])

// //     const backgroundStyle = {
// //         backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(${process.env.PUBLIC_URL}/basisLabait.jpg)`,
// //         backgroundSize: 'cover',
// //         backgroundPosition: 'center',
// //         backgroundRepeat: 'no-repeat',
// //         position: 'fixed',
// //         top: 0,
// //         left: 0,
// //         right: 0,
// //         bottom: 0,
// //         width: '100%',
// //         height: '100%',
// //         zIndex: -1
// //     };

// //     // סגנונות למיכל התוכן
// //     const contentWrapperStyle = {
// //         position: 'relative',
// //         minHeight: '100vh',
// //         width: '100%',
// //         display: 'flex',
// //         flexDirection: 'column',
// //         alignItems: 'center',
// //         justifyContent: 'center',
// //         padding: '20px',
// //         boxSizing: 'border-box'
// //     };

// //     // סגנונות לתוכן העיקרי
// //     const mainContentStyle = {
// //         backgroundColor: 'rgba(255, 255, 255, 0.9)',
// //         borderRadius: '12px',
// //         boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
// //         padding: '25px',
// //         margin: '20px auto',
// //         maxWidth: '1200px',
// //         width: '90%'
// //     };

// //     const [scaleFactor, setScaleFactor] = useState(1.2); // ערך התחלתי - 1.2 מגדיל ב-20%

// //     // 👇 הגדר את baseSize כאן, לפני השימוש בו
// //     const baseSize = {
// //       fontSize: {
// //         small: `${14 * scaleFactor}px`,
// //         base: `${16 * scaleFactor}px`,
// //         large: `${18 * scaleFactor}px`,
// //         xl: `${20 * scaleFactor}px`,
// //         xxl: `${24 * scaleFactor}px`,
// //         heading: `${32 * scaleFactor}px`,
// //       },
// //       spacing: {
// //         xs: `${5 * scaleFactor}px`,
// //         sm: `${10 * scaleFactor}px`,
// //         md: `${15 * scaleFactor}px`,
// //         lg: `${20 * scaleFactor}px`,
// //         xl: `${30 * scaleFactor}px`,
// //       },
// //       borderRadius: `${6 * scaleFactor}px`,
// //       inputHeight: `${40 * scaleFactor}px`,
// //       buttonHeight: `${44 * scaleFactor}px`,
// //     };
// //     // 👇 עדכן את סגנון הכפתור כך
// //     const buttonStyle = {
// //         // גרדיאנט בגווני חום-אדום
// //         background: 'linear-gradient(135deg, #C4A484 0%, #B87333 50%, #A0522D 100%)',
// //         color: 'white',
// //         border: 'none',
// //         padding: `${baseSize.spacing.sm} ${baseSize.spacing.lg}`,
// //         borderRadius: baseSize.borderRadius,
// //         cursor: 'pointer',
// //         fontSize: baseSize.fontSize.base,
// //         fontWeight: '500',
// //         height: baseSize.buttonHeight,
// //         minWidth: `${100 * scaleFactor}px`,
// //        // צל עדין
// //         boxShadow: '0 4px 6px rgba(139, 69, 19, 0.2)',
// //         // מעבר חלק לאפקטים בעת hover
// //         transition: 'all 0.3s ease',
// //         // הוסף מעט ברק לכפתור
// //         position: 'relative',
// //         overflow: 'hidden',
// //         // טקסט חד יותר
// //         textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)'
// //     };

// //     // 👇 הוסף סגנון למצב hover של הכפתור
// //     const handleButtonHover = (e) => {
// //         // גרדיאנט מעט יותר בהיר בעת hover
// //         e.target.style.background = 'linear-gradient(135deg, #9B5523 0%, #B53A3A 50%, #DD6C6C 100%)';
// //         e.target.style.boxShadow = '0 6px 12px rgba(139, 69, 19, 0.3)';
// //         // אפקט קל של הגדלה
// //         e.target.style.transform = 'translateY(-2px) scale(1.02)';
// //     };

// //     // 👇 הוסף סגנון למצב יציאה מ-hover
// //     const handleButtonLeave = (e) => {
// //         e.target.style.background = 'linear-gradient(135deg, #8B4513 0%, #A52A2A 50%, #CD5C5C 100%)';
// //         e.target.style.boxShadow = '0 4px 6px rgba(139, 69, 19, 0.2)';
// //         e.target.style.transform = 'translateY(0) scale(1)';
// //     };

// //     // 👇 הוסף סגנון למצב לחיצה על הכפתור
// //     const handleButtonActive = (e) => {
// //         e.target.style.background = 'linear-gradient(135deg, #7B3503 0%, #951A1A 50%, #BD4C4C 100%)';
// //         e.target.style.boxShadow = '0 2px 4px rgba(139, 69, 19, 0.3)';
// //         e.target.style.transform = 'translateY(1px) scale(0.98)';
// //     };

// //     const formContainerStyle = {
// //         width: '100%',
// //         height: '40vh',
// //         maxWidth: '800px', // הגבל את הרוחב המקסימלי
// //         margin: '0 auto', // מרכוז אופקי
// //         padding: '20px',
// //         boxSizing: 'border-box'
// //     };

// //     const inputStyle = {
// //         width: '100%',
// //         height: '90px',
// //         padding: '12px 15px',
// //         fontSize: '16px',
// //         border: '1px solid #e2e8f0', // צבע גבול בהיר יותר
// //         borderRadius: '6px',
// //         marginBottom: '15px',
// //         backgroundColor: '#faf8f5', // רקע בהיר מאוד
// //         color: '#2d3748',
// //         transition: 'all 0.3s ease',
// //         boxSizing: 'border-box',
// //         outline: 'none'
// //     };


// //     const handleFocus = (e) => {
// //         e.target.style.borderColor = '#4299e1'; // צבע גבול כחול בהיר בפוקוס
// //         e.target.style.boxShadow = '0 0 0 3px rgba(66, 153, 225, 0.15)'; // הילה כחולה בהירה
// //         e.target.style.backgroundColor = '#ffffff'; // רקע לבן בפוקוס
// //     };


// //     const handleBlur = (e) => {
// //         e.target.style.borderColor = '#cbd5e0'; // חזרה לצבע גבול רגיל
// //         e.target.style.boxShadow = 'none'; // הסרת ההילה
// //         e.target.style.backgroundColor = '#f7fafc'; // חזרה לרקע רגיל
// //     };
// //     return (
// //         <div style={backgroundStyle}>
// //             <div style={contentWrapperStyle}>
// //                 <div style={mainContentStyle}>
// //                     {!newcustomer && (
// //                         <div style={formContainerStyle} >
// //                             <input
// //                                 style={inputStyle}
// //                                 onFocus={handleFocus}
// //                                 onBlur={handleBlur}
// //                                 // className="input-field"
// //                                 type="text"
// //                                 onChange={(e) => setDetails({ ...details, customername: e.target.value })}
// //                                 placeholder="שם משתמש"
// //                             />
// //                             <input
// //                                 style={inputStyle}
// //                                 //    className="input-field"
// //                                 type="password"
// //                                 onFocus={handleFocus}
// //                                 onBlur={handleBlur}
// //                                 onChange={(e) => setDetails({ ...details, password: +e.target.value })}//int המרה ל   +  
// //                                 placeholder="סיסמה"
// //                             />
// //                             <button
// //                                 style={buttonStyle}
// //                                 onMouseEnter={handleButtonHover}
// //                                 onMouseLeave={handleButtonLeave}
// //                                 onMouseDown={handleButtonActive}
// //                                 onMouseUp={handleButtonLeave}
// //                                 // className="login-button"
// //                                 onFocus={handleFocus}
// //                                 onBlur={handleBlur}
// //                                 onClick={() => {
// //                                     dispatch(editPassword(details.password));
// //                                     dispatch(editcustomername(details.customername));
// //                                     dispatch(logInThunk(details));
// //                                 }}
// //                             >
// //                                 התחבר
// //                             </button>
// //                         </div>
// //                     )}
// //                 </div> </div></div>
// //     );
// // };
// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import '../styles/Login.css';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { editPassword, editcustomername } from "../redux/slices/userSlice";
// import { logInThunk } from "../redux/slices/logInThunk";
// import { useDispatch, useSelector } from 'react-redux';
// export const Login = () => {
//     console.log('Login component rendered');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const [details, setDetails] = useState({ customername: "", password: "" });
//     const CID = useSelector(state => state.user.CID);
//     const EID = useSelector(state => state.user.EID);
//     const failed = useSelector(state => state.user.failed);

//     const [newcustomer, setNewcustomer] = useState(false)
//     // אתחול ספריית האנימציות
//     useEffect(() => {
//         AOS.init({
//             duration: 800,
//             once: false,
//             mirror: true
//         });
//     }, []);
//     useEffect(() => {
//         if (CID !== -1)
//             navigate(`/Home`)
//         if (EID === 10000) {
//             navigate(`Manage`)
//         }
//         if (EID !== -1 && EID !== 10000)
//             navigate(`/listOrdersForEmployee`)//employee    
//         if (CID === -1 && failed) {
//             setNewcustomer(true);
//             console.log(details);
//             navigate(`/newcustomer`);
//         }
//         console.log("failed" + failed);
//         console.log("cid" + CID);
//         console.log("eid" + EID);
//     }, [failed, CID, EID])
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setError('');

//         // כאן תוכל להוסיף את הלוגיקה של ההתחברות
//         try {
//             // לדוגמה: קריאת API להתחברות
//             // const response = await fetch('/api/login', {
//             //   method: 'POST',
//             //   headers: { 'Content-Type': 'application/json' },
//             //   body: JSON.stringify({ email, password })
//             // });

//             // if (!response.ok) throw new Error('פרטי התחברות שגויים');
//             // const data = await response.json();

//             // שמירת פרטי המשתמש ב-localStorage או ב-context
//             // localStorage.setItem('user', JSON.stringify(data));

//             // ניווט לדף הבית לאחר התחברות מוצלחת
//             navigate('/dashboard');
//         } catch (err) {
//             setError(err.message || 'אירעה שגיאה בהתחברות');
//         }
//     };

//     return (
//         <div className="login-page">
//             {/* Hero Section */}
//             <div className="login-hero-section">
//                 <div className="container">
//                     <div className="login-content" data-aos="fade-up">
//                         <div className="login-logo-container">
//                             <img src={`${process.env.PUBLIC_URL}/basisLabait.jpg`} alt="בסיס לבית" className="login-logo" />
//                         </div>
//                         <div className="login-form-container" data-aos="fade-up" data-aos-delay="200">
//                             <h2>התחברות למערכת</h2>
//                             {error && <div className="error-message">{error}</div>}
//                             <form onSubmit={handleSubmit} className="login-form">
//                                 <div className="form-group">
//                                     <label >דואר אלקטרוני או שם פרטי</label>
//                                     <input
//                                         type="text"
//                                         id="email"
//                                         value={details.customername}
//                                         onChange={(e) => setDetails({ ...details, customername: e.target.value })}
//                                         required
//                                         placeholder="הזן את כתובת האימייל שלך"
//                                     />
//                                 </div>
//                                 <div className="form-group">
//                                     <label htmlFor="password">סיסמה</label>
//                                     <input
//                                         type="password"
//                                         id="password"
//                                         value={details.password}
//                                         onChange={(e) => setDetails({ ...details, password: +e.target.value })} 
//                                         required
//                                         placeholder="הזן את הסיסמה שלך"
//                                     />
//                                 </div>
//                                 <div className="form-actions">
//                                     <button  className="btn-login pulse-animation" onClick={() => {
//                                         dispatch(editPassword(details.password));
//                                         dispatch(editcustomername(details.customername));
//                                         dispatch(logInThunk(details));
//                                     }}>התחבר</button>
//                                     <div className="forgot-password">
//                                         <Link to="/forgot-password">שכחת סיסמה?</Link>
//                                     </div>
//                                 </div>
//                             </form>
//                             <div className="register-link" data-aos="fade-up" data-aos-delay="300">
//                                 <p>עדיין אין לך חשבון?</p>
//                                 <Link to="/newcustomer" className="btn-register">הרשמה כלקוח חדש</Link>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//             </div>

//             {/* Footer */}
//             <footer className="login-footer">
//                 <div className="container">
//                     <div className="footer-content">
//                         <div className="footer-info">
//                             <p>© 2023 כל הזכויות שמורות לחברת בסיס לבית בע"מ</p>
//                         </div>
//                         <div className="footer-links">
//                             <Link to="/">חזרה לדף הבית</Link>
//                             <span className="separator">|</span>
//                             <Link to="/contact">צור קשר</Link>
//                             <span className="separator">|</span>
//                             <Link to="/terms">תנאי שימוש</Link>
//                         </div>
//                     </div>
//                 </div>
//             </footer>
//         </div>
//     );
// };

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Login.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { editPassword, editcustomername } from "../redux/slices/userSlice";
import { logInThunk } from "../redux/slices/logInThunk";
import { useDispatch, useSelector } from 'react-redux';

export const Login = () => {
    console.log('Login component rendered');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [details, setDetails] = useState({ customername: "", password: "" });
    const CID = useSelector(state => state.user.CID);
    const EID = useSelector(state => state.user.EID);
    const failed = useSelector(state => state.user.failed);
    const [newcustomer, setNewcustomer] = useState(false);

    // אתחול ספריית האנימציות
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
            mirror: true
        });
    }, []);

    // טיפול בניווט בהתאם למצב המשתמש
    useEffect(() => {
        // מונע ניווט בטעינה הראשונית אם אין צורך
        if (CID === undefined || EID === undefined || failed === undefined) {
            return;
        }

        if (CID !== -1) {
            navigate(`/Home`);
            return; // חשוב להוסיף return כדי למנוע בדיקות נוספות
        }
        
        if (EID === 10000) {
            navigate(`/Manage`);
            return;
        }
        
        if (EID !== -1 && EID !== 10000) {
            navigate(`/listOrdersForEmployee`);
            return;
        }
        
        if (CID === -1 && failed) {
            setNewcustomer(true);
            navigate(`/newcustomer`);
            return;
        }
        
        // לוגים רק אם לא בוצע ניווט
        console.log("failed: " + failed);
        console.log("cid: " + CID);
        console.log("eid: " + EID);
    }, [failed, CID, EID, navigate]); // הוספנו navigate למערך התלויות

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        
        // שימוש בפעולות Redux
        dispatch(editPassword(details.password));
        console.log("dispatch(editPassword(details.password))");
        dispatch(editcustomername(details.customername));
        console.log("dispatch(editcustomername(details.customername))");
        dispatch(logInThunk(details));
        console.log("dispatch(logInThunk(details))");
        console.log("EID: " + EID);
        console.log("CID: " + CID);
    };

    return (
        <div className="login-page">
            {/* Hero Section */}
            <div className="login-hero-section">
                <div className="container">
                    <div className="login-content" data-aos="fade-up">
                        <div className="login-logo-container">
                            <img src={`${process.env.PUBLIC_URL}/basisLabait.jpg`} alt="בסיס לבית" className="login-logo" />
                        </div>
                        <div className="login-form-container" data-aos="fade-up" data-aos-delay="200">
                            <h2>התחברות למערכת</h2>
                            {error && <div className="error-message">{error}</div>}
                            <form onSubmit={handleSubmit} className="login-form">
                                <div className="form-group">
                                    <label>דואר אלקטרוני או שם פרטי</label>
                                    <input
                                        type="text"
                                        value={details.customername}
                                        onChange={(e) => setDetails({ ...details, customername: e.target.value })}
                                        required
                                        placeholder="הזן את כתובת האימייל שלך"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">סיסמה</label>
                                    <input
                                        type="password"
                                        id="password"
                                        value={details.password}
                                        onChange={(e) => setDetails({ ...details, password: +e.target.value })}
                                        required
                                        placeholder="הזן את הסיסמה שלך"
                                    />
                                </div>
                                <div className="form-actions">
                                    <button type="submit" className="btn-login pulse-animation">התחבר</button>
                                    <div className="forgot-password">
                                        <Link to="/forgot-password">שכחת סיסמה?</Link>
                                    </div>
                                </div>
                            </form>
                            <div className="register-link" data-aos="fade-up" data-aos-delay="300">
                                <p>עדיין אין לך חשבון?</p>
                                <Link to="/newcustomer" className="btn-register">הרשמה כלקוח חדש</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer */}
            <footer className="login-footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-info">
                            <p>© 2023 כל הזכויות שמורות לחברת בסיס לבית בע"מ</p>
                        </div>
                        <div className="footer-links">
                            <Link to="/">חזרה לדף הבית</Link>
                            <span className="separator">|</span>
                            <Link to="/contact">צור קשר</Link>
                            <span className="separator">|</span>
                            <Link to="/terms">תנאי שימוש</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

