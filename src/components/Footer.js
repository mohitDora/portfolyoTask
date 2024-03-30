import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p>John doe portfolio3@gmail.com</p>
        
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroudColor: '#333',
    color: 'rgba(255,255,255,0.8)',
    padding: '1rem 0',
    marginTop: '20px',
    textAlign: 'center',
  },

};

export default Footer;
