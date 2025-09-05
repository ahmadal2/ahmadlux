import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Mock data for services
    const mockServices = [
      {
        id: 1,
        title: 'Wartung & Inspektion',
        description: 'Regelmäßige Wartung ist der Schlüssel zur Langlebigkeit Ihres Fahrzeugs. Unsere Experten führen gründliche Inspektionen durch, um sicherzustellen, dass Ihr Auto in Bestzustand bleibt.',
        price: 'Ab €89',
        duration: '2-4 Stunden',
        coverImage: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80',
        steps: [
          'Visuelle Inspektion aller Systeme',
          'Ölwechsel und Filtertausch',
          'Bremsencheck',
          'Reifendruckkontrolle',
          'Flüssigkeitsstände prüfen',
          'Detaillierter Wartungsbericht'
        ]
      },
      {
        id: 2,
        title: 'Reparatur & Diagnose',
        description: 'Unsere modernste Diagnosetechnologie und erfahrenen Techniker identifizieren und beheben selbst komplexe Probleme schnell und effizient.',
        price: 'Ab €120',
        duration: '1-5 Tage',
        coverImage: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80',
        steps: [
          'Computerdiagnose mit modernster Technik',
          'Fehlercodeanalyse',
          'Visuelle Inspektion',
          'Komponententest',
          'Reparaturplanung',
          'Qualitätssicherung'
        ]
      },
      {
        id: 3,
        title: 'Karosserie & Lack',
        description: 'Ob kleine Kratzer oder größere Schäden - unsere Karosserieexperten stellen Ihr Fahrzeug optisch wieder her, als wäre es neu.',
        price: 'Ab €150',
        duration: '1-7 Tage',
        coverImage: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80',
        steps: [
          'Schadensanalyse',
          'Vorbereitung der Karosserie',
          'Lackierung',
          'Politur und Endaufbereitung',
          'Qualitätskontrolle',
          'Schutzversiegelung'
        ]
      },
      {
        id: 4,
        title: 'Tuning & Performance',
        description: 'Steigern Sie die Leistung Ihres Fahrzeugs mit unseren maßgeschneiderten Tuning-Lösungen. Von Software-Optimierung bis hin zu Hardware-Upgrades.',
        price: 'Ab €500',
        duration: '2-10 Tage',
        coverImage: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80',
        steps: [
          'Leistungsanalyse',
          'Individuelle Beratung',
          'Software-Optimierung',
          'Hardware-Upgrades',
          'Leistungsprüfung',
          'Abstimmung und Feintuning'
        ]
      }
    ];
    
    setServices(mockServices);
  }, []);

  return (
    <div className="services-page">
      <section className="fullscreen-section services-header-section">
        <motion.div
          className="services-header glass"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            style={{ color: '#ffffff' }} /* Ensuring title is white */
          >
            Unsere Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Erstklassiger Service für Ihr Fahrzeug
          </motion.p>
        </motion.div>
      </section>
      
      <div className="services-content">
        {services.map((service, index) => (
          <motion.section
            key={service.id}
            className={`fullscreen-section service-section ${index % 2 === 0 ? 'even' : 'odd'}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="service-content">
              <motion.div
                className="service-image"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <img src={service.coverImage} alt={service.title} />
              </motion.div>
              
              <motion.div
                className="service-info glass"
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  viewport={{ once: true }}
                  style={{ color: '#ffffff' }} /* Ensuring title is white */
                >
                  {service.title}
                </motion.h2>
                
                <motion.p
                  className="service-description"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {service.description}
                </motion.p>
                
                <motion.div
                  className="service-details"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="service-meta">
                    <p><strong>Preis:</strong> {service.price}</p>
                    <p><strong>Dauer:</strong> {service.duration}</p>
                  </div>
                  
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.6 }}
                    viewport={{ once: true }}
                    style={{ color: '#ffffff' }} /* Ensuring title is white */
                  >
                    Leistungen:
                  </motion.h3>
                  
                  <ul>
                    {service.steps.map((step, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1 + i * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        {step}
                      </motion.li>
                    ))}
                  </ul>
                  
                  <motion.div
                    className="service-actions"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <button className="btn-modern primary">Termin vereinbaren</button>
                    <button className="btn-modern secondary">Details anfragen</button>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.section>
        ))}
      </div>
      
      <style jsx>{`
        .services-header-section {
          background: linear-gradient(135deg, rgba(26, 26, 26, 0.95) 0%, rgba(10, 10, 10, 0.95) 100%);
          padding: 80px 20px 40px;
        }
        
        .services-header {
          text-align: center;
          padding: 60px;
          max-width: 900px;
          backdrop-filter: blur(15px);
          animation: fadeInDown 1s ease;
          border-radius: 25px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
        }
        
        .services-header h1 {
          font-size: 3.5rem;
          font-weight: 800;
          margin-bottom: 1.5rem;
          text-align: center;
          background: linear-gradient(45deg, #fff, #f0f0f0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: #ffffff; /* Ensuring title is white */
        }
        
        .services-header p {
          font-size: 1.3rem;
          margin-bottom: 1.5rem;
          max-width: 700px;
          text-align: center;
          color: #f0f0f0;
        }
        
        .services-content {
          background: linear-gradient(135deg, rgba(10, 10, 10, 0.95) 0%, rgba(26, 26, 26, 0.95) 100%);
        }
        
        .service-section {
          padding: 80px 20px;
        }
        
        .service-section.even .service-content {
          flex-direction: row;
        }
        
        .service-section.odd .service-content {
          flex-direction: row-reverse;
        }
        
        .service-content {
          display: flex;
          height: 100%;
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          gap: 40px;
          align-items: center;
        }
        
        .service-image {
          flex: 1;
          height: 100%;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .service-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        
        .service-image:hover img {
          transform: scale(1.05);
        }
        
        .service-info {
          flex: 1;
          padding: 50px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          backdrop-filter: blur(15px);
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
        
        .service-info h2 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: #fff; /* Ensuring title is white */
        }
        
        .service-description {
          font-size: 1.2rem;
          margin-bottom: 30px;
          color: #f0f0f0;
          line-height: 1.7;
        }
        
        .service-meta {
          display: flex;
          gap: 30px;
          margin-bottom: 25px;
          flex-wrap: wrap;
        }
        
        .service-meta p {
          font-size: 1.1rem;
          margin: 0;
          color: #ddd;
        }
        
        .service-meta strong {
          color: #eac266;
        }
        
        .service-details h3 {
          font-size: 1.8rem;
          font-weight: 700;
          margin: 30px 0 20px;
          color: #fff; /* Ensuring title is white */
        }
        
        .service-details ul {
          list-style-type: none;
          padding: 0;
          margin: 0 0 30px;
        }
        
        .service-details ul li {
          padding: 12px 0;
          position: relative;
          padding-left: 35px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          color: #f0f0f0;
          font-size: 1.05rem;
        }
        
        .service-details ul li:last-child {
          border-bottom: none;
        }
        
        .service-details ul li:before {
          content: "✓";
          position: absolute;
          left: 0;
          color: #eac266;
          font-weight: bold;
          font-size: 1.3rem;
          background: rgba(234, 194, 102, 0.2);
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .service-actions {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }
        
        .btn-modern.primary {
          background: linear-gradient(45deg, #eac266, #a26e4b);
          color: white;
          padding: 14px 28px;
          border-radius: 50px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
          text-align: center;
          border: none;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          font-size: 1rem;
          position: relative;
          overflow: hidden;
          flex: 1;
          min-width: 160px;
        }
        
        .btn-modern.secondary {
          background: transparent;
          color: white;
          padding: 14px 28px;
          border-radius: 50px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
          text-align: center;
          border: 2px solid #eac266;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          font-size: 1rem;
          position: relative;
          overflow: hidden;
          flex: 1;
          min-width: 160px;
        }
        
        .btn-modern.primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
        }
        
        .btn-modern.secondary:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(234, 194, 102, 0.3);
          background: rgba(234, 194, 102, 0.1);
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
          .service-content {
            gap: 30px;
          }
          
          .service-info {
            padding: 40px;
          }
          
          .service-info h2 {
            font-size: 2.2rem;
          }
        }
        
        @media (max-width: 992px) {
          .services-header {
            padding: 40px 30px;
          }
          
          .services-header h1 {
            font-size: 3rem;
          }
          
          .services-header p {
            font-size: 1.2rem;
          }
          
          .service-section {
            padding: 60px 20px;
          }
          
          .service-content {
            flex-direction: column !important;
            gap: 30px;
          }
          
          .service-image {
            height: 400px;
          }
          
          .service-info {
            width: 100%;
            padding: 35px;
          }
          
          .service-meta {
            gap: 20px;
          }
        }
        
        @media (max-width: 768px) {
          .services-header-section {
            padding: 60px 15px 30px;
          }
          
          .services-header {
            padding: 30px 20px;
          }
          
          .services-header h1 {
            font-size: 2.5rem;
          }
          
          .services-header p {
            font-size: 1.1rem;
          }
          
          .service-section {
            padding: 50px 15px;
          }
          
          .service-image {
            height: 300px;
          }
          
          .service-info {
            padding: 30px 25px;
          }
          
          .service-info h2 {
            font-size: 2rem;
          }
          
          .service-description {
            font-size: 1.1rem;
          }
          
          .service-meta {
            flex-direction: column;
            gap: 15px;
          }
          
          .service-details h3 {
            font-size: 1.6rem;
          }
          
          .service-actions {
            flex-direction: column;
            gap: 15px;
          }
          
          .btn-modern.primary, .btn-modern.secondary {
            width: 100%;
          }
        }
        
        @media (max-width: 480px) {
          .services-header h1 {
            font-size: 2rem;
          }
          
          .service-image {
            height: 250px;
          }
          
          .service-info {
            padding: 25px 20px;
          }
          
          .service-info h2 {
            font-size: 1.8rem;
          }
          
          .service-description {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Services;