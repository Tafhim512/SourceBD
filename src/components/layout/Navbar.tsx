import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="brand">
          <span className="brand-primary">Source</span>
          <span className="brand-secondary">BD</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          <Link to="/products" className={location.pathname === '/products' ? 'active' : ''}>Products</Link>
          <Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>Services</Link>
          <Link to="/how-it-works" className={location.pathname === '/how-it-works' ? 'active' : ''}>How It Works</Link>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
          <Link to="/quality" className={location.pathname === '/quality' ? 'active' : ''}>Quality</Link>
          <Link to="/faq" className={location.pathname === '/faq' ? 'active' : ''}>FAQ</Link>
        </nav>

        <div className="nav-actions desktop-only">
          <Link to="/quote" className="btn btn-primary">
            Request a Quote <ArrowRight size={18} />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/services">Services</Link>
          <Link to="/how-it-works">How It Works</Link>
          <Link to="/about">About</Link>
          <Link to="/quality">Quality</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/quote" className="mobile-quote-btn">Request a Quote</Link>
        </nav>
      </div>
    </header>
  );
}
