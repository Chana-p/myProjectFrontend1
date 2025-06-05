import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Welcome.css';
import AOS from 'aos';

export const Welcome = () => {
  // אתחול ספריית האנימציות
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true
    });
  }, []);

  return (
    <div className="welcome-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="container">
          <div className="hero-content" data-aos="fade-up">
            <div className="logo-container">
              <img src={`${process.env.PUBLIC_URL}/basisLabait.jpg`} alt="בסיס לבית" className="hero-logo" />
            </div>
            <h1 data-aos="fade-up" data-aos-delay="200">פתרונות סיטונאיים מקצועיים לענף הבנייה</h1>
            <p data-aos="fade-up" data-aos-delay="300">הפלטפורמה המובילה להזמנת חומרי בניה, כלי עבודה וציוד מקצועי עבור חנויות, קבלנים ואנשי מקצוע</p>
            <div className="hero-buttons" data-aos="fade-up" data-aos-delay="400">
              <Link to="/login" className="btn btn-primary">התחברות למערכת</Link>
              <Link to="/newcustomer" className="btn btn-secondary">הרשמה כלקוח חדש</Link>
            </div>
          </div>
        </div>
        <div className="hero-wave">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">למה לבחור בנו?</h2>
          <div className="features-grid">
            <div className="feature-card" data-aos="fade-up" data-aos-delay="100">
              <div className="feature-icon">
                <i className="fas fa-truck-loading"></i>
              </div>
              <h3>מגוון רחב של מוצרים</h3>
              <p>אלפי פריטים של חומרי בניה, כלי עבודה, אביזרי אינסטלציה וחשמל, ציוד בטיחות ועוד</p>
            </div>
            <div className="feature-card" data-aos="fade-up" data-aos-delay="200">
              <div className="feature-icon">
                <i className="fas fa-tags"></i>
              </div>
              <h3>מחירים סיטונאיים</h3>
              <p>מחירים אטרקטיביים במיוחד לרכישות בכמויות גדולות עם הנחות מדורגות</p>
            </div>
            <div className="feature-card" data-aos="fade-up" data-aos-delay="300">
              <div className="feature-icon">
                <i className="fas fa-shipping-fast"></i>
              </div>
              <h3>משלוחים מהירים</h3>
              <p>אספקה מהירה לכל רחבי הארץ עם אפשרות למשלוח דחוף תוך 24 שעות</p>
            </div>
            <div className="feature-card" data-aos="fade-up" data-aos-delay="400">
              <div className="feature-icon">
                <i className="fas fa-headset"></i>
              </div>
              <h3>שירות לקוחות מקצועי</h3>
              <p>צוות מומחים זמין לענות על כל שאלה ולסייע בבחירת המוצרים המתאימים לצרכים שלכם</p>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="products-section">
        <div className="section-wave-top">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffffff" fillOpacity="1" d="M0,160L48,170.7C96,181,192,203,288,202.7C384,203,480,181,576,165.3C672,149,768,139,864,154.7C960,171,1056,213,1152,218.7C1248,224,1344,192,1392,176L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
          </svg>
        </div>
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">הקטגוריות המובילות שלנו</h2>
          <div className="products-grid">
            <div className="product-category" data-aos="flip-left" data-aos-delay="100">
              <div className="category-image building-materials">
              <img height={"auto"} width={"100%"} src={`${process.env.PUBLIC_URL}/tzaneret2.jpg`} alt="חומרי בניין" />
                </div>
              <h3>חומרי בניין</h3>
              <p>מלט, בלוקים, אבנים, חול, חצץ ועוד</p>
            </div>
            <div className="product-category" data-aos="flip-left" data-aos-delay="200">
              <div className="category-image tools">
              <img height={"auto"} width={"100%"} src={`${process.env.PUBLIC_URL}/cleyavoda.jpg`} alt="ן" />
              </div>
              <h3>כלי עבודה</h3>
              <p>כלי עבודה חשמליים, ידניים ומקצועיים</p>
            </div>
            <div className="product-category" data-aos="flip-left" data-aos-delay="300">
              <div className="category-image plumbing">
              <img height={"auto"} width={"100%"} src={`${process.env.PUBLIC_URL}/tzaneret3.jpg`} alt="חומרי בניין" />

              </div>
              <h3>אינסטלציה</h3>
              <p>צינורות, ברזים, מחברים ואביזרי אינסטלציה</p>
            </div>
            <div className="product-category" data-aos="flip-left" data-aos-delay="400">
              <div className="category-image electrical">
              <img height={"auto"} width={"100%"} src={`${process.env.PUBLIC_URL}/chashmal.jpg`} alt="חומרי בניין" />

              </div>
              <h3>חשמל</h3>
              <p>כבלים, מפסקים, תאורה וציוד חשמל</p>
            </div>
          </div>
          <div className="view-all-container" data-aos="fade-up">
            <Link to="/login" className="view-all-link">לצפייה בכל המוצרים</Link>
          </div>
        </div>
        <div className="section-wave-bottom">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials-section">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">לקוחות מספרים</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card" data-aos="zoom-in" data-aos-delay="100">
              <div className="testimonial-content">
                <p>"המערכת פשוטה לשימוש ומאפשרת לנו לנהל את המלאי בצורה יעילה. חסכנו זמן וכסף רב מאז שהתחלנו לעבוד עם החברה."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-image"></div>
                <div className="author-details">
                  <h4>יוסי כהן</h4>
                  <p>בעלים, חנות חומרי בניין "בונים חזק"</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card" data-aos="zoom-in" data-aos-delay="200">
              <div className="testimonial-content">
                <p>"השירות המהיר והמקצועי עזר לנו לעמוד בלוחות הזמנים של הפרויקטים שלנו. המחירים התחרותיים והמשלוחים האמינים הם יתרון משמעותי."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-image"></div>
                <div className="author-details">
                  <h4>דני לוי</h4>
                  <p>מנהל רכש, "לוי בנייה בע״מ"</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card" data-aos="zoom-in" data-aos-delay="300">
              <div className="testimonial-content">
                <p>"מגוון המוצרים העצום חוסך לנו את הצורך לעבוד עם מספר ספקים. הכל במקום אחד, במחירים טובים ועם שירות מעולה."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-image"></div>
                <div className="author-details">
                  <h4>מיכאל אברהם</h4>
                  <p>מנהל תפעול, "אברהם ובניו קבלנות"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faq-section">
        <div className="section-wave-top">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffffff" fillOpacity="1" d="M0,160L48,170.7C96,181,192,203,288,202.7C384,203,480,181,576,165.3C672,149,768,139,864,154.7C960,171,1056,213,1152,218.7C1248,224,1344,192,1392,176L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
          </svg>
        </div>
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">שאלות נפוצות</h2>
          <div className="faq-grid">
            <div className="faq-item" data-aos="fade-right" data-aos-delay="100">
              <h3>איך מבצעים הזמנה במערכת?</h3>
              <p>לאחר ההתחברות למערכת, ניתן לבחור מוצרים מהקטלוג, להוסיף אותם לסל הקניות ולהשלים את ההזמנה. ניתן גם לשמור הזמנות קבועות לרכישות חוזרות.</p>
            </div>
            <div className="faq-item" data-aos="fade-left" data-aos-delay="200">
              <h3>מהם זמני האספקה?</h3>
              <p>זמני האספקה הסטנדרטיים הם 2-3 ימי עסקים. לאזורים מרוחקים יתכן ויידרשו 3-5 ימי עסקים. קיימת אפשרות למשלוח דחוף תוך 24 שעות בתוספת תשלום.</p>
            </div>
            <div className="faq-item" data-aos="fade-right" data-aos-delay="300">
              <h3>האם יש מינימום להזמנה?</h3>
              <p>כן, סכום המינימום להזמנה הוא 1,000 ש"ח לפני מע"מ. הזמנות מעל 5,000 ש"ח מזכות במשלוח חינם.</p>
            </div>
            <div className="faq-item" data-aos="fade-left" data-aos-delay="400">
            <h3>איך ניתן לקבל הצעת מחיר מותאמת אישית?</h3>
            <p>לקוחות רשומים יכולים לפנות למנהל הלקוח שלהם לקבלת הצעות מחיר מותאמות אישית עבור פרויקטים גדולים או הזמנות מיוחדות.</p>
          </div>
        </div>
      </div>
    </div>

    {/* About Section */}
    <div className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text" data-aos="fade-right">
            <h2>אודות החברה</h2>
            <p>חברתנו הוקמה במטרה לספק פתרון מקיף וחדשני לענף הבנייה בישראל. אנו מתמחים באספקת חומרי בניה, כלי עבודה וציוד מקצועי לחנויות, קבלנים ואנשי מקצוע בכל רחבי הארץ.</p>
            <p>עם צוות של מעל 50 עובדים מקצועיים, מחסן לוגיסטי בשטח של 5,000 מ"ר ומערך הפצה יעיל, אנו מספקים שירות מהיר ואמין ללמעלה מ-1,000 לקוחות קבועים.</p>
            <p>החזון שלנו הוא להיות הספק המוביל בתחום חומרי הבניה והציוד המקצועי בישראל, תוך שמירה על ערכי השירות, האיכות והמקצועיות.</p>
          </div>
          <div className="about-image" data-aos="fade-left">
            <img src={`${process.env.PUBLIC_URL}/basisLabait.jpg`} alt="בסיס לבית" className="about-logo" />
          </div>
        </div>
      </div>
    </div>

    {/* CTA Section */}
    <div className="cta-section" data-aos="fade-up" data-aos-once="true">
      <div className="section-wave-top">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,160L48,170.7C96,181,192,203,288,202.7C384,203,480,181,576,165.3C672,149,768,139,864,154.7C960,171,1056,213,1152,218.7C1248,224,1344,192,1392,176L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
      </div>
      <div className="container">
        <h2 data-aos="fade-up" data-aos-delay="100" data-aos-once="true">מוכנים להתחיל?</h2>
        <p data-aos="fade-up" data-aos-delay="100" data-aos-once="true">הצטרפו לאלפי הלקוחות המרוצים שלנו והתחילו ליהנות מפתרונות הרכש המתקדמים שלנו</p>
        <div className="cta-buttons" data-aos="fade-up" data-aos-delay="200">
          <Link to="/login" className="btn btn-primary">התחברות למערכת</Link>
          <Link to="/newcustomer" className="btn btn-secondary">הרשמה כלקוח חדש</Link>
        </div>
      </div>
    </div>

    {/* Footer */}
    <footer className="welcome-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info" data-aos="fade-up" data-aos-delay="100">
            <h3>צרו קשר</h3>
            <p><i className="fas fa-map-marker-alt"></i> רחוב הבונים 15, אזור התעשייה, חולון</p>
            <p><i className="fas fa-phone"></i> 03-1234567</p>
            <p><i className="fas fa-envelope"></i> info@basis-labait.co.il</p>
          </div>
          <div className="footer-links" data-aos="fade-up" data-aos-delay="200">
            <h3>קישורים מהירים</h3>
            <ul>
              <li><Link to="/login">התחברות</Link></li>
              <li><Link to="/login">הרשמה</Link></li>
              <li><a href="#about">אודות</a></li>
              <li><a href="#faq">שאלות נפוצות</a></li>
            </ul>
          </div>
          <div className="footer-newsletter" data-aos="fade-up" data-aos-delay="300">
            <h3>הישארו מעודכנים</h3>
            <p>הירשמו לניוזלטר שלנו לקבלת עדכונים על מבצעים ומוצרים חדשים</p>
            <div className="newsletter-form" style={{direction:'ltr'}}>
              <input type="email" placeholder="הזינו את כתובת האימייל שלכם" />
              <button type="submit" className="pulse-animation">הרשמה</button>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-logo" data-aos="zoom-in">
            <img src={`${process.env.PUBLIC_URL}/basisLabait.jpg`} alt="בסיס לבית" />
          </div>
          <p>© 2025 כל הזכויות שמורות לחברת בסיס לבית בע"מ</p>
        </div>
      </div>
    </footer>
  </div>
);
};
