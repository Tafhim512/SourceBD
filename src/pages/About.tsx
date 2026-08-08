import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './About.css';

export default function About() {
  return (
    <div className="page-wrapper animate-fade-in-up">
      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h1>Making Bangladesh Manufacturing Easier to Access</h1>
              <p className="about-lead">
                Bangladesh has a deep manufacturing ecosystem, but accessing the right suppliers from overseas can be difficult. SourceBD exists to make that process simpler.
              </p>
              <p>
                We connect international businesses with suitable Bangladeshi manufacturing partners and coordinate the process from initial sourcing through production and export.
              </p>
              <p>
                Instead of managing multiple factories, navigating language barriers, and coordinating quality from thousands of miles away — you work with SourceBD as a single local partner.
              </p>
            </div>
            <div className="about-values">
              <div className="value-block">
                <h3>Our Mission</h3>
                <p>Make Bangladesh's manufacturing ecosystem more accessible to ambitious international businesses.</p>
              </div>
              <div className="value-block">
                <h3>Our Approach</h3>
                <p>Reliable suppliers. Clear communication. Better coordination. One local partner.</p>
              </div>
              <div className="value-block">
                <h3>Our Focus</h3>
                <p>We are initially focused on custom textile and lifestyle products, with the goal of expanding into additional manufacturing categories based on buyer demand.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-secondary text-center">
        <div className="container">
          <h2>Ready to discuss your manufacturing needs?</h2>
          <p className="mt-md mb-lg">We work with small and medium-sized international brands, retailers, and wholesalers.</p>
          <Link to="/quote" className="btn btn-primary btn-lg">
            Start a Sourcing Request <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
