import React from 'react';

const HomePage = () => {
  return (
    <div style={styles.app}>
      {/* Header Section */}
      <header style={styles.header}>
        <div style={styles.logo}>
        <img src="C:\Users\SUMAYYA\Downloads\Copy of Black and White Circle Business Logo.png" alt="" style={styles.logoImage} />
          <h1>MoodVillee</h1>
        </div>
        <nav>
          <ul style={styles.nav}>
            <li style={styles.navItem}><a href="/" style={styles.navLink}>Home</a></li>
            <li style={styles.navItem}><a href="/about" style={styles.navLink}>About</a></li>
            <li style={styles.navItem}><a href="/services" style={styles.navLink}>Services</a></li>
            <li style={styles.navItem}><a href="/contact" style={styles.navLink}>Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h1>Welcome to MoodVillee</h1>
          <p>Your partner in the future..for your Space..for your Emotions..! </p>
          <div style={styles.ctaButtons}>
            <button style={styles.ctaBtn}>Learn More</button>
            <button style={styles.ctaBtnPrimary}>Get Started</button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={styles.features}>
        <div style={styles.featureCard}>
          <h3>Innovative Solutions</h3>
          <p>Cutting-edge technology that will revolutionize emotion interaction.</p>
        </div>
        <div style={styles.featureCard}>
          <h3>Scalable Architecture</h3>
          <p>Our system grows with you. Built to scale efficiently.</p>
        </div>
        <div style={styles.featureCard}>
          <h3>AI-Driven Insights</h3>
          <p>Get data-driven insights with our powerful AI engine.</p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={styles.testimonials}>
        <h2>What Our Clients Say</h2>
        <div style={styles.testimonial}>
          <p>"MoodVillee has been a game-changer for us. Their space theri emotions is incredibly effective!"</p>
          <p><strong></strong></p>
        </div>
        <div style={styles.testimonial}>
          <p>"We saw results in just a few months. Highly recommend!"</p>
          <p><strong></strong></p>
        </div>
      </section>

      {/* Footer Section */}
      <footer style={styles.footer}>
        <div>
          <p>&copy; 2024 MoodVillee. All rights reserved.</p>
          <ul style={styles.footerLinks}>
            <li><a href="/privacy" style={styles.footerLink}>Privacy Policy</a></li>
            <li><a href="/terms" style={styles.footerLink}>Terms of Service</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

const styles = {
  app: {
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
    background: '#CC2B52',
    color: '#AF1740',
  },
  logo: {
    fontSize: '1.5rem',
  },
  nav: {
    display: 'flex',
    gap: '20px',
    listStyle: 'none',
  },
  navItem: {},
  navLink: {
    textDecoration: 'none',
    color: 'white',
    fontSize: '1rem',
  },
  navLinkHover: {
    color: '#f0a500',
  },
  hero: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80vh',
    background: '#1a1a1a',
    color: '#AF1740',
    textAlign: 'center',
  },
  heroContent: {
    maxWidth: '600px',
  },
  ctaButtons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '20px',
  },
  ctaBtn: {
    padding: '12px 24px',
    background: '#C7253E',
    border: 'none',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '1rem',
    borderRadius: '5px',
  },
  ctaBtnPrimary: {
    padding: '12px 24px',
    background: '#ff5733',
    border: 'none',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '1rem',
    borderRadius: '5px',
  },
  features: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '30px',
    padding: '50px',
    background: '#f4f4f4',
    textAlign: 'center',
  },
  featureCard: {
    background: '#B43F3F',
    padding: '20px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
  },
  featureCardHeading: {
    fontSize: '1.5rem',
    marginBottom: '10px',
  },
  testimonials: {
    padding: '50px',
    background: '#C7253E',
    textAlign: 'center',
  },
  testimonial: {
    marginBottom: '30px',
  },
  footer: {
    background: '#000',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
  },
  footerLinks: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
  },
  footerLink: {
    textDecoration: 'none',
    color: 'white',
  },
  footerLinkHover: {
    color: '#f0a500',
  },
};

export default HomePage;
