import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      &copy; {new Date().getFullYear()} Your Company Name
    </footer>
  );
};

export default Footer;