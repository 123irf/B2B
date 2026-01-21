import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import image from './assets/images-removebg-preview.png';
import './Hero.css';

function Hero() {
  const imageRef = useRef(null);

  useEffect(() => {
    const rotateAnim = gsap.to(imageRef.current, {
      rotation: 360,
      duration: 10,
      repeat: -1,
      ease: 'linear',
      transformOrigin: '50% 50%',
    });

    imageRef.current.addEventListener('mouseenter', () => rotateAnim.pause());
    imageRef.current.addEventListener('mouseleave', () => rotateAnim.resume());

    return () => rotateAnim.kill();
  }, []);

  return (
    <section className="hero">
      {/* LEFT CONTENT */}
     

      {/* RIGHT IMAGE */}
      <div className="hero-image">
        <img
          ref={imageRef}
          src={image}
          alt="Electronics"
          style={{ width: '420px' }}
        />
      </div>
       <div className="hero-content" style={{ maxWidth: '50%' }}>
        <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>
          B2B import and export store
        </h1>

        <p style={{ fontSize: '18px', marginBottom: '30px' }}>
          Discover the latest gadgets with the best prices and fast delivery.
        </p>

        <button
          style={{
            padding: '14px 28px',
            fontSize: '16px',
            border: 'none',
            borderRadius: '6px',
            backgroundColor: '#fff',
            color: '#FA8232',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          Shop Now
        </button>
      </div>
    </section>
  );
}

export default Hero;
