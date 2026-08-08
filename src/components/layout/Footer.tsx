import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="brand">
              <span className="brand-primary text-white">Source</span>
              <span className="brand-secondary">BD</span>
            </Link>
            <p className="footer-desc">
              Your sourcing partner in Bangladesh. We help international businesses source and manufacture custom products through vetted manufacturing partners.
            </p>
          </div>

          <div className="footer-links">
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/how-it-works">How It Works</Link></li>
              <li><Link to="/quality">Quality & Production</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services">Supplier Sourcing</Link></li>
              <li><Link to="/services">Custom Manufacturing</Link></li>
              <li><Link to="/services">Private Label</Link></li>
              <li><Link to="/products">Products</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact</h4>
            <ul>
              <li>
                <MapPin size={18} />
                <span>[Bangladesh Office Location]</span>
              </li>
              <li>
                <Mail size={18} />
                <span>[Business Email]</span>
              </li>
              <li>
                <Phone size={18} />
                <span>[WhatsApp Number]</span>
              </li>
            </ul>
            <div className="footer-cta">
              <Link to="/quote" className="btn btn-outline footer-btn">Start a Sourcing Request</Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} SourceBD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
