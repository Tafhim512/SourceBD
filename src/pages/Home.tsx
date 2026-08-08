import { Link } from 'react-router-dom';
import { ArrowRight, Search, BarChart3, Box, Factory, ShieldCheck, Ship, AlertTriangle } from 'lucide-react';
import './Home.css';

export default function Home() {
  const painPoints = [
    'Finding reliable manufacturers',
    'Comparing multiple suppliers',
    'Communicating specifications clearly',
    'Getting quality samples',
    'Managing minimum order quantities',
    'Monitoring production progress',
    'Checking quality on the ground',
    'Coordinating export logistics',
  ];

  const steps = [
    { num: '01', title: 'Source', desc: 'Find suitable Bangladeshi manufacturers.', icon: <Search size={28} /> },
    { num: '02', title: 'Compare', desc: 'Compare capability, pricing, MOQ and lead times.', icon: <BarChart3 size={28} /> },
    { num: '03', title: 'Sample', desc: 'Coordinate samples and revisions.', icon: <Box size={28} /> },
    { num: '04', title: 'Produce', desc: 'Manage communication and production requirements.', icon: <Factory size={28} /> },
    { num: '05', title: 'Quality', desc: 'Coordinate quality inspection according to order requirements.', icon: <ShieldCheck size={28} /> },
    { num: '06', title: 'Export', desc: 'Coordinate with appropriate logistics/export professionals.', icon: <Ship size={28} /> },
  ];

  return (
    <div className="home-page animate-fade-in-up">

      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <h1>Manufacture in Bangladesh.<br /><span className="accent-text">We Handle the Sourcing.</span></h1>
            <p className="hero-subtitle">
              SourceBD helps international brands find manufacturing partners, develop custom products and manage the Bangladesh side of production — from sourcing and samples to quality and export coordination.
            </p>
            <div className="hero-actions">
              <Link to="/quote" className="btn btn-primary btn-lg">
                Request a Sourcing Quote <ArrowRight size={20} />
              </Link>
              <Link to="/how-it-works" className="btn btn-outline btn-lg">
                How It Works
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="image-wrapper">
              <img
                src="/images/hero_textile_1786211933801.png"
                alt="Custom textile manufacturing in Bangladesh"
                className="hero-image"
              />
              <div className="image-overlay"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROBLEM SECTION ===== */}
      <section className="problem-section section">
        <div className="container">
          <div className="problem-inner">
            <div className="problem-text">
              <AlertTriangle size={32} className="problem-icon" />
              <h2>Manufacturing Overseas Shouldn't Mean Managing Everything Yourself</h2>
              <p className="problem-lead">
                International buyers sourcing from Bangladesh often struggle with challenges that slow down production and increase risk.
              </p>
            </div>
            <div className="pain-grid">
              {painPoints.map((point, i) => (
                <div key={i} className="pain-item">
                  <span className="pain-bullet"></span>
                  <span>{point}</span>
                </div>
              ))}
            </div>
            <div className="problem-answer">
              <h3>That's Where SourceBD Comes In.</h3>
              <p>We become your Bangladesh-side sourcing partner — one point of contact that handles the local complexity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHAT WE DO ===== */}
      <section className="what-we-do section bg-secondary">
        <div className="container">
          <div className="section-header text-center">
            <h2>How We Work With You</h2>
            <p>Six coordinated steps from your requirements to your finished order.</p>
          </div>
          <div className="steps-grid mt-xl">
            {steps.map((step, i) => (
              <div key={i} className="step-card">
                <div className="step-num">{step.num}</div>
                <div className="step-card-icon">{step.icon}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-xl">
            <Link to="/quote" className="btn btn-primary btn-lg">
              Start Your Sourcing Request <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS PREVIEW ===== */}
      <section className="products-preview section">
        <div className="container">
          <div className="section-header text-center">
            <h2>What We Can Help You Manufacture</h2>
            <p>Starting with custom textile and lifestyle products.</p>
          </div>
          <div className="product-preview-grid mt-xl">
            <div className="preview-card">
              <img src="/images/product_tote_bags_1786211960091.png" alt="Custom bags" />
              <h4>Custom Bags</h4>
              <p>Tote bags, shopping bags, branded bags and other custom designs.</p>
            </div>
            <div className="preview-card">
              <img src="/images/product_pouches_1786211983648.png" alt="Pouches and organizers" />
              <h4>Pouches & Organizers</h4>
              <p>Travel pouches, organizers, storage products and lifestyle accessories.</p>
            </div>
            <div className="preview-card">
              <img src="/images/product_textile_1786212006849.png" alt="Textile products" />
              <h4>Textile Lifestyle Products</h4>
              <p>Selected fabric-based products for retail and lifestyle brands.</p>
            </div>
            <div className="preview-card">
              <img src="/images/product_corporate_1786212029490.png" alt="Corporate merchandise" />
              <h4>Corporate Merchandise</h4>
              <p>Custom products for corporate gifting, events and branded merchandise.</p>
            </div>
          </div>
          <div className="text-center mt-xl">
            <Link to="/quote" className="btn btn-primary btn-lg">
              Request a Product Quote <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== WHY SOURCEBD ===== */}
      <section className="why-section section bg-secondary">
        <div className="container">
          <div className="section-header text-center">
            <h2>Why Work With a Bangladesh-Based Sourcing Partner?</h2>
          </div>
          <div className="why-grid mt-xl">
            {[
              { title: 'Local Access', desc: 'We operate close to the manufacturing ecosystem.' },
              { title: 'One Point of Contact', desc: 'Instead of managing multiple suppliers, buyers communicate with SourceBD.' },
              { title: 'Custom Manufacturing', desc: 'Products can be developed around buyer requirements.' },
              { title: 'Supplier Network', desc: 'We identify manufacturers according to product requirements.' },
              { title: 'Quality Coordination', desc: 'Samples and quality requirements are managed locally.' },
              { title: 'International Focus', desc: 'We are designed around the needs of foreign businesses sourcing from Bangladesh.' },
            ].map((item, i) => (
              <div key={i} className="why-card">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="cta-section section">
        <div className="container text-center">
          <h2>Ready to source your next product from Bangladesh?</h2>
          <p className="mt-md mb-lg">Submit your requirements and let us find the right manufacturing partner for you.</p>
          <Link to="/quote" className="btn btn-primary btn-lg">
            Tell Us What You Need <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
