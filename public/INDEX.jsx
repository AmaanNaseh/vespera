import React from 'react';
import logo from './path_to_your_logo.png'; // Update with the actual path to your logo

const HackathonPage = () => {
  return (
    <div style={styles.body}>
      <div style={styles.navbar}>
        <img src={logo} alt="Logo" style={styles.logo} />
        <div>
          <a href="#about" style={styles.navLink}>About</a>
          <a href="#events" style={styles.navLink}>Events</a>
          <a href="#speakers" style={styles.navLink}>Speakers</a>
          <a href="#FAQ" style={styles.navLink}>FAQ</a>
          <a href="#sponsors" style={styles.navLink}>Sponsors</a>
        </div>
      </div>

      <div style={styles.centerContainer}>
        <h1 style={styles.title}>HACKATHON</h1>

        <div style={styles.description}>
          <h2 style={styles.sectionTitle}>DESCRIPTION</h2>
         
        </div>

        <div style={styles.description}>
          <h2 style={styles.sectionTitle}>PRIZES</h2>
       
        </div>

        <div style={styles.description}>
          <h2 style={styles.sectionTitle}>TIMELINE</h2>
          
        </div>

        <div style={styles.description}>
          <h2 style={styles.sectionTitle}>FAQs</h2>
         
        </div>
      </div>
    </div>
  );
};

// Styles in JavaScript object
const styles = {
  body: {
    backgroundColor: 'black',
    color: 'white',
    fontFamily: 'Arial, sans-serif',
  },
  navbar: {
    backgroundColor: 'black',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '14px 20px',
  },
  logo: {
    height: '50px',
    width: 'auto',
  },
  navLink: {
    color: 'white',
    textAlign: 'center',
    padding: '14px 20px',
    textDecoration: 'none',
  },
  centerContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 'calc(100vh - 200px)',
    textAlign: 'center',
    width: '100%',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginTop: '40px',
    marginBottom: '5px',
    position: 'relative',
    width: '100%',
  },
  description: {
    width: '40%',
    padding: '80px',
    border: '2px solid #333',
    backgroundColor: 'rgb(44, 43, 43)',
    textAlign: 'left',
    margin: '20px 0',
    boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.5)',
  },
  sectionTitle: {
    fontSize: '2rem',
    fontWeight: 'normal',
    margin: '0',
    padding: '0',
    textAlign: 'left',
  },
};

export default HackathonPage;
