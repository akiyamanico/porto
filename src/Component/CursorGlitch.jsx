import React, { useState, useEffect, useCallback } from 'react';

const CursorGlitch = () => {
  const [glitches, setGlitches] = useState([]);

  const addGlitch = useCallback((e) => {

    const target = e.target;
    const isClickable = 
      target.closest('a') || 
      target.closest('button') || 
      target.closest('[role="button"]') || 
      target.closest('.cursor-pointer') || 
      target.closest('.tab-item') ||
      window.getComputedStyle(target).cursor === 'pointer';

    if (!isClickable) return;

    const origin = { x: e.clientX, y: e.clientY };
    const newPixels = [];
    const pixelCount = 15;
    const maxRadius = 35;
    
    const glitchId = Date.now();

    for (let i = 0; i < pixelCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const r = Math.sqrt(Math.random()) * maxRadius;
      const x = origin.x + Math.cos(angle) * r;
      const y = origin.y + Math.sin(angle) * r;
      
      const shade = Math.random() > 0.5 ? '#1A1A1A' : Math.random() > 0.5 ? '#999' : '#BBB';
      const delay = Math.random() * 0.1;
      const duration = 0.5 + Math.random() * 0.3;
      
      newPixels.push({ id: `${glitchId}-${i}`, x, y, shade, delay, duration });
    }

    setGlitches((prev) => [...prev, { id: glitchId, pixels: newPixels }]);


    setTimeout(() => {
      setGlitches((prev) => prev.filter(g => g.id !== glitchId));
    }, 1200);
  }, []);

  useEffect(() => {
    window.addEventListener('click', addGlitch);
    return () => window.removeEventListener('click', addGlitch);
  }, [addGlitch]);

  return (
    <>
      <style>
        {`
          @keyframes globalGlitchAnim {
            0% { opacity: 0; transform: scale(1); }
            30% { opacity: 1; transform: scale(1); }
            100% { opacity: 0; transform: scale(3); }
          }
        `}
      </style>
      <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
        {glitches.map(glitch => 
          glitch.pixels.map(p => (
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
                animation: `globalGlitchAnim ${p.duration}s ease-in-out ${p.delay}s forwards`
              }}
            />
          ))
        )}
      </div>
    </>
  );
};

export default CursorGlitch;
