import { Link } from 'react-router-dom';
import { ArrowRight, Search, Hammer, Tags, PenTool, ClipboardCheck, Ship } from 'lucide-react';
import './Services.css';

export default function Services() {
  const services = [
    {
      icon: <Search size={40} />,
      title: 'Supplier Sourcing',
      desc: 'Find suitable Bangladeshi manufacturing partners based on your product, quantity and specifications.',
    },
    {
      icon: <Hammer size={40} />,
      title: 'Custom Manufacturing',
      desc: 'Coordinate production based on buyer specifications — materials, dimensions, branding and packaging.',
    },
    {
      icon: <Tags size={40} />,
      title: 'Private Label',
      desc: 'Coordinate branding, packaging and product customization where available through our manufacturing partners.',
    },
    {
      icon: <PenTool size={40} />,
      title: 'Product Development',
      desc: 'Help turn a product idea into a manufacturing-ready specification that can be quoted and sampled.',
    },
    {
      icon: <ClipboardCheck size={40} />,
      title: 'Quality Coordination',
      desc: 'Coordinate samples, specifications and inspection requirements locally in Bangladesh.',
    },
    {
      icon: <Ship size={40} />,
      title: 'Export Coordination',
      desc: 'Coordinate international logistics and relevant export professionals for shipment to your destination.',
    },
  ];

  return (
    <div className="page-wrapper animate-fade-in-up">
      <section className="section">
        <div className="container">
          <div className="section-header text-center mb-xl">
            <h1>Our Services</h1>
            <p className="subtitle" style={{ maxWidth: '700px', margin: '1rem auto' }}>
              We provide an end-to-end sourcing and manufacturing coordination service, acting as your dedicated local partner in Bangladesh.
            </p>
          </div>

          <div className="services-grid mt-lg">
            {services.map((service, idx) => (
              <div className="service-card" key={idx}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-secondary text-center">
        <div className="container">
          <h2 className="mb-md">Ready to manufacture your products?</h2>
          <p className="mb-lg" style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
            Let us know what you need and we will evaluate feasibility with our manufacturing partners.
          </p>
          <Link to="/quote" className="btn btn-primary btn-lg">
            Request a Sourcing Quote <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
