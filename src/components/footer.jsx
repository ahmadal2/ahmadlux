import { Link } from 'react-router-dom';
import './Footer.module.css';

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
    </footer>
  );
};

export default Footer;