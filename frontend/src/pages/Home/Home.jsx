import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1>Welcome to Foody</h1>
          <p>Your favorite meals delivered fast and fresh.</p>
          <button className="cta-button">Order Now</button>
        </div>
      </header>

      {/* Features Section */}
      <section className="features">
        <div className="feature">
          <h2>Wide Variety of Cuisines</h2>
          <p>Explore dishes from top-rated restaurants near you.</p>
        </div>
        <div className="feature">
          <h2>Fast Delivery</h2>
          <p>Get your food delivered hot and on time.</p>
        </div>
        <div className="feature">
          <h2>Easy to Use</h2>
          <p>Simple and seamless ordering experience.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Foody. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Home;