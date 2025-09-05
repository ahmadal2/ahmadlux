import { Link } from 'react-router-dom';

const Footer = () => {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Fahrzeuge', path: '/fahrzeuge' },
    { name: 'Services', path: '/services' },
    { name: 'Werkstatt', path: '/werkstatt' },
    { name: 'Kontakt', path: '/kontakt' }
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <Link to="/" className="footer-logo">
          AhmadLux+
        </Link>
        
        <ul className="footer-links">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
        
        <div className="footer-info">
          <p className="footer-contact">
            <strong>Kontakt:</strong> +49 123 456 7890 | info@autolux.de
          </p>
          <p className="footer-address">
            <strong>Adresse:</strong> Musterstraße 123, 12345 Musterstadt
          </p>
        </div>
        
        <p className="copyright">
          &copy; {new Date().getFullYear()} AhmadLux+ Workshop. Alle Rechte vorbehalten.
        </p>
      </div>
      
      <style jsx>{`
        .footer {
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(26, 26, 26, 0.95) 100%);
          color: white;
          padding: 60px 20px 30px;
          text-align: center;
          backdrop-filter: blur(10px);
          border-top: 1px solid rgba(234, 194, 102, 0.2);
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .footer-logo {
          font-size: 2.8rem;
          font-weight: 800;
          margin-bottom: 25px;
          color: #fff; /* Ensuring footer logo is white */
          background: linear-gradient(45deg, #eac266, #a26e4b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: 2px;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .footer-logo:hover {
          transform: scale(1.05);
          text-shadow: 0 0 20px rgba(234, 194, 102, 0.5);
        }

        .footer-links {
          display: flex;
          list-style: none;
          margin: 35px 0;
          flex-wrap: wrap;
          justify-content: center;
          gap: 25px;
        }

        .footer-links li {
          margin: 0 20px;
        }

        .footer-links a {
          color: #fff !important; /* Making footer links white for better visibility */
          text-decoration: none;
          transition: all 0.3s ease;
          font-weight: 500;
          font-size: 1.1rem;
          position: relative;
          padding: 5px 0;
        }

        .footer-links a:hover {
          color: #eac266;
          transform: translateY(-3px);
        }

        .footer-links a::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #eac266, #a26e4b);
          transition: width 0.3s ease;
        }

        .footer-links a:hover::after {
          width: 100%;
        }

        .footer-info {
          margin: 30px 0;
          max-width: 600px;
        }

        .footer-contact, .footer-address {
          color: #fff !important; /* Making contact info white for better visibility */
          margin: 10px 0;
          font-size: 1rem;
          line-height: 1.6;
        }

        .footer-contact strong, .footer-address strong {
          color: #eac266; /* Gold for labels */
          font-weight: 600;
        }

        .copyright {
          margin-top: 35px;
          font-size: 0.95rem;
          color: #fff !important; /* Making copyright white for better visibility */
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 25px;
          width: 100%;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .footer {
            padding: 50px 15px 25px;
          }
          
          .footer-logo {
            font-size: 2.2rem;
          }
          
          .footer-links {
            gap: 15px;
            margin: 25px 0;
          }
          
          .footer-links li {
            margin: 10px 15px;
          }
          
          .footer-links a {
            font-size: 1rem;
          }
          
          .footer-contact, .footer-address {
            font-size: 0.9rem;
          }
          
          .copyright {
            font-size: 0.85rem;
            margin-top: 25px;
            padding-top: 20px;
          }
        }
        
        @media (max-width: 480px) {
          .footer-logo {
            font-size: 1.8rem;
          }
          
          .footer-links {
            flex-direction: column;
            gap: 10px;
          }
          
          .footer-links li {
            margin: 5px 0;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;