import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Cars = () => {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('year');

  useEffect(() => {
    // In a real app, this would be an API call
    const mockCars = [
      {
        id: 1,
        brand: 'BMW',
        model: 'M3 Competition',
        year: 2023,
        power: '510 PS',
        tags: ['Sport', 'Neu', 'Premium'],
        heroImage: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80',
        price: '€89.900',
        description: 'Der ultimative Sportwagen mit atemberaubender Leistung und modernster Technologie.'
      },
      {
        id: 2,
        brand: 'Mercedes',
        model: 'AMG GT',
        year: 2022,
        power: '639 PS',
        tags: ['Luxus', 'Sport', 'Neu'],
        heroImage: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80',
        price: '€159.500',
        description: 'Luxus und Leistung vereint in einem atemberaubenden Coupe.'
      },
      {
        id: 3,
        brand: 'Audi',
        model: 'RS6 Avant',
        year: 2023,
        power: '600 PS',
        tags: ['Kombi', 'Sport', 'Premium'],
        heroImage: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80',
        price: '€124.900',
        description: 'Der schnellste Kombi der Welt mit atemberaubender Beschleunigung.'
      },
      {
        id: 4,
        brand: 'Porsche',
        model: '911 Turbo S',
        year: 2023,
        power: '650 PS',
        tags: ['Sport', 'Klassiker', 'Neu'],
        heroImage: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80',
        price: '€219.500',
        description: 'Der Legende treu geblieben - mit modernster Technologie und atemberaubender Leistung.'
      },
      {
        id: 5,
        brand: 'Tesla',
        model: 'Model S Plaid',
        year: 2023,
        power: '1.020 PS',
        tags: ['Elektro', 'Innovation', 'Neu'],
        heroImage: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80',
        price: '€129.900',
        description: 'Die Zukunft der Mobilität mit atemberaubender Beschleunigung und Reichweite.'
      },
      {
        id: 6,
        brand: 'Lamborghini',
        model: 'Huracán STO',
        year: 2022,
        power: '640 PS',
        tags: ['Supersport', 'Exklusiv', 'Premium'],
        heroImage: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80',
        price: '€329.000',
        description: 'Rennsport auf der Straße - das ultimative Fahrerlebnis.'
      }
    ];
    
    setCars(mockCars);
    setFilteredCars(mockCars);
    
    // Extract unique brands
    const uniqueBrands = [...new Set(mockCars.map(car => car.brand))];
    setBrands(uniqueBrands);
  }, []);

  useEffect(() => {
    let result = [...cars];
    
    // Filter by brand
    if (selectedBrand !== 'all') {
      result = result.filter(car => car.brand === selectedBrand);
    }
    
    // Filter by search term
    if (searchTerm) {
      result = result.filter(car => 
        car.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.model.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Sort results
    if (sortBy === 'year') {
      result.sort((a, b) => b.year - a.year);
    } else if (sortBy === 'brand') {
      result.sort((a, b) => a.brand.localeCompare(b.brand));
    } else if (sortBy === 'power') {
      // Simple sorting by power (extracting numbers)
      result.sort((a, b) => {
        const powerA = parseInt(a.power);
        const powerB = parseInt(b.power);
        return powerB - powerA;
      });
    } else if (sortBy === 'price') {
      // Simple sorting by price (extracting numbers)
      result.sort((a, b) => {
        const priceA = parseInt(a.price.replace(/[^0-9]/g, ''));
        const priceB = parseInt(b.price.replace(/[^0-9]/g, ''));
        return priceA - priceB;
      });
    }
    
    setFilteredCars(result);
  }, [selectedBrand, searchTerm, cars, sortBy]);

  return (
    <div className="cars-page">
      <section className="fullscreen-section cars-header-section">
        <motion.div
          className="cars-header glass"
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
            Unsere Fahrzeuge
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Entdecken Sie unsere exklusive Auswahl an modernen Fahrzeugen
          </motion.p>
          
          <motion.div
            className="cars-filters"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <input
              type="text"
              placeholder="Nach Marke oder Modell suchen..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="glass"
            />
            
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="glass"
            >
              <option value="all">Alle Marken</option>
              {brands.map(brand => (
                <option key={brand} value={brand}>{brand}</option>
              ))}
            </select>
            
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="glass"
            >
              <option value="year">Sortieren nach: Baujahr</option>
              <option value="brand">Sortieren nach: Marke</option>
              <option value="power">Sortieren nach: Leistung</option>
              <option value="price">Sortieren nach: Preis</option>
            </select>
          </motion.div>
        </motion.div>
      </section>
      
      <section className="cars-grid-section">
        <div className="cars-grid">
          {filteredCars.length > 0 ? (
            filteredCars.map((car, index) => (
              <motion.div
                key={car.id}
                className="car-card glass"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ 
                  y: -15, 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <div 
                  className="car-image"
                  style={{ backgroundImage: `url(${car.heroImage})` }}
                />
                
                <div className="car-info">
                  <motion.div
                    className="car-header"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <motion.h3
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      style={{ color: '#ffffff' }} /* Ensuring title is white */
                    >
                      {car.brand} {car.model}
                    </motion.h3>
                    <motion.div
                      className="car-price"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      {car.price}
                    </motion.div>
                  </motion.div>
                  
                  <motion.p
                    className="car-description"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {car.description}
                  </motion.p>
                  
                  <motion.div
                    className="car-details"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="car-detail">
                      <strong>Baujahr:</strong> {car.year}
                    </div>
                    <div className="car-detail">
                      <strong>Leistung:</strong> {car.power}
                    </div>
                  </motion.div>
                  
                  <motion.div
                    className="car-tags"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {car.tags.map(tag => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </motion.div>
                  
                  <motion.div
                    className="car-actions"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <button className="btn-modern primary">Details ansehen</button>
                    <button className="btn-modern secondary">Testfahrt buchen</button>
                  </motion.div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="no-cars">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{ color: '#ffffff' }} /* Ensuring title is white */
              >
                Keine Fahrzeuge gefunden
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Bitte ändern Sie Ihre Suchkriterien
              </motion.p>
            </div>
          )}
        </div>
      </section>
      
      <style jsx>{`
        .cars-header-section {
          background: linear-gradient(135deg, rgba(26, 26, 26, 0.95) 0%, rgba(10, 10, 10, 0.95) 100%);
          padding: 80px 20px 40px;
        }
        
        .cars-header {
          text-align: center;
          padding: 60px;
          max-width: 1000px;
          backdrop-filter: blur(15px);
          animation: fadeInDown 1s ease;
          border-radius: 25px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
        }
        
        .cars-header h1 {
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
        
        .cars-header p {
          font-size: 1.3rem;
          margin-bottom: 2.5rem;
          max-width: 700px;
          text-align: center;
          color: #f0f0f0;
        }
        
        .cars-filters {
          display: flex;
          gap: 25px;
          margin-top: 30px;
          width: 100%;
          max-width: 900px;
          flex-wrap: wrap;
          justify-content: center;
        }
        
        .cars-filters input,
        .cars-filters select {
          flex: 1;
          min-width: 220px;
          padding: 16px 20px;
          border-radius: 15px;
          background: rgba(255, 255, 255, 0.1);
          color: #fff;
          font-size: 1.05rem;
          outline: none;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
        }
        
        .cars-filters input::placeholder,
        .cars-filters select {
          color: rgba(255, 255, 255, 0.8);
        }
        
        .cars-filters input:focus,
        .cars-filters select:focus {
          background: rgba(255, 255, 255, 0.2);
          box-shadow: 0 0 25px rgba(234, 194, 102, 0.5);
          border-color: rgba(234, 194, 102, 0.7);
        }
        
        .cars-grid-section {
          background: linear-gradient(135deg, rgba(10, 10, 10, 0.95) 0%, rgba(26, 26, 26, 0.95) 100%);
          padding: 60px 20px;
        }
        
        .cars-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
          gap: 40px;
          padding: 40px;
          max-width: 1600px;
          margin: 0 auto;
        }
        
        .car-card {
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          backdrop-filter: blur(15px);
          transform: translateY(20px);
          opacity: 0;
          animation: fadeInUp 0.6s ease forwards;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .car-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
        }
        
        .car-image {
          height: 280px;
          background-size: cover;
          background-position: center;
          position: relative;
        }
        
        .car-info {
          padding: 30px;
        }
        
        .car-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 20px;
        }
        
        .car-header h3 {
          font-size: 1.8rem;
          font-weight: 700;
          margin: 0;
          color: #fff; /* Ensuring title is white */
        }
        
        .car-price {
          font-size: 1.5rem;
          font-weight: 700;
          color: #eac266;
          background: rgba(234, 194, 102, 0.15);
          padding: 5px 15px;
          border-radius: 10px;
          border: 1px solid rgba(234, 194, 102, 0.3);
        }
        
        .car-description {
          font-size: 1.05rem;
          margin-bottom: 25px;
          color: #ddd;
          line-height: 1.6;
        }
        
        .car-details {
          display: flex;
          gap: 25px;
          margin-bottom: 25px;
          flex-wrap: wrap;
        }
        
        .car-detail {
          font-size: 1rem;
          color: #ccc;
        }
        
        .car-detail strong {
          color: #eac266;
        }
        
        .car-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 25px;
          justify-content: flex-start;
        }
        
        .tag {
          background: linear-gradient(45deg, rgba(234, 194, 102, 0.3), rgba(162, 110, 75, 0.3));
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 500;
          backdrop-filter: blur(5px);
          border: 1px solid rgba(234, 194, 102, 0.2);
          color: #fff; /* Ensuring tag text is white */
        }
        
        .car-actions {
          display: flex;
          gap: 15px;
          flex-wrap: wrap;
        }
        
        .btn-modern.primary {
          background: linear-gradient(45deg, #eac266, #a26e4b);
          color: white;
          padding: 12px 20px;
          border-radius: 50px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
          text-align: center;
          border: none;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          font-size: 0.95rem;
          position: relative;
          overflow: hidden;
          flex: 1;
          min-width: 140px;
        }
        
        .btn-modern.secondary {
          background: transparent;
          color: white;
          padding: 12px 20px;
          border-radius: 50px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
          text-align: center;
          border: 2px solid #eac266;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          font-size: 0.95rem;
          position: relative;
          overflow: hidden;
          flex: 1;
          min-width: 140px;
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
        
        .no-cars {
          grid-column: 1 / -1;
          text-align: center;
          padding: 60px 20px;
        }
        
        .no-cars h3 {
          font-size: 2.2rem;
          margin-bottom: 20px;
          color: #fff; /* Ensuring title is white */
        }
        
        .no-cars p {
          font-size: 1.2rem;
          color: #ccc;
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
          .cars-grid {
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
            gap: 30px;
            padding: 30px;
          }
          
          .car-image {
            height: 250px;
          }
        }
        
        @media (max-width: 992px) {
          .cars-header {
            padding: 40px 30px;
          }
          
          .cars-header h1 {
            font-size: 3rem;
          }
          
          .cars-header p {
            font-size: 1.2rem;
          }
          
          .cars-filters {
            gap: 15px;
          }
          
          .cars-filters input,
          .cars-filters select {
            min-width: 180px;
            padding: 14px 18px;
            font-size: 1rem;
          }
        }
        
        @media (max-width: 768px) {
          .cars-header-section {
            padding: 60px 15px 30px;
          }
          
          .cars-header {
            padding: 30px 20px;
          }
          
          .cars-header h1 {
            font-size: 2.5rem;
          }
          
          .cars-header p {
            font-size: 1.1rem;
            margin-bottom: 2rem;
          }
          
          .cars-filters {
            flex-direction: column;
            gap: 15px;
          }
          
          .cars-filters input,
          .cars-filters select {
            min-width: 100%;
            padding: 15px;
          }
          
          .cars-grid-section {
            padding: 40px 15px;
          }
          
          .cars-grid {
            grid-template-columns: 1fr;
            gap: 25px;
            padding: 20px;
          }
          
          .car-image {
            height: 220px;
          }
          
          .car-info {
            padding: 25px;
          }
          
          .car-header {
            flex-direction: column;
            gap: 15px;
            align-items: flex-start;
          }
          
          .car-price {
            align-self: flex-start;
          }
          
          .car-actions {
            flex-direction: column;
            gap: 10px;
          }
          
          .btn-modern.primary, .btn-modern.secondary {
            width: 100%;
          }
        }
        
        @media (max-width: 480px) {
          .cars-header h1 {
            font-size: 2rem;
          }
          
          .cars-header p {
            font-size: 1rem;
          }
          
          .car-image {
            height: 200px;
          }
          
          .car-header h3 {
            font-size: 1.5rem;
          }
          
          .car-price {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Cars;