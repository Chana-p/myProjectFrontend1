// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import "./login.css"
// import { addCustomerThunk } from "../redux/slices/addCustomerThunk";



// export const NewCustomer = () => {
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const customername = useSelector(state => state.user.customername);
//     const password = useSelector(state => state.user.password);
//     const [phone, setPhone] = useState("");
//     const [email, setEmail] = useState("");
//     const [address, setAddress] = useState("");
//     const CID = useSelector(state => state.user.CID);
//     const EID = useSelector(state => state.user.EID);
//     useEffect(() => {
//         console.log(customername + "customername");
//     }, [])

//     useEffect(() => {
//         if (CID !== -1) {
//             navigate(`/Home`)
//         }
//     }, [CID])
//     // useEffect(() => {
//     //     if (CID !== -1)
//     //         navigate(`Home`)
//     //     if (EID === 10000) {
//     //         navigate(`Manager`)
//     //     }
//     //     if (EID !== -1 && EID !== 10000)
//     //         navigate(`service`)//employee    
//     // }, [CID, EID])
//     return <div className="newcustomer-container">
//         <input className="newcustomerInput" type="text" value={customername} />
//         <input className="newcustomerInput" type="text" value={password} />
//         <input className="newcustomerInput" type="text" onChange={(e) => setPhone(e.target.value)} placeholder="your phone number" />
//         <input className="newcustomerInput" type="text" onChange={(e) => setEmail(e.target.value)} placeholder="your Email" />
//         <input className="newcustomerInput" type="text" onChange={(e) => setAddress(e.target.value)} placeholder="your address" />
//         <button className="newcustomerButton" onClick={async () => {
//             dispatch(addCustomerThunk({
//                 custId: password,
//                 custName: customername,
//                 custAddress: address,
//                 custEmail: email,
//                 custPhone: phone
//             }))
//         }}
//         >logOn</button>
//     </div>
// }

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/NewCustomer.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaIdCard,
  FaPhone,
  FaMapMarkerAlt,
  FaBuilding
} from 'react-icons/fa';
import { addCustomerThunk } from "../redux/slices/addCustomerThunk";
import { useDispatch, useSelector } from 'react-redux';

export const NewCustomer = () => {
  const [formData, setFormData] = useState({
    custId: '',
    custName: '',
    custEmail: '',
    custPhone: '',
    custAddress: '',
    password: '',
    confirmPassword: ''
  });
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const navigate = useNavigate();
  const customername = useSelector(state => state.user.customername);
  const password = useSelector(state => state.user.password);
  const CID = useSelector(state => state.user.CID);

  
  useEffect(() => {
    // אתחול ספריית האנימציות
    AOS.init({
      duration: 800,
      once: false,
      mirror: true
    });
    //אתחול הפרטים אם קיימים מניסיון התחברות
    if (customername && password) {
      setFormData({
        ...formData,
        custId: password,
        custName: customername,
        });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const newErrors = {};

    // בדיקת תעודת זהות
    if (!formData.custId) {
      newErrors.custId = 'יש להזין תעודת זהות';
    } else if (!/^\d{9}$/.test(formData.custId)) {
      newErrors.custId = 'תעודת זהות חייבת להכיל 9 ספרות';
    }

    // בדיקת שם
    if (!formData.custName) {
      newErrors.custName = 'יש להזין שם מלא';
    }

    // בדיקת אימייל
    if (!formData.custEmail) {
      newErrors.custEmail = 'יש להזין כתובת אימייל';
    } else if (!/\S+@\S+\.\S+/.test(formData.custEmail)) {
      newErrors.custEmail = 'יש להזין כתובת אימייל תקינה';
    }

    // בדיקת טלפון
    if (!formData.custPhone) {
      newErrors.custPhone = 'יש להזין מספר טלפון';
    } else if (!/^0\d{8,9}$/.test(formData.custPhone)) {
      newErrors.custPhone = 'יש להזין מספר טלפון תקין';
    }

    // בדיקת סיסמה
    if (!formData.password) {
      newErrors.password = 'יש להזין סיסמה';
    } else if (formData.password.length < 6) {
      newErrors.password = 'הסיסמה חייבת להכיל לפחות 6 תווים';
    }

    // בדיקת אימות סיסמה
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'הסיסמאות אינן תואמות';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      setIsSubmitting(true);

      try {
        dispatch(addCustomerThunk(formData));

        // הצגת הודעת הצלחה
        setSubmitSuccess(true);

        // ניווט לדף ההתחברות לאחר 2 שניות
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } catch (error) {
        setErrors({ submit: error.message || 'אירעה שגיאה בתהליך הרישום' });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="register-page">
      {/* Hero Section */}
      <div className="register-hero-section">
        <div className="register-wave-top">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
          </svg>
        </div>
        <div className="container">
          <div className="register-content" data-aos="fade-up">
            <div className="register-logo-container">
              <img src={`${process.env.PUBLIC_URL}/basisLabait.jpg`} style={{height:"10%",}} alt="בסיס לבית" className="register-logo" />
            </div>
            <div className="register-form-container" data-aos="fade-up" data-aos-delay="200">
              <h2>הרשמה כלקוח חדש</h2>
              <p className="register-subtitle">מלא את הפרטים הבאים כדי ליצור חשבון חדש</p>

              {submitSuccess ? (
                <div className="success-message" data-aos="zoom-in">
                  <div className="success-icon">✓</div>
                  <h3>ההרשמה בוצעה בהצלחה!</h3>
                  <p>מעבירים אותך לדף ההתחברות...</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="register-form">
                  {errors.submit && <div className="error-message">{errors.submit}</div>}

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="custId">
                        <FaIdCard className="input-icon" /> תעודת זהות
                      </label>
                      <input
                        type="text"
                        id="custId"
                        name="custId"
                        value={formData.custId}
                        onChange={handleChange}
                        placeholder="הזן תעודת זהות (9 ספרות)"
                        className={errors.custId ? 'error' : ''}
                      />
                      {errors.custId && <div className="error-text">{errors.custId}</div>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="custName">
                        <FaUser className="input-icon" /> שם מלא
                      </label>
                      <input
                        type="text"
                        id="custName"
                        name="custName"
                        value={formData.custName}
                        onChange={handleChange}
                        placeholder="הזן שם מלא"
                        className={errors.custName ? 'error' : ''}
                      />
                      {errors.custName && <div className="error-text">{errors.custName}</div>}
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="custEmail">
                        <FaEnvelope className="input-icon" /> דואר אלקטרוני
                      </label>
                      <input
                        type="email"
                        id="custEmail"
                        name="custEmail"
                        value={formData.custEmail}
                        onChange={handleChange}
                        placeholder="הזן כתובת אימייל"
                        className={errors.custEmail ? 'error' : ''}
                      />
                      {errors.custEmail && <div className="error-text">{errors.custEmail}</div>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="custPhone">
                        <FaPhone className="input-icon" /> טלפון
                      </label>
                      <input
                        type="tel"
                        id="custPhone"
                        name="custPhone"
                        value={formData.custPhone}
                        onChange={handleChange}
                        placeholder="הזן מספר טלפון"
                        className={errors.custPhone ? 'error' : ''}
                      />
                      {errors.custPhone && <div className="error-text">{errors.custPhone}</div>}
                    </div>
                  </div>

                  <div className="form-group full-width">
                    <label htmlFor="custAddress">
                      <FaMapMarkerAlt className="input-icon" /> כתובת
                    </label>
                    <input
                      type="text"
                      id="custAddress"
                      name="custAddress"
                      value={formData.custAddress}
                      onChange={handleChange}
                      placeholder="הזן כתובת מלאה"
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="password">
                        <FaLock className="input-icon" /> סיסמה
                      </label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="הזן סיסמה (לפחות 6 תווים)"
                        className={errors.password ? 'error' : ''}
                      />
                      {errors.password && <div className="error-text">{errors.password}</div>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="confirmPassword">
                        <FaLock className="input-icon" /> אימות סיסמה
                      </label>
                      <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="הזן שוב את הסיסמה"
                        className={errors.confirmPassword ? 'error' : ''}
                      />
                      {errors.confirmPassword && <div className="error-text">{errors.confirmPassword}</div>}
                    </div>
                  </div>

                  <div className="form-terms">
                    <label className="checkbox-container">
                      <input type="checkbox" required />
                      <span className="checkmark"></span>
                      אני מסכים/ה ל<Link to="/terms">תנאי השימוש</Link> ול<Link to="/privacy">מדיניות הפרטיות</Link>
                    </label>
                  </div>

                  <div className="form-actions">
                    <button type="submit" className="btn-register pulse-animation" disabled={isSubmitting}>
                      {isSubmitting ? 'מבצע רישום...' : 'הרשמה'}
                    </button>
                  </div>
                </form>
              )}

              <div className="login-link" data-aos="fade-up" data-aos-delay="300">
                <p>כבר יש לך חשבון?</p>
                <Link to="/login" className="btn-login-link">התחברות למערכת</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="register-wave-bottom">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffffff" fillOpacity="1" d="M0,160L48,170.7C96,181,192,203,288,202.7C384,203,480,181,576,165.3C672,149,768,139,864,154.7C960,171,1056,213,1152,218.7C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      {/* Footer */}
      <footer className="register-footer">
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
