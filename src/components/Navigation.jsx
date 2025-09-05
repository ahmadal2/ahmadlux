import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Fahrzeuge', path: '/fahrzeuge' },
    { name: 'Services', path: '/services' },
    { name: 'Werkstatt', path: '/werkstatt' },
    { name: 'Kontakt', path: '/kontakt' }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          AhmadLux+
        </Link>
        
        <ul className={`navbar-links ${mobileMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link 
                to={link.path} 
                className={location.pathname === link.path ? 'active' : ''}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        
        <div 
          className={`navbar-toggle ${mobileMenuOpen ? 'active' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      
      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 1000;
          padding: 20px;
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          backdrop-filter: blur(10px);
          background: rgba(0, 0, 0, 0.2);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .navbar.scrolled {
          background: rgba(0, 0, 0, 0.9);
          backdrop-filter: blur(15px);
          box-shadow: 0 5px 30px rgba(0, 0, 0, 0.3);
          padding: 15px 20px;
          border-bottom: 1px solid rgba(234, 194, 102, 0.3);
        }

        .navbar-container {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .navbar-logo {
          font-size: 2.2rem;
          font-weight: 800;
          color: #fff; /* Ensuring logo is white */
          text-decoration: none;
          background: linear-gradient(45deg, #eac266, #a26e4b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: 1px;
          transition: all 0.3s ease;
        }

        .navbar-logo:hover {
          transform: scale(1.05);
          text-shadow: 0 0 15px rgba(234, 194, 102, 0.5);
        }

        .navbar-links {
          display: flex;
          list-style: none;
        }

        .navbar-links li {
          margin-left: 35px;
        }

        .navbar-links a {
          color: #fff !important; /* Ensuring nav links are white */
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          position: relative;
          padding: 8px 0;
          font-size: 1.05rem;
          letter-spacing: 0.5px;
        }

        .navbar-links a:hover {
          color: #eac266;
        }

        .navbar-links a::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #eac266, #a26e4b);
          transition: width 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          border-radius: 2px;
        }

        .navbar-links a:hover::after {
          width: 100%;
        }

        .navbar-links a.active {
          color: #eac266;
        }

        .navbar-links a.active::after {
          width: 100%;
          background: linear-gradient(90deg, #eac266, #a26e4b);
        }

        .navbar-toggle {
          display: none;
          flex-direction: column;
          cursor: pointer;
          z-index: 1001;
        }

        .navbar-toggle span {
          width: 28px;
          height: 3px;
          background: #fff; /* Ensuring hamburger menu is white */
          margin: 4px 0;
          transition: 0.4s;
          border-radius: 2px;
        }

        .navbar-toggle.active span:nth-child(1) {
          transform: rotate(-45deg) translate(-7px, 6px);
          background: #eac266;
        }

        .navbar-toggle.active span:nth-child(2) {
          opacity: 0;
        }

        .navbar-toggle.active span:nth-child(3) {
          transform: rotate(45deg) translate(-7px, -6px);
          background: #eac266;
        }

        /* Responsive Navigation */
        @media (max-width: 1024px) {
          .navbar-links li {
            margin-left: 25px;
          }
        }

        @media (max-width: 768px) {
          .navbar-links {
            position: fixed;
            left: -100%;
            top: 0;
            flex-direction: column;
            background: rgba(0, 0, 0, 0.95);
            backdrop-filter: blur(20px);
            width: 100%;
            height: 100vh;
            text-align: center;
            transition: 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
            padding: 100px 0 0;
            margin: 0;
          }

          .navbar-links.active {
            left: 0;
          }

          .navbar-links li {
            margin: 20px 0;
          }

          .navbar-links a {
            font-size: 1.4rem;
            padding: 15px 0;
          }

          .navbar-toggle {
            display: flex;
          }
        }

        @media (max-width: 480px) {
          .navbar-logo {
            font-size: 1.8rem;
          }
          
          .navbar-links a {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navigation;