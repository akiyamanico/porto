import React, { useState, useEffect, useCallback } from 'react';

const PixelReveal = ({ isActive, children, onComplete, clickPosition }) => {
  const [pixels, setPixels] = useState([]);
  const [showContent, setShowContent] = useState(true);

  const generatePixels = useCallback((origin) => {
    if (!origin) return [];
    
    const newPixels = [];
    const pixelCount = 15;
    const maxRadius = 35;

    for (let i = 0; i < pixelCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const r = Math.sqrt(Math.random()) * maxRadius;
      const x = origin.x + Math.cos(angle) * r;
      const y = origin.y + Math.sin(angle) * r;
      
      const shade = Math.random() > 0.5 ? '#1A1A1A' : Math.random() > 0.5 ? '#999' : '#BBB';
      const delay = Math.random() * 0.1;
      const duration = 0.5 + Math.random() * 0.3;
      
      newPixels.push({ id: `${Date.now()}-${i}`, x, y, shade, delay, duration });
    }

    return newPixels;
  }, []);

  useEffect(() => {
    if (!isActive) return;

    setPixels(generatePixels(clickPosition));
    setShowContent(false);

    const tContent = setTimeout(() => {
      setShowContent(true);
      onComplete?.();
    }, 50);

    const tClear = setTimeout(() => {
      setPixels([]);
    }, 1200);

    return () => {
      clearTimeout(tContent);
      clearTimeout(tClear);
    };
  }, [isActive, clickPosition, generatePixels, onComplete]);

  return (
    <>
      <style>
        {`
          @keyframes glitchPixelAnim {
            0% { opacity: 0; transform: scale(1); }
            30% { opacity: 1; transform: scale(1); }
            100% { opacity: 0; transform: scale(3); }
          }
        `}
      </style>

      {showContent && children}

      {pixels.length > 0 && (
        <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
          {pixels.map((p) => (
            <div
              key={p.id}
              style={{
                position: 'absolute',
                left: `${p.x}px`,
                top: `${p.y}px`,
                width: '3px',
                height: '3px',
                backgroundColor: p.shade,
                opacity: 0,
                animation: `glitchPixelAnim ${p.duration}s ease-in-out ${p.delay}s forwards`
              }}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default PixelReveal;
