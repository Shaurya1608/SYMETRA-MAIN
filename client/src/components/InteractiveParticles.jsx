import React, { useRef, useEffect } from 'react';

export const InteractiveParticles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let particlesArray = [];
    
    // Mouse tracking object
    const mouse = {
      x: null,
      y: null,
      radius: 150 // Hitbox for lines connecting to mouse
    };

    const handleMouseMove = (event) => {
      mouse.x = event.x;
      mouse.y = event.y;
    }

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    }

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseout', handleMouseLeave);

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    window.addEventListener('resize', resizeCanvas);

    class Particle {
      constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        // Bounce off edges
        if (this.x > canvas.width || this.x < 0) {
          this.directionX = -this.directionX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.directionY = -this.directionY;
        }

        // Slight magnetic push/pull effect near mouse
        if (mouse.x != null && mouse.y != null) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouse.radius) {
            // Push away just a tiny bit for an organic feel
            if (mouse.x < this.x && this.x < canvas.width - this.size * 5) {
              this.x += 0.5;
            }
            if (mouse.x > this.x && this.x > this.size * 5) {
              this.x -= 0.5;
            }
            if (mouse.y < this.y && this.y < canvas.height - this.size * 5) {
              this.y += 0.5;
            }
            if (mouse.y > this.y && this.y > this.size * 5) {
              this.y -= 0.5;
            }
          }
        }
        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
      }
    }

    function init() {
      particlesArray = [];
      let numberOfParticles = (canvas.height * canvas.width) / 18000;
      // Cap max particles for optimal performance
      if (numberOfParticles > 90) numberOfParticles = 90;

      for (let i = 0; i < numberOfParticles; i++) {
        let size = (Math.random() * 2) + 1;
        let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
        let directionX = (Math.random() * 0.4) - 0.2;
        let directionY = (Math.random() * 0.4) - 0.2;
        
        // Subtle white/grey color for dots instead of bright teal
        let color = 'rgba(238, 242, 247, 0.2)'; 

        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
      }
    }

    function connect() {
      let opacityValue = 1;
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x))
            + ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
          
          // Connect dots to each other
          if (distance < 12000) {
            opacityValue = 1 - (distance / 12000);
            ctx.strokeStyle = `rgba(238, 242, 247, ${opacityValue * 0.15})`; // Subtle white lines
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
        
        // Connect dots to mouse
        if (mouse.x && mouse.y) {
           let distance = ((mouse.x - particlesArray[a].x) * (mouse.x - particlesArray[a].x))
            + ((mouse.y - particlesArray[a].y) * (mouse.y - particlesArray[a].y));
           if (distance < (mouse.radius * mouse.radius)) {
              opacityValue = 1 - (distance / (mouse.radius * mouse.radius));
              ctx.strokeStyle = `rgba(238, 242, 247, ${opacityValue * 0.4})`; // Bright white lines to mouse
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
              ctx.lineTo(mouse.x, mouse.y);
              ctx.stroke();
           }
        }
      }
    }

    let animationFrameId;

    function animate() {
      animationFrameId = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, innerWidth, innerHeight);

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
      }
      connect();
    }

    // Initialize
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseout', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    }
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-10 pointer-events-none" 
      style={{ width: '100%', height: '100%' }}
    />
  );
};
