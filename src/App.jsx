import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';

const App = () => (
  <>
    <Navbar />
    <Hero />
    <footer className="footer" id="footer">
      <div className="contact" id="contact">
        <div>
          <h3>Get in Touch</h3>
          <p>Have questions about our educational tour journey? Feel free to reach out—I’d love to connect!</p>
          <div className="social-icons">
            <a href="https://www.instagram.com/its.pawpatrol/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://www.linkedin.com/in/padwa-tingkasan-a8710627b/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
            <a href="https://twitter.com/PadwaDev" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
        <div className="contact-details">
          <div>
            <i className="fas fa-phone"></i>
            <p>+63-975-478-6803</p>
          </div>
          <div>
            <i className="fas fa-envelope"></i>
            <p>pawtingkasan20@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="team">
        <p>@2025 Padwa Tingkasan | All right served.</p>
      </div>
    </footer>
  </>
);

export default App;