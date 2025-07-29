import { useEffect, useRef } from "react";

const ParticleParallax = ({ attributes, setAttributes }) => {
  const { contents, options, styles } = attributes || {};
  const { title, description, btns, subTitle } = contents || {};
  const { particles } = styles || {};
  const { btn1, btn2 } = btns || {};

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particlesArray = [];
    let scrollY = 0;
    let initialTop = 0;

    function setCanvasSize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight + 500;
    }

    function createParticles() {
      const count = Math.floor(window.innerWidth / particles.density);
      particlesArray = [];
      for (let i = 0; i < count; i++) {
        const size = Math.random() * 5 + 1;
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const speedX = Math.random() * `${particles.movingSpeed}` - 0.25;
        const speedY = Math.random() * `${particles.movingSpeed}` - 0.25;
        const color = `rgba(${particles.color.r}, ${particles.color.g}, ${
          particles.color.b
        }, ${Math.random() * 0.5})`;
        particlesArray.push({ x, y, size, speedX, speedY, color });
      }
    }

    const component = document.getElementById("main-container");
    if (component) {
      const rect = component.getBoundingClientRect();
      initialTop = rect.top + window.scrollY;
    } else {
      console.warn(
        "main-container not found — maybe not rendered in this view"
      );
    }

    const onScroll = () => {
      scrollY = window.scrollY - initialTop;
      if (scrollY < 0) scrollY = 0;
    };

    window.addEventListener("scroll", onScroll);

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesArray.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY + scrollY * 0.0002;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      for (let i = 0; i < particlesArray.length; i++) {
        for (let j = i + 1; j < particlesArray.length; j++) {
          const dx = particlesArray[i].x - particlesArray[j].x;
          const dy = particlesArray[i].y - particlesArray[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
            ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
            ctx.strokeStyle = `rgba(${particles.color.r}, ${
              particles.color.g
            }, ${particles.color.b},${0.3 * (1 - distance / 100)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      const text = document.getElementById("parallax-text");
      if (text) {
        text.style.transform = `translateY(${scrollY * 0.1}px)`;
      }

      if (canvas) {
        canvas.style.transform = `translateY(${-scrollY * 0.3}px)`;
      }

      const cube = document.getElementById("cube");
      if (cube) {
        const rotateX = 13 + scrollY * 0.1;
        const rotateY = 35 + scrollY * 0.06;
        cube.style.transform = `translateY(${
          scrollY * 0.1
        }px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      }

      requestAnimationFrame(animate);
    }

    const onResize = () => {
      setCanvasSize();
      createParticles();
    };

    window.addEventListener("resize", onResize);

    setCanvasSize();
    createParticles();
    animate();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [particles]);

  return (
    <div className="bpParticleParallax">
      <div className="hero-container" id="main-container">
        <canvas ref={canvasRef} id="particles-canvas"></canvas>

        <div className="hero-content">
          <div className="text-content" id="parallax-text">
            <h1>
              <span className="gradient-text">{title.text}</span>
              <span className="block">{subTitle.text}</span>
            </h1>
            <p> {description.text} </p>
            <div className="buttons">
              {btn1.status && (
                <a
                  target={options.isNewTab ? "_blank" : "_self"}
                  rel="noreferrer"
                  href={btn1.link}
                >
                  <button className="btn gradient-btn">{btn1.text}</button>
                </a>
              )}
              {btn2.status && (
                <a
                  target={options.isNewTab ? "_blank" : "_self"}
                  rel="noreferrer"
                  href={btn2.link}
                >
                  <button className="btn outline-btn">{btn2.text}</button>
                </a>
              )}
              {/* <button className="btn gradient-btn">Join Network ➜</button> */}
              {/* <button className="btn outline-btn">Learn More</button> */}
            </div>
          </div>
        </div>

        <div className="floating-cube" id="cube">
          <div className="face front"></div>
          <div className="face back"></div>
          <div className="face top"></div>
          <div className="face bottom"></div>
          <div className="face left"></div>
          <div className="face right"></div>
          {/* <img
            style={{height:"300px", width:"300px"}}
            src="https://templates.bplugins.com/wp-content/uploads/2025/07/h124-scaled.jpg"
            alt=""
          /> */}
        </div>
      </div>
    </div>
  );
};

export default ParticleParallax;
