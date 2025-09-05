import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Workshop = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [galleryImages] = useState([
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80',
      alt: 'Moderne Werkstatt'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80',
      alt: 'Diagnosegerät'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80',
      alt: 'Karosseriearbeit'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80',
      alt: 'Lackierarbeiten'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80',
      alt: 'Motorenwerkstatt'
    }
  ]);

  const [features] = useState([
    {
      id: 1,
      title: 'Moderne Ausrüstung',
      description: 'Unsere Werkstatt ist mit den neuesten Diagnose- und Reparaturgeräten ausgestattet, um selbst komplexe Probleme zu lösen.',
      icon: (
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
      )
    },
    {
      id: 2,
      title: 'Zertifizierte Techniker',
      description: 'Unser Team besteht aus erfahrenen und zertifizierten Technikern mit jahrelanger Erfahrung in der Automobilbranche.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="#eac266" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20 21C20 16.5817 16.4183 13 12 13C7.58172 13 4 16.5817 4 21" stroke="#eac266" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 3,
      title: 'Originalteile',
      description: 'Wir verwenden ausschließlich Originalteile oder gleichwertige Qualitätsersatzteile für Reparaturen und Wartungen.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 8V12L15 15" stroke="#eac266" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3.05493 12C3.05493 7.02944 7.02944 3.05493 12 3.05493C16.9706 3.05493 20.9451 7.02944 20.9451 12C20.9451 16.9706 16.9706 20.9451 12 20.9451C7.02944 20.9451 3.05493 16.9706 3.05493 12Z" stroke="#eac266" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 4,
      title: 'Umweltfreundlich',
      description: 'Unsere Werkstatt arbeitet nach umweltfreundlichen Standards und recycelt Materialien wo immer möglich.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#eac266" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 16V12" stroke="#eac266" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 8H12.01" stroke="#eac266" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % galleryImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [galleryImages.length]);

  return (
    <div className="workshop-page">
      <section className="fullscreen-section workshop-header-section">
        <motion.div
          className="workshop-header glass"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Unsere Werkstatt
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Moderne Technologie trifft auf handwerkliche Expertise
          </motion.p>
        </motion.div>
      </section>
      
      <section className="workshop-gallery-section">
        <div className="gallery-container">
          <motion.div
            className="gallery-main"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img 
              src={galleryImages[activeImage].src} 
              alt={galleryImages[activeImage].alt} 
            />
          </motion.div>
          
          <motion.div
            className="gallery-thumbnails"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className={`thumbnail ${activeImage === index ? 'active' : ''}`}
                onClick={() => setActiveImage(index)}
              >
                <img src={image.src} alt={image.alt} />
              </div>
            ))}
          </motion.div>
        </div>
      </section>
      
      <section className="workshop-features-section">
        <div className="section-header">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Unsere Stärken
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Was uns von der Konkurrenz unterscheidet
          </motion.p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              className="feature-card glass"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10, 
                transition: { duration: 0.3 }
              }}
            >
              <div className="feature-icon">
                {feature.icon}
              </div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                {feature.title}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
              >
                {feature.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </section>
      
      <section className="workshop-stats-section">
        <div className="stats-container">
          <motion.div
            className="stat-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="stat-number">15+</div>
            <div className="stat-label">Jahre Erfahrung</div>
          </motion.div>
          
          <motion.div
            className="stat-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="stat-number">5000+</div>
            <div className="stat-label">Zufriedene Kunden</div>
          </motion.div>
          
          <motion.div
            className="stat-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="stat-number">50+</div>
            <div className="stat-label">Marken Expertise</div>
          </motion.div>
          
          <motion.div
            className="stat-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="stat-number">100%</div>
            <div className="stat-label">Originalteile</div>
          </motion.div>
        </div>
      </section>
      
      <style jsx>{`
        .workshop-header-section {
          background: linear-gradient(135deg, rgba(26, 26, 26, 0.95) 0%, rgba(10, 10, 10, 0.95) 100%);
          padding: 80px 20px 40px;
        }
        
        .workshop-header {
          text-align: center;
          padding: 60px;
          max-width: 900px;
          backdrop-filter: blur(15px);
          animation: fadeInDown 1s ease;
          border-radius: 25px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
        }
        
        .workshop-header h1 {
          font-size: 3.5rem;
          font-weight: 800;
          margin-bottom: 1.5rem;
          text-align: center;
          background: linear-gradient(45deg, #fff, #f0f0f0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .workshop-header p {
          font-size: 1.3rem;
          margin-bottom: 1.5rem;
          max-width: 700px;
          text-align: center;
          color: #f0f0f0;
        }
        
        .workshop-gallery-section {
          background: linear-gradient(135deg, rgba(10, 10, 10, 0.95) 0%, rgba(26, 26, 26, 0.95) 100%);
          padding: 80px 20px;
        }
        
        .gallery-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 30px;
        }
        
        .gallery-main {
          flex: 1;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.1);
          height: 500px;
        }
        
        .gallery-main img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        
        .gallery-main:hover img {
          transform: scale(1.05);
        }
        
        .gallery-thumbnails {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }
        
        .thumbnail {
          width: 130px;
          height: 130px;
          border-radius: 15px;
          overflow: hidden;
          cursor: pointer;
          border: 3px solid transparent;
          transition: all 0.3s ease;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }
        
        .thumbnail.active {
          border-color: #eac266;
          box-shadow: 0 0 25px rgba(234, 194, 102, 0.7);
          transform: scale(1.05);
        }
        
        .thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        
        .thumbnail:hover img {
          transform: scale(1.1);
        }
        
        .workshop-features-section {
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
        }
        
        .section-header p {
          font-size: 1.3rem;
          margin-bottom: 1.5rem;
          max-width: 700px;
          text-align: center;
          color: #f0f0f0;
        }
        
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 35px;
          padding: 50px;
          max-width: 1400px;
          margin: 0 auto;
        }
        
        .feature-card {
          padding: 40px 30px;
          text-align: center;
          backdrop-filter: blur(15px);
          border-radius: 20px;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
        }
        
        .feature-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
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
          color: #fff;
        }
        
        .feature-card p {
          font-size: 1.1rem;
          margin-bottom: 0;
          color: #f0f0f0;
          line-height: 1.6;
        }
        
        .workshop-stats-section {
          background: linear-gradient(135deg, rgba(10, 10, 10, 0.95) 0%, rgba(26, 26, 26, 0.95) 100%);
          padding: 80px 20px;
        }
        
        .stats-container {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 40px;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .stat-card {
          text-align: center;
          padding: 30px;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          min-width: 200px;
          transition: all 0.3s ease;
        }
        
        .stat-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
          background: rgba(255, 255, 255, 0.08);
        }
        
        .stat-number {
          font-size: 3rem;
          font-weight: 800;
          color: #eac266;
          margin-bottom: 10px;
          background: linear-gradient(45deg, #eac266, #a26e4b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .stat-label {
          font-size: 1.2rem;
          color: #f0f0f0;
          font-weight: 500;
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
        
        /* Responsive adjustments */
        @media (max-width: 1200px) {
          .gallery-main {
            height: 400px;
          }
          
          .thumbnail {
            width: 110px;
            height: 110px;
          }
          
          .features-grid {
            padding: 40px;
            gap: 25px;
          }
        }
        
        @media (max-width: 992px) {
          .workshop-header {
            padding: 40px 30px;
          }
          
          .workshop-header h1 {
            font-size: 3rem;
          }
          
          .workshop-header p {
            font-size: 1.2rem;
          }
          
          .gallery-main {
            height: 350px;
          }
          
          .thumbnail {
            width: 100px;
            height: 100px;
          }
          
          .section-header h2 {
            font-size: 2.8rem;
          }
          
          .section-header p {
            font-size: 1.1rem;
          }
          
          .stat-card {
            min-width: 180px;
            padding: 25px;
          }
        }
        
        @media (max-width: 768px) {
          .workshop-header-section {
            padding: 60px 15px 30px;
          }
          
          .workshop-header {
            padding: 30px 20px;
          }
          
          .workshop-header h1 {
            font-size: 2.5rem;
          }
          
          .workshop-header p {
            font-size: 1.1rem;
          }
          
          .workshop-gallery-section {
            padding: 50px 15px;
          }
          
          .gallery-main {
            height: 300px;
          }
          
          .gallery-thumbnails {
            gap: 15px;
          }
          
          .thumbnail {
            width: 80px;
            height: 80px;
          }
          
          .workshop-features-section {
            padding: 50px 15px;
          }
          
          .features-grid {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            padding: 30px;
            gap: 20px;
          }
          
          .feature-card {
            padding: 30px 20px;
          }
          
          .feature-icon {
            width: 60px;
            height: 60px;
          }
          
          .feature-card h3 {
            font-size: 1.5rem;
          }
          
          .workshop-stats-section {
            padding: 50px 15px;
          }
          
          .stats-container {
            gap: 25px;
          }
          
          .stat-card {
            min-width: 140px;
            padding: 20px;
          }
          
          .stat-number {
            font-size: 2.2rem;
          }
          
          .stat-label {
            font-size: 1rem;
          }
        }
        
        @media (max-width: 480px) {
          .workshop-header h1 {
            font-size: 2rem;
          }
          
          .gallery-main {
            height: 250px;
          }
          
          .thumbnail {
            width: 70px;
            height: 70px;
          }
          
          .section-header h2 {
            font-size: 2.2rem;
          }
          
          .features-grid {
            grid-template-columns: 1fr;
          }
          
          .stat-card {
            min-width: 120px;
            padding: 15px;
          }
          
          .stat-number {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Workshop;