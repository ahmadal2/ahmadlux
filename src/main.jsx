import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

const Speedometer = ({ side }) => {
  const [needleAngle, setNeedleAngle] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [rpm, setRpm] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 5000; // 5 seconds for the animation
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease-in-out function for realistic acceleration
      const easeProgress = progress < 0.5 
        ? 2 * progress * progress 
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;
      
      const currentSpeed = Math.floor(easeProgress * 500);
      const currentRpm = Math.floor(easeProgress * 8000);
      const angle = (currentSpeed / 500) * 180; // 0 to 180 degrees for 0-500 km/h
      
      setSpeed(currentSpeed);
      setRpm(currentRpm);
      setNeedleAngle(angle);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    animate();
  }, []);

  // Generate highly detailed scale marks for maximum realism
  const renderDetailedScale = () => {
    const elements = [];
    
    // Create 250 fine markings for ultra-realistic detail
    for (let i = 0; i <= 250; i++) {
      const angle = (i / 250) * 180 - 90;
      const isMajor = i % 25 === 0;
      const isMedium = i % 5 === 0 && !isMajor;
      let length, width, color;
      
      if (isMajor) {
        // Major markings (every 20 km/h)
        length = 22;
        width = 2.2;
        color = "#ffffff";
        
        // Add number labels for major markings
        const value = i * 2;
        const labelX = 200 + 145 * Math.cos(angle * Math.PI / 180);
        const labelY = 200 + 145 * Math.sin(angle * Math.PI / 180);
        
        elements.push(
          <text
            key={`label-${i}`}
            x={labelX}
            y={labelY}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#ffffff"
            fontSize="15"
            fontWeight="bold"
            fontFamily="Arial, sans-serif"
            style={{ textShadow: '0 0 2px rgba(0,0,0,0.7)' }}
          >
            {value}
          </text>
        );
      } else if (isMedium) {
        // Medium markings (every 4 km/h)
        length = 14;
        width = 1.6;
        color = "#dddddd";
      } else {
        // Fine markings (every 2 km/h)
        length = 8;
        width = 1;
        color = "#bbbbbb";
      }
      
      const x1 = 200 + (180 - length) * Math.cos(angle * Math.PI / 180);
      const y1 = 200 + (180 - length) * Math.sin(angle * Math.PI / 180);
      const x2 = 200 + 180 * Math.cos(angle * Math.PI / 180);
      const y2 = 200 + 180 * Math.sin(angle * Math.PI / 180);
      
      elements.push(
        <line
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke={color}
          strokeWidth={width}
          strokeLinecap="round"
        />
      );
    }
    
    return elements;
  };

  // Render RPM scale for the right speedometer
  const renderRpmScale = () => {
    const elements = [];
    
    // Create 160 fine markings for RPM scale
    for (let i = 0; i <= 160; i++) {
      const angle = (i / 160) * 180 - 90;
      const isMajor = i % 20 === 0;
      const isMedium = i % 4 === 0 && !isMajor;
      let length, width, color;
      
      if (isMajor) {
        // Major markings (every 1000 RPM)
        length = 22;
        width = 2.2;
        color = "#ffffff";
        
        // Add number labels for major markings
        const value = i / 2;
        const labelX = 200 + 145 * Math.cos(angle * Math.PI / 180);
        const labelY = 200 + 145 * Math.sin(angle * Math.PI / 180);
        
        elements.push(
          <text
            key={`rpm-label-${i}`}
            x={labelX}
            y={labelY}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#ffffff"
            fontSize="15"
            fontWeight="bold"
            fontFamily="Arial, sans-serif"
            style={{ textShadow: '0 0 2px rgba(0,0,0,0.7)' }}
          >
            {value}
          </text>
        );
      } else if (isMedium) {
        // Medium markings (every 200 RPM)
        length = 14;
        width = 1.6;
        color = "#dddddd";
      } else {
        // Fine markings (every 50 RPM)
        length = 8;
        width = 1;
        color = "#bbbbbb";
      }
      
      const x1 = 200 + (180 - length) * Math.cos(angle * Math.PI / 180);
      const y1 = 200 + (180 - length) * Math.sin(angle * Math.PI / 180);
      const x2 = 200 + 180 * Math.cos(angle * Math.PI / 180);
      const y2 = 200 + 180 * Math.sin(angle * Math.PI / 180);
      
      elements.push(
        <line
          key={`rpm-${i}`}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke={color}
          strokeWidth={width}
          strokeLinecap="round"
        />
      );
    }
    
    return elements;
  };

  return (
    <div className={`speedometer-${side}`}>
      <svg width="100%" height="100%" viewBox="0 0 400 250" preserveAspectRatio="xMidYMid meet">
        <defs>
          {/* Premium gradients for realistic metallic appearance */}
          <radialGradient id={`outerRim-${side}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#3a3a3a" />
            <stop offset="60%" stopColor="#2a2a2a" />
            <stop offset="100%" stopColor="#1a1a1a" />
          </radialGradient>
          
          <radialGradient id={`innerDial-${side}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1e1e1e" />
            <stop offset="70%" stopColor="#151515" />
            <stop offset="100%" stopColor="#0a0a0a" />
          </radialGradient>
          
          <linearGradient id={`bezel-${side}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#555555" />
            <stop offset="50%" stopColor="#777777" />
            <stop offset="100%" stopColor="#444444" />
          </linearGradient>
          
          {/* Advanced needle glow effect */}
          <filter id={`needleGlow-${side}`}>
            <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur" />
            <feFlood floodColor="#ff3333" floodOpacity="0.6" result="glowColor" />
            <feComposite in="glowColor" in2="blur" operator="in" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          
          {/* Subtle inner shadow for depth */}
          <filter id={`innerShadow-${side}`}>
            <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur" />
            <feOffset dx="0" dy="2" result="offsetBlur" />
            <feFlood floodColor="#000000" floodOpacity="0.5" result="color" />
            <feComposite in="color" in2="offsetBlur" operator="in" result="innerShadow" />
            <feComposite in="innerShadow" in2="SourceAlpha" operator="out" />
          </filter>
          
          {/* Red zone gradient for RPM meter */}
          <linearGradient id={`redZone-${side}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00aa00" />
            <stop offset="70%" stopColor="#ffff00" />
            <stop offset="85%" stopColor="#ff7700" />
            <stop offset="100%" stopColor="#ff0000" />
          </linearGradient>
        </defs>
        
        {/* Outer bezel with premium metallic finish */}
        <circle cx="200" cy="200" r="195" fill="url(#bezel)" />
        <circle cx="200" cy="200" r="192" fill="url(#outerRim)" />
        
        {/* Main dial with realistic texture */}
        <circle cx="200" cy="200" r="185" fill="url(#innerDial)" filter={`url(#innerShadow-${side})`} />
        
        {/* Fine texture details for authenticity */}
        {/* Concentric rings for realistic dial texture */}
        {[...Array(15)].map((_, i) => (
          <circle
            key={`ring-${i}`}
            cx="200"
            cy="200"
            r={180 - i * 3}
            fill="none"
            stroke="rgba(80,80,80,0.2)"
            strokeWidth="0.5"
          />
        ))}
        
        {/* Radial texture lines */}
        {[...Array(60)].map((_, i) => {
          const angle = (i / 60) * Math.PI * 2;
          const x1 = 200 + 170 * Math.cos(angle);
          const y1 = 200 + 170 * Math.sin(angle);
          const x2 = 200 + 180 * Math.cos(angle);
          const y2 = 200 + 180 * Math.sin(angle);
          
          return (
            <line
              key={`radial-${i}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="rgba(80,80,80,0.3)"
              strokeWidth="0.5"
            />
          );
        })}
        
        {/* Detailed scale markings */}
        {side === 'left' ? renderDetailedScale() : renderRpmScale()}
        
        {/* Red zone for RPM meter */}
        {side === 'right' && (
          <path
            d="M 200 200 L 345 85 A 185 185 0 0 1 370 120 L 200 200"
            fill="url(#redZone-right)"
            opacity="0.3"
          />
        )}
        
        {/* Branding text */}
        <text
          x="200"
          y="70"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#f0f0f0"
          fontSize="16"
          fontWeight="bold"
          fontFamily="Arial, sans-serif"
          letterSpacing="2"
        >
          {side === 'left' ? 'AUTO LUX' : 'TACHOMETER'}
        </text>
        
        {/* Unit indicator */}
        <text
          x="200"
          y="95"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#cccccc"
          fontSize="12"
          fontWeight="normal"
          fontFamily="Arial, sans-serif"
        >
          {side === 'left' ? 'km/h' : 'RPM x1000'}
        </text>
        
        {/* Center cap with multi-layer construction */}
        <circle cx="200" cy="200" r="14" fill="#2a2a2a" />
        <circle cx="200" cy="200" r="10" fill="#1a1a1a" />
        <circle cx="200" cy="200" r="6" fill="#0a0a0a" />
        
        {/* Premium needle with realistic design */}
        <g transform={`rotate(${needleAngle}, 200, 200)`} filter={`url(#needleGlow-${side})`}>
          {/* Main needle body */}
          <polygon 
            points="200,200 197,75 200,55 203,75"
            fill="#ff2222"
          />
          {/* Needle tip for added realism */}
          <polygon 
            points="200,55 198,70 202,70"
            fill="#ff5555"
          />
          {/* Center pivot with metallic finish */}
          <circle cx="200" cy="200" r="8" fill="#333333" />
          <circle cx="200" cy="200" r="5" fill="#555555" />
          <circle cx="200" cy="200" r="2" fill="#ffffff" />
        </g>
        
        {/* Premium digital display */}
        <rect x="155" y="125" width="90" height="30" rx="5" fill="#000000" stroke="#333333" strokeWidth="1" />
        <rect x="157" y="127" width="86" height="26" rx="3" fill="#111111" />
        <text
          x="200"
          y="143"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#00ff00"
          fontSize="18"
          fontWeight="bold"
          fontFamily="monospace"
          style={{ textShadow: '0 0 3px rgba(0,255,0,0.5)' }}
        >
          {side === 'left' ? speed.toString().padStart(3, '0') : (rpm/1000).toFixed(1)}
        </text>
      </svg>
    </div>
  );
};

const LoadingScreen = ({ isLoading, children }) => {
  if (!isLoading) {
    return children;
  }

  return (
    <div className="loading-screen">
      <div className="app-content">
        {children}
      </div>
      <div className="speedometer-container">
        <div className="speedometer-wrapper left">
          <Speedometer side="left" />
        </div>
        <div className="speedometer-wrapper right">
          <Speedometer side="right" />
        </div>
      </div>
      <div className="loading-overlay">
        <div className="loading-text">
          <h2>AhmadLux+</h2>
          <p>Ihre Premium-Fahrzeuglösung</p>
        </div>
      </div>
      
      <style jsx>{`
        .loading-screen {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          z-index: 9999;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
        }
        
        .app-content {
          flex: 1;
          opacity: 0.15;
          filter: blur(4px);
        }
        
        .speedometer-container {
          position: fixed;
          bottom: 25px;
          left: 0;
          right: 0;
          display: flex;
          justify-content: space-between;
          padding: 0 50px;
          width: 100%;
          box-sizing: border-box;
        }
        
        .speedometer-wrapper {
          width: 380px;
          height: 220px;
          filter: drop-shadow(0 10px 15px rgba(0,0,0,0.5));
        }
        
        .loading-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: rgba(0, 0, 0, 0.7);
          z-index: -1;
        }
        
        .loading-text {
          text-align: center;
          margin-bottom: 50px;
        }
        
        .loading-text h2 {
          font-size: 3rem;
          margin-bottom: 1rem;
          background: linear-gradient(45deg, #ffffff, #f0f0f0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: #ffffff !important;
        }
        
        .loading-text p {
          font-size: 1.2rem;
          color: #ffffff !important;
          max-width: none;
        }
        
        @media (max-width: 1200px) {
          .speedometer-wrapper {
            width: 320px;
            height: 190px;
          }
          
          .speedometer-container {
            padding: 0 40px;
          }
        }
        
        @media (max-width: 992px) {
          .speedometer-wrapper {
            width: 280px;
            height: 170px;
          }
          
          .speedometer-container {
            padding: 0 30px;
            bottom: 20px;
          }
          
          .loading-text h2 {
            font-size: 2.5rem;
          }
        }
        
        @media (max-width: 768px) {
          .speedometer-wrapper {
            width: 220px;
            height: 140px;
          }
          
          .speedometer-container {
            padding: 0 20px;
            bottom: 15px;
          }
          
          .loading-text h2 {
            font-size: 2rem;
          }
          
          .loading-text p {
            font-size: 1rem;
          }
        }
        
        @media (max-width: 480px) {
          .speedometer-wrapper {
            width: 150px;
            height: 110px;
          }
          
          .speedometer-container {
            padding: 0 15px;
            bottom: 10px;
          }
          
          .loading-text h2 {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </div>
  );
};

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5500); // 5.5 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <LoadingScreen isLoading={isLoading}>
      <App />
    </LoadingScreen>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
);