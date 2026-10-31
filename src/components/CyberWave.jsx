import React, { useEffect, useRef } from 'react';

/**
 * CyberWave: High-performance HTML5 Canvas wave simulating a futuristic digital ocean
 * with multiple glowing turquoise, cyan and dark teal harmonic lines.
 */
const CyberWave = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let step = 0;

    const resize = () => {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = 180;
    };

    resize();
    window.addEventListener('resize', resize);

    // Wave parameters: 6 distinct glowing lines with varying wavelengths, amplitudes, speeds and colors
    const waves = [
      {
        color: 'rgba(20, 184, 166, 0.95)', // bright turquoise
        glowColor: 'rgba(45, 212, 191, 0.8)',
        lineWidth: 2.5,
        speed: 0.016,
        frequency: 0.007,
        amplitude: 28,
        offset: 0,
        yOffset: 95,
      },
      {
        color: 'rgba(6, 182, 212, 0.85)', // cyan
        glowColor: 'rgba(6, 182, 212, 0.6)',
        lineWidth: 2,
        speed: 0.022,
        frequency: 0.009,
        amplitude: 34,
        offset: 2,
        yOffset: 105,
      },
      {
        color: 'rgba(13, 148, 136, 0.75)', // dark teal
        glowColor: 'rgba(13, 148, 136, 0.5)',
        lineWidth: 1.8,
        speed: 0.012,
        frequency: 0.005,
        amplitude: 22,
        offset: 4,
        yOffset: 85,
      },
      {
        color: 'rgba(94, 234, 212, 0.9)', // light turquoise neon
        glowColor: 'rgba(94, 234, 212, 0.7)',
        lineWidth: 1.5,
        speed: 0.026,
        frequency: 0.011,
        amplitude: 24,
        offset: 1.2,
        yOffset: 112,
      },
      {
        color: 'rgba(15, 118, 110, 0.65)', // deep teal baseline
        glowColor: 'rgba(20, 184, 166, 0.4)',
        lineWidth: 1.5,
        speed: 0.009,
        frequency: 0.004,
        amplitude: 18,
        offset: 3.5,
        yOffset: 125,
      },
      {
        color: 'rgba(45, 212, 191, 0.5)', // high frequency harmonic
        glowColor: 'rgba(45, 212, 191, 0.3)',
        lineWidth: 1.2,
        speed: 0.032,
        frequency: 0.014,
        amplitude: 16,
        offset: 5,
        yOffset: 100,
      },
    ];

    const render = () => {
      step += 1;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create a subtle upward gradient fade to blend nicely into pure black background
      const grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
      grad.addColorStop(0, 'rgba(0, 0, 0, 0)');
      grad.addColorStop(0.6, 'rgba(4, 20, 25, 0.2)');
      grad.addColorStop(1, 'rgba(2, 44, 48, 0.45)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw each cyber wave line
      waves.forEach((w) => {
        ctx.save();
        ctx.beginPath();
        ctx.lineWidth = w.lineWidth;
        ctx.strokeStyle = w.color;
        ctx.shadowColor = w.glowColor;
        ctx.shadowBlur = 14;

        const sliceWidth = 4;
        let isFirst = true;

        for (let x = 0; x <= canvas.width + sliceWidth; x += sliceWidth) {
          // Combined compound harmonic sine function for organic digital wave motion
          const y =
            w.yOffset +
            Math.sin(x * w.frequency + step * w.speed + w.offset) * w.amplitude +
            Math.cos(x * (w.frequency * 0.6) - step * (w.speed * 0.7)) * (w.amplitude * 0.4);

          if (isFirst) {
            ctx.moveTo(x, y);
            isFirst = false;
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.stroke();

        // Fill under the lowest wave with subtle digital teal glow
        if (w === waves[1]) {
          ctx.lineTo(canvas.width, canvas.height);
          ctx.lineTo(0, canvas.height);
          ctx.closePath();
          const underGlow = ctx.createLinearGradient(0, 100, 0, canvas.height);
          underGlow.addColorStop(0, 'rgba(20, 184, 166, 0.08)');
          underGlow.addColorStop(1, 'rgba(6, 182, 212, 0.01)');
          ctx.fillStyle = underGlow;
          ctx.fill();
        }

        ctx.restore();
      });

      // Draw tiny glowing spark dots traveling along waves
      ctx.save();
      for (let i = 0; i < 7; i++) {
        const dotX = ((step * 1.8 + i * 220) % (canvas.width + 100)) - 50;
        const dotY =
          95 +
          Math.sin(dotX * 0.007 + step * 0.016) * 28 +
          Math.cos(dotX * 0.004 - step * 0.011) * 11;

        ctx.beginPath();
        ctx.arc(dotX, dotY, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = '#5eead4';
        ctx.shadowColor = '#2dd4bf';
        ctx.shadowBlur = 10;
        ctx.fill();
      }
      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden select-none pointer-events-none">
      {/* Soft turquoise ambient glow behind wave */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-teal-500/15 via-teal-900/10 to-transparent blur-xl pointer-events-none" />
      <canvas
        ref={canvasRef}
        className="w-full block"
        style={{ height: '170px' }}
      />
    </div>
  );
};

export default CyberWave;
