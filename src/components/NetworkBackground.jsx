import React, { useEffect, useRef } from "react";

export default function NetworkBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener("resize", handleResize);

    // Generate network nodes
    const nodeCount = Math.min(Math.floor((width * height) / 18000), 75);
    const nodes = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 2 + 1.2,
        // Mix of electric violet (#A78BFA) and subtle cyan (#22D3EE)
        color: Math.random() > 0.45 ? "rgba(167, 139, 250, " : "rgba(34, 211, 238, ",
        alpha: Math.random() * 0.5 + 0.3,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        pulseAngle: Math.random() * Math.PI * 2
      });
    }

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connections
      const maxDistance = 140;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const proximity = 1 - dist / maxDistance;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            // Subtle violet-to-cyan gradient on edges
            const edgeGrad = ctx.createLinearGradient(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
            edgeGrad.addColorStop(0, `rgba(167, 139, 250, ${proximity * 0.16})`);
            edgeGrad.addColorStop(1, `rgba(34, 211, 238, ${proximity * 0.14})`);
            ctx.strokeStyle = edgeGrad;
            ctx.lineWidth = 0.85;
            ctx.stroke();
          }
        }
      }

      // Connect to mouse cursor subtly
      if (mouseX > 0 && mouseY > 0) {
        for (let i = 0; i < nodes.length; i++) {
          const dx = nodes[i].x - mouseX;
          const dy = nodes[i].y - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 180) {
            const proximity = 1 - dist / 180;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(mouseX, mouseY);
            ctx.strokeStyle = `rgba(167, 139, 250, ${proximity * 0.28})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Draw and update nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;
        n.pulseAngle += n.pulseSpeed;

        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        const currentAlpha = n.alpha + Math.sin(n.pulseAngle) * 0.18;

        // Subtle glow around nodes
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius * 2.4, 0, Math.PI * 2);
        ctx.fillStyle = `${n.color}${Math.max(0, currentAlpha * 0.25)})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${n.color}${Math.max(0, currentAlpha)})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="hero-visual" aria-hidden="true">
      {/* Subtle Violet to Cyan Radial Glow Layers */}
      <div className="hero-glow-layer" />
      <canvas ref={canvasRef} className="hero-network-canvas" />
      <div className="hero-image-overlay" />
    </div>
  );
}
