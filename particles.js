// ========================
// Simple particle background
// ========================

const canvas = document.getElementById("hero-canvas");
const ctx = canvas.getContext("2d");

let particles = [];
let w, h;

function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = document.querySelector(".site-header").offsetHeight;
}

window.addEventListener("resize", resize);
resize();

// Create particle objects
function createParticles(count) {
  particles = [];
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * w,
      y: Math.random() * h,
      size: Math.random() * 2.2 + 0.5,
      speedX: (Math.random() - 0.5) * 0.2,
      speedY: (Math.random() - 0.5) * 0.2,
      opacity: Math.random() * 0.8 + 0.2
    });
  }
}

createParticles(80);

// Draw particles on canvas
function drawParticles() {
  ctx.clearRect(0, 0, w, h);

  for (let p of particles) {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,255,255,${p.opacity})`;
    ctx.shadowColor = "rgba(255,255,255,0.6)";
    ctx.shadowBlur = 8;
    ctx.fill();

    // Move particle
    p.x += p.speedX;
    p.y += p.speedY;

    // Wrap around screen edges
    if (p.x < 0) p.x = w;
    if (p.x > w) p.x = 0;
    if (p.y < 0) p.y = h;
    if (p.y > h) p.y = 0;
  }

  requestAnimationFrame(drawParticles);
}

drawParticles();
