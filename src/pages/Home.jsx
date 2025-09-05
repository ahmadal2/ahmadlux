import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="fullscreen-section hero-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hero-content"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="hero-title"
          >
            Moderne Autos.
            <br />
            Meisterhafte Werkstatt.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hero-subtitle"
          >
            Erleben Sie die Fusion aus futuristischem Fahrzeugdesign und erstklassigem Service.
          </motion.p>
          
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link to="/fahrzeuge" className="btn-modern primary">
              Fahrzeuge ansehen
            </Link>
            <Link to="/services" className="btn-modern secondary">
              Unsere Services
            </Link>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ delay: 0.8, duration: 1.2 }}
          className="hero-background"
        />
      </section>
      
      {/* Features Section */}
      <section className="fullscreen-section features-section">
        <div className="section-header">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ color: '#ffffff' }} /* Ensuring title is white */
          >
            Warum AhmadLux+?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Entdecken Sie, was uns von der Konkurrenz unterscheidet
          </motion.p>
        </div>
        
        <div className="features-container">
          <motion.div
            className="feature-card glass"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div
              className="feature-icon"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 13H7C7.55228 13 8 12.5523 8 12V9C8 8.44772 7.55228 8 7 8H5C4.44772 8 4 8.44772 4 9V12C4 12.5523 4.44772 13 5 13Z" stroke="#eac266" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17 13H19C19.5523 13 20 12.5523 20 12V9C20 8.44772 19.5523 8 19 8H17C16.4477 8 16 8.44772 16 9V12C16 12.5523 16.4477 13 17 13Z" stroke="#eac266" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 16H8" stroke="#eac266" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 16H20" stroke="#eac266" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 16V19C8 19.5523 8.44772 20 9 20H15C15.5523 20 16 19.5523 16 19V16" stroke="#eac266" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 11V6C3 5.44772 3.44772 5 4 5H20C20.5523 5 21 5.44772 21 6V11" stroke="#eac266" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              style={{ color: '#ffffff' }} /* Ensuring title is white */
            >
              Premium Fahrzeuge
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Entdecken Sie unsere exklusive Auswahl an modernen Fahrzeugen mit erstklassiger Ausstattung und Technologie.
            </motion.p>
          </motion.div>
          
          <motion.div
            className="feature-card glass"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div
              className="feature-icon"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#eac266" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M19.4 15C18.7 17.2 17.2 19.4 15 19.4" stroke="#eac266" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 22C14.5 20.5 17.5 20.5 20 22" stroke="#eac266" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4.6 15C5.3 17.2 6.8 19.4 9 19.4" stroke="#eac266" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 22C9.5 20.5 6.5 20.5 4 22" stroke="#eac266" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4.6 9C5.3 6.8 6.8 4.6 9 4.6" stroke="#eac266" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 2C9.5 3.5 6.5 3.5 4 2" stroke="#eac266" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M19.4 9C18.7 6.8 17.2 4.6 15 4.6" stroke="#eac266" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 2C14.5 3.5 17.5 3.5 20 2" stroke="#eac266" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              style={{ color: '#ffffff' }} /* Ensuring title is white */
            >
              Meisterhafte Werkstatt
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Unsere zertifizierten Techniker bieten hochwertigen Service mit modernsten Diagnosegeräten.
            </motion.p>
          </motion.div>
          
          <motion.div
            className="feature-card glass"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div
              className="feature-icon"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#eac266" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M19.4 15C18.7 17.2 17.2 19.4 15 19.4" stroke="#eac266" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 22C14.5 20.5 17.5 20.5 20 22" stroke="#eac266" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4.6 15C5.3 17.2 6.8 19.4 9 19.4" stroke="#eac266" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 22C9.5 20.5 6.5 20.5 4 22" stroke="#eac266" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4.6 9C5.3 6.8 6.8 4.6 9 4.6" stroke="#eac266" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 2C9.5 3.5 6.5 3.5 4 2" stroke="#eac266" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M19.4 9C18.7 6.8 17.2 4.6 15 4.6" stroke="#eac266" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 2C14.5 3.5 17.5 3.5 20 2" stroke="#eac266" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              style={{ color: '#ffffff' }} /* Ensuring title is white */
            >
              Innovation & Qualität
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Wir kombinieren innovative Technologien mit traditioneller Handwerkskunst für perfekte Ergebnisse.
            </motion.p>
          </motion.div>
        </div>
      </section>
      
      <style jsx>{`
        .hero-section {
          position: relative;
          overflow: hidden;
        }
        
        .hero-content {
          text-align: center;
          z-index: 2;
          max-width: 900px;
          padding: 30px;
          animation: fadeInUp 1s ease;
        }
        
        .hero-title {
          font-size: 4.5rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          text-align: center;
          /* Custom gradient colors */
          background: linear-gradient(45deg, #eac266, #a26e4b); /* Gold to brown gradient */
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        }
        
        .hero-subtitle {
          font-size: 1.4rem;
          margin-bottom: 2.5rem;
          max-width: 700px;
          text-align: center;
          color: #f0f0f0;
        }
        
        .hero-buttons {
          display: flex;
          gap: 30px;
          margin-top: 45px;
          justify-content: center;
          flex-wrap: wrap;
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
        }
        
        .btn-modern.secondary {
          background: transparent;
          color: white;
          padding: 16px 32px;
          border-radius: 50px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
          text-align: center;
          border: 2px solid #eac266;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          font-size: 1.1rem;
          position: relative;
          overflow: hidden;
        }
        
        .btn-modern.primary:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        }
        
        .btn-modern.secondary:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(234, 194, 102, 0.3);
          background: rgba(234, 194, 102, 0.1);
        }
        
        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: url('https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80') no-repeat center center;
          background-size: cover;
          filter: brightness(0.4) contrast(1.2);
          z-index: 1;
          animation: zoomIn 1.5s ease;
        }
        
        .features-section {
          background: linear-gradient(135deg, rgba(26, 26, 26, 0.95) 0%, rgba(10, 10, 10, 0.95) 100%);
          padding: 80px 20px;
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }
        
        .section-header h2 {
          font-size: 3.2rem;
          font-weight: 800;
          margin-bottom: 1.5rem;
          text-align: center;
          background: linear-gradient(45deg, #fff, #f0f0f0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: #ffffff; /* Ensuring title is white */
        }
        
        .section-header p {
          font-size: 1.3rem;
          margin-bottom: 1.5rem;
          max-width: 700px;
          text-align: center;
          color: #f0f0f0;
        }
        
        .features-container {
          display: flex;
          gap: 40px;
          max-width: 1400px;
          padding: 30px;
          flex-wrap: wrap;
          justify-content: center;
          margin: 0 auto;
        }
        
        .feature-card {
          flex: 1;
          min-width: 320px;
          padding: 50px 30px;
          text-align: center;
          backdrop-filter: blur(15px);
          animation: fadeInUp 0.8s ease;
          transform: translateY(20px);
          opacity: 0;
          animation-fill-mode: forwards;
          border-radius: 20px;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
        }
        
        .feature-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
        }
        
        .feature-card:nth-child(1) {
          animation-delay: 0.2s;
        }
        
        .feature-card:nth-child(2) {
          animation-delay: 0.4s;
        }
        
        .feature-card:nth-child(3) {
          animation-delay: 0.6s;
        }
        
        .feature-icon {
          width: 80px;
          height: 80px;
          margin: 0 auto 25px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(234, 194, 102, 0.1);
          border-radius: 50%;
          padding: 20px;
          border: 1px solid rgba(234, 194, 102, 0.3);
        }
        
        .feature-icon svg {
          width: 100%;
          height: 100%;
        }
        
        .feature-card h3 {
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 1.2rem;
          color: #fff; /* Ensuring title is white */
        }
        
        .feature-card p {
          font-size: 1.1rem;
          margin-bottom: 0;
          max-width: 100%;
          text-align: center;
          color: #f0f0f0;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(1.1);
          }
          to {
            opacity: 0.4;
            transform: scale(1);
          }
        }
        
        /* Responsive adjustments */
        @media (max-width: 1200px) {
          .hero-title {
            font-size: 3.5rem;
          }
          
          .hero-subtitle {
            font-size: 1.2rem;
          }
          
          .section-header h2 {
            font-size: 2.8rem;
          }
          
          .section-header p {
            font-size: 1.1rem;
          }
        }
        
        @media (max-width: 992px) {
          .hero-title {
            font-size: 3rem;
          }
          
          .hero-buttons {
            gap: 20px;
          }
          
          .btn-modern.primary, .btn-modern.secondary {
            padding: 14px 28px;
            font-size: 1rem;
          }
          
          .section-header h2 {
            font-size: 2.4rem;
          }
          
          .feature-card {
            min-width: 280px;
            padding: 40px 25px;
          }
        }
        
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          
          .hero-subtitle {
            font-size: 1.1rem;
          }
          
          .hero-buttons {
            flex-direction: column;
            gap: 15px;
            margin-top: 35px;
          }
          
          .features-container {
            gap: 25px;
            padding: 20px;
          }
          
          .feature-card {
            min-width: 100%;
          }
          
          .section-header h2 {
            font-size: 2rem;
          }
          
          .section-header p {
            font-size: 1rem;
          }
        }
        
        @media (max-width: 480px) {
          .hero-title {
            font-size: 2rem;
          }
          
          .hero-subtitle {
            font-size: 1rem;
          }
          
          .btn-modern.primary, .btn-modern.secondary {
            padding: 12px 24px;
            font-size: 0.95rem;
          }
          
          .feature-icon {
            width: 60px;
            height: 60px;
          }
          
          .feature-card h3 {
            font-size: 1.5rem;
          }
          
          .feature-card p {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;