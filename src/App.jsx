import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Cars from './pages/Cars.jsx';
import Services from './pages/Services.jsx';
import Workshop from './pages/Workshop.jsx';
import Contact from './pages/Contact.jsx';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fahrzeuge" element={<Cars />} />
            <Route path="/services" element={<Services />} />
            <Route path="/werkstatt" element={<Workshop />} />
            <Route path="/kontakt" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
      
      <style jsx global>{`
        /* Global Styles */
        :root {
          --primary-gradient: linear-gradient(45deg, #eac266, #a26e4b);
          --secondary-gradient: linear-gradient(45deg, #a26e4b, #eac266);
          --dark-bg: #0a0a0a;
          --darker-bg: #050505;
          --light-text: #ffffff;
          --gray-text: #f0f0f0;
          --dark-text: #cccccc;
          --gold: #eac266;
          --gold-dark: #a26e4b;
        }
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Roboto', sans-serif;
          background: linear-gradient(135deg, var(--dark-bg) 0%, var(--darker-bg) 100%);
          color: var(--light-text);
          line-height: 1.6;
          overflow-x: hidden;
        }
        
        .App {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        
        main {
          flex: 1;
          margin-top: 100px; /* Account for fixed navbar */
        }
        
        /* Scrollbar styling */
        ::-webkit-scrollbar {
          width: 10px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.2);
        }
        
        ::-webkit-scrollbar-thumb {
          background: var(--gold);
          border-radius: 5px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: var(--gold-dark);
        }
        
        /* Glassmorphism effect */
        .glass {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
          transition: all 0.3s ease;
        }
        
        .glass:hover {
          background: rgba(255, 255, 255, 0.12);
          box-shadow: 0 12px 40px 0 rgba(0, 0, 0, 0.4);
        }
        
        /* Modern gradient button */
        .btn-modern {
          background: var(--primary-gradient);
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
        }
        
        .btn-modern:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
        }
        
        .btn-modern:active {
          transform: translateY(-1px);
        }
        
        .btn-modern::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(45deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0));
          transform: translateX(-100%);
          transition: transform 0.3s ease;
        }
        
        .btn-modern:hover::after {
          transform: translateX(100%);
        }
        
        /* Fullscreen section */
        .fullscreen-section {
          height: 100vh;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: relative;
          overflow: hidden;
          padding: 20px;
        }
        
        /* Typography - Ensuring all titles are white */
        h1, h2, h3, h4, h5, h6 {
          color: #ffffff !important; /* Making all titles white with important to override any other styles */
          font-weight: 700;
        }
        
        /* Ensuring all text elements are properly visible */
        p, li, span, div {
          color: #ffffff !important;
        }
        
        h1 {
          font-size: 4rem;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          text-align: center;
          background: linear-gradient(45deg, #fff, #f0f0f0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        }
        
        h2 {
          font-size: 2.8rem;
          margin-bottom: 1.5rem;
          text-align: center;
          background: linear-gradient(45deg, #fff, #f0f0f0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        h3 {
          font-size: 2rem;
          margin-bottom: 1rem;
          color: #fff !important;
        }
        
        p {
          font-size: 1.2rem;
          margin-bottom: 1.5rem;
          max-width: 700px;
          text-align: center;
          color: #f0f0f0;
        }
        
        /* Form elements */
        input,
        select,
        textarea {
          width: 100%;
          padding: 14px 18px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.08);
          color: #fff;
          font-size: 1rem;
          outline: none;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.15);
          resize: vertical;
        }
        
        textarea {
          min-height: 120px;
          max-height: 300px;
        }
        
        input::placeholder,
        textarea::placeholder {
          color: rgba(255, 255, 255, 0.7);
        }
        
        input:focus,
        select:focus,
        textarea:focus {
          background: rgba(255, 255, 255, 0.15);
          box-shadow: 0 0 20px rgba(234, 194, 102, 0.5);
          border-color: rgba(234, 194, 102, 0.7);
        }
        
        label {
          display: block;
          margin-bottom: 10px;
          font-weight: 600;
          color: #fff;
        }
        
        /* Animations */
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
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
            opacity: 1;
            transform: scale(1);
          }
        }
        
        /* Responsive adjustments */
        @media (max-width: 1200px) {
          h1 {
            font-size: 3.5rem;
          }
          
          h2 {
            font-size: 2.5rem;
          }
        }
        
        @media (max-width: 992px) {
          h1 {
            font-size: 3rem;
          }
          
          h2 {
            font-size: 2.2rem;
          }
          
          h3 {
            font-size: 1.8rem;
          }
          
          p {
            font-size: 1.1rem;
          }
          
          main {
            margin-top: 90px;
          }
        }
        
        @media (max-width: 768px) {
          h1 {
            font-size: 2.5rem;
          }
          
          h2 {
            font-size: 2rem;
          }
          
          h3 {
            font-size: 1.6rem;
          }
          
          p {
            font-size: 1rem;
          }
          
          main {
            margin-top: 80px;
          }
        }
        
        @media (max-width: 480px) {
          h1 {
            font-size: 2rem;
          }
          
          h2 {
            font-size: 1.8rem;
          }
          
          h3 {
            font-size: 1.4rem;
          }
          
          main {
            margin-top: 70px;
          }
        }
      `}</style>
    </Router>
  );
}

export default App;