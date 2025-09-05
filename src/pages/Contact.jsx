import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState(''); // 'success', 'error', or ''
  const [errorMessage, setErrorMessage] = useState(''); // Specific error message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Use the proxy path for API requests
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();
      
      if (response.ok && result.success) {
        setFormStatus('success');
        setErrorMessage(''); // Clear any previous error message
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
        
        // Reset status after 5 seconds
        setTimeout(() => {
          setFormStatus('');
        }, 5000);
      } else {
        setFormStatus('error');
        setErrorMessage(result.message || 'Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.');
        // Keep the form data so the user doesn't have to re-enter everything
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus('error');
      setErrorMessage('Netzwerkfehler: Es konnte keine Verbindung zum Server hergestellt werden.');
      // Keep the form data so the user doesn't have to re-enter everything
    }
  };

  return (
    <div className="contact-page">
      <section className="fullscreen-section contact-header-section">
        <motion.div
          className="contact-header glass"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Kontakt
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Haben Sie Fragen? Wir helfen Ihnen gerne weiter
          </motion.p>
        </motion.div>
      </section>
      
      <section className="contact-content-section">
        <div className="contact-container">
          <motion.div
            className="contact-info glass"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Kontaktinformationen</h2>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C8.13401 2 5 5.13401 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13401 15.866 2 12 2Z" stroke="#eac266" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#eac266" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="contact-text">
                  <h3>Adresse</h3>
                  <p>Musterstraße 123<br />12345 Musterstadt</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 5C3 4.44772 3.44772 4 4 4H20C20.5523 4 21 4.44772 21 5V19C21 19.5523 20.5523 20 20 20H4C3.44772 20 3 19.5523 3 19V5Z" stroke="#eac266" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 5L12 14L21 5" stroke="#eac266" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="contact-text">
                  <h3>E-Mail</h3>
                  <p>info@autolux.de</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 5C3 4.44772 3.44772 4 4 4H20C20.5523 4 21 4.44772 21 5V19C21 19.5523 20.5523 20 20 20H4C3.44772 20 3 19.5523 3 19V5Z" stroke="#eac266" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 5L12 14L21 5" stroke="#eac266" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="contact-text">
                  <h3>Telefon</h3>
                  <p>+49 123 456 7890</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 8V12L15 15" stroke="#eac266" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3.05493 12C3.05493 7.02944 7.02944 3.05493 12 3.05493C16.9706 3.05493 20.9451 7.02944 20.9451 12C20.9451 16.9706 16.9706 20.9451 12 20.9451C7.02944 20.9451 3.05493 16.9706 3.05493 12Z" stroke="#eac266" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="contact-text">
                  <h3>Öffnungszeiten</h3>
                  <p>Mo-Fr: 8:00 - 18:00 Uhr<br />Sa: 9:00 - 14:00 Uhr</p>
                </div>
              </div>
            </div>
            
            <div className="social-links">
              <h3>Folgen Sie uns</h3>
              <div className="social-icons">
                <a href="#" className="social-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a href="#" className="social-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23 3.00005C22.0424 3.67552 20.9821 4.19216 19.86 4.53005C19.2577 3.83756 18.4573 3.34674 17.567 3.12397C16.6767 2.90121 15.7395 2.95724 14.8821 3.2845C14.0247 3.61176 13.2884 4.19445 12.773 4.95376C12.2575 5.71308 11.9877 6.61238 12 7.53005V8.53005C10.2426 8.57561 8.50127 8.18586 6.93101 7.39549C5.36074 6.60513 4.01032 5.43868 3 4.00005C3 4.00005 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.50005C20.9991 7.2215 20.9723 6.94364 20.92 6.67005C21.9406 5.66354 22.6608 4.39276 23 3.00005Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a href="#" className="social-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 11C9.65685 11 11 9.65685 11 8C11 6.34315 9.65685 5 8 5C6.34315 5 5 6.34315 5 8C5 9.65685 6.34315 11 8 11Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 22L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a href="#" className="social-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.76777C21.3679 10.9034 22 12.4448 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4448 10.6321 10.9034 11.7574 9.76777C12.8826 8.63214 14.4087 8 16 8Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 9H2V21H6V9Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="contact-form-container glass"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Kontaktformular</h2>
            
            {formStatus === 'success' && (
              <div className="form-message success">
                <p>Vielen Dank für Ihre Nachricht! Wir werden uns in Kürze bei Ihnen melden.</p>
              </div>
            )}
            
            {formStatus === 'error' && (
              <div className="form-message error">
                <p>{errorMessage || 'Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.'}</p>
              </div>
            )}
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">E-Mail *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Telefon</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Betreff *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Nachricht *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn-modern primary">
                Nachricht senden
              </button>
            </form>
          </motion.div>
        </div>
      </section>
      
      <section className="map-section">
        <div className="map-container">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.944211231696!2d13.40495431580903!3d52.52000657981277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e1e1f1b9b3d%3A0x421f0f8d8e8d8d0!2sBerlin%2C%20Germany!5e0!3m2!1sen!2sde!4v1650000000000!5m2!1sen!2sde"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Standort von AhmadLux+"
          ></iframe>
        </div>
      </section>
      
      <style jsx>{`
        .contact-header-section {
          background: linear-gradient(135deg, rgba(26, 26, 26, 0.95) 0%, rgba(10, 10, 10, 0.95) 100%);
          padding: 80px 20px 40px;
        }
        
        .contact-header {
          text-align: center;
          padding: 60px;
          max-width: 900px;
          backdrop-filter: blur(15px);
          animation: fadeInDown 1s ease;
          border-radius: 25px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
        }
        
        .contact-header h1 {
          font-size: 3.5rem;
          font-weight: 800;
          margin-bottom: 1.5rem;
          text-align: center;
          background: linear-gradient(45deg, #fff, #f0f0f0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .contact-header p {
          font-size: 1.3rem;
          margin-bottom: 1.5rem;
          max-width: 700px;
          text-align: center;
          color: #f0f0f0;
        }
        
        .contact-content-section {
          background: linear-gradient(135deg, rgba(10, 10, 10, 0.95) 0%, rgba(26, 26, 26, 0.95) 100%);
          padding: 80px 20px;
        }
        
        .contact-container {
          display: flex;
          gap: 40px;
          max-width: 1400px;
          margin: 0 auto;
          flex-wrap: wrap;
        }
        
        .contact-info {
          flex: 1;
          min-width: 300px;
          padding: 40px;
          border-radius: 20px;
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
        
        .contact-info h2 {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 30px;
          color: #fff;
        }
        
        .contact-details {
          margin-bottom: 40px;
        }
        
        .contact-item {
          display: flex;
          gap: 20px;
          margin-bottom: 30px;
        }
        
        .contact-icon {
          width: 50px;
          height: 50px;
          min-width: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(234, 194, 102, 0.1);
          border-radius: 50%;
          padding: 12px;
          border: 1px solid rgba(234, 194, 102, 0.3);
        }
        
        .contact-icon svg {
          width: 100%;
          height: 100%;
        }
        
        .contact-text h3 {
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 8px;
          color: #eac266;
        }
        
        .contact-text p {
          font-size: 1.1rem;
          color: #f0f0f0;
          line-height: 1.6;
          margin: 0;
        }
        
        .social-links h3 {
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 20px;
          color: #eac266;
        }
        
        .social-icons {
          display: flex;
          gap: 15px;
        }
        
        .social-icon {
          width: 45px;
          height: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .social-icon:hover {
          background: #eac266;
          transform: translateY(-3px);
        }
        
        .social-icon svg {
          width: 20px;
          height: 20px;
        }
        
        .contact-form-container {
          flex: 1;
          min-width: 300px;
          padding: 40px;
          border-radius: 20px;
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
        
        .contact-form-container h2 {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 30px;
          color: #fff;
        }
        
        .form-message {
          padding: 20px;
          border-radius: 15px;
          margin-bottom: 25px;
          text-align: center;
          animation: fadeIn 0.5s ease;
        }
        
        .form-message.success {
          background: linear-gradient(45deg, rgba(40, 167, 69, 0.3), rgba(40, 167, 69, 0.1));
          border: 1px solid rgba(40, 167, 69, 0.3);
        }
        
        .form-message.error {
          background: linear-gradient(45deg, rgba(220, 53, 69, 0.3), rgba(220, 53, 69, 0.1));
          border: 1px solid rgba(220, 53, 69, 0.3);
        }
        
        .form-message p {
          margin: 0;
          color: #fff;
          font-weight: 500;
        }
        
        .contact-form {
          width: 100%;
        }
        
        .form-row {
          display: flex;
          gap: 25px;
          margin-bottom: 25px;
          flex-wrap: wrap;
        }
        
        .form-group {
          flex: 1;
          margin-bottom: 25px;
          min-width: 250px;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 10px;
          font-weight: 600;
          color: #fff;
          font-size: 1.05rem;
        }
        
        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 16px 20px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.1);
          color: #fff;
          font-size: 1rem;
          outline: none;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.15);
          resize: vertical;
        }
        
        .form-group textarea {
          min-height: 150px;
        }
        
        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: rgba(255, 255, 255, 0.7);
        }
        
        .form-group input:focus,
        .form-group textarea:focus {
          background: rgba(255, 255, 255, 0.2);
          box-shadow: 0 0 20px rgba(234, 194, 102, 0.5);
          border-color: rgba(234, 194, 102, 0.7);
        }
        
        .btn-modern.primary {
          background: linear-gradient(45deg, #eac266, #a26e4b);
          color: white;
          padding: 16px 32px;
          border-radius: 50px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
          text-align: center;
          border: none;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          font-size: 1.1rem;
          position: relative;
          overflow: hidden;
          width: 100%;
          margin-top: 10px;
        }
        
        .btn-modern.primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
        }
        
        .map-section {
          background: linear-gradient(135deg, rgba(26, 26, 26, 0.95) 0%, rgba(10, 10, 10, 0.95) 100%);
          padding: 0 20px 80px;
        }
        
        .map-container {
          max-width: 1400px;
          height: 500px;
          margin: 0 auto;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        /* Responsive adjustments */
        @media (max-width: 1200px) {
          .contact-container {
            gap: 30px;
          }
          
          .contact-info, .contact-form-container {
            padding: 35px;
          }
        }
        
        @media (max-width: 992px) {
          .contact-header {
            padding: 40px 30px;
          }
          
          .contact-header h1 {
            font-size: 3rem;
          }
          
          .contact-header p {
            font-size: 1.2rem;
          }
          
          .contact-container {
            flex-direction: column;
            gap: 30px;
          }
          
          .contact-info, .contact-form-container {
            width: 100%;
          }
          
          .map-container {
            height: 400px;
          }
        }
        
        @media (max-width: 768px) {
          .contact-header-section {
            padding: 60px 15px 30px;
          }
          
          .contact-header {
            padding: 30px 20px;
          }
          
          .contact-header h1 {
            font-size: 2.5rem;
          }
          
          .contact-header p {
            font-size: 1.1rem;
          }
          
          .contact-content-section {
            padding: 50px 15px;
          }
          
          .contact-info, .contact-form-container {
            padding: 30px 25px;
          }
          
          .form-row {
            flex-direction: column;
            gap: 0;
          }
          
          .form-group {
            min-width: 100%;
          }
          
          .map-container {
            height: 350px;
          }
        }
        
        @media (max-width: 480px) {
          .contact-header h1 {
            font-size: 2rem;
          }
          
          .contact-info, .contact-form-container {
            padding: 25px 20px;
          }
          
          .contact-item {
            gap: 15px;
          }
          
          .contact-icon {
            width: 40px;
            height: 40px;
            min-width: 40px;
          }
          
          .map-container {
            height: 300px;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;