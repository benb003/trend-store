import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-slogan">
        <h1>Trendy fashion</h1>
        <a href="#">Shop now</a>
      </div>
      <div className="hero-image-container">
        <img src="/images/hero.png" alt="hero" className="hero-image" />
      </div>
    </section>
  );
};

export default Hero;
