import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import './Quality.css';

export default function Quality() {
  const workflows = [
    {
      title: 'Supplier Evaluation',
      details: ['Manufacturing capability', 'Product experience', 'MOQ', 'Lead time', 'Customization capacity', 'Quality standards', 'Export capability'],
    },
    {
      title: 'Sample First',
      desc: 'Samples allow requirements to be reviewed before larger production commitments are made.',
    },
    {
      title: 'Clear Specifications',
      desc: 'Materials, dimensions, branding, packaging and other requirements are documented before production begins.',
    },
    {
      title: 'Production Coordination',
      desc: 'Requirements are communicated throughout the manufacturing process and progress is monitored.',
    },
    {
      title: 'Quality Inspection',
      desc: 'Quality inspections can be arranged according to the requirements of each order.',
    },
  ];

  return (
    <div className="page-wrapper animate-fade-in-up">
      <section className="section bg-secondary text-center">
        <div className="container">
          <h1 className="mb-md">Quality & Production</h1>
          <p className="subtitle" style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
            We implement structured workflows to coordinate manufacturing quality and keep your production on track.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="quality-timeline">
            {workflows.map((item, idx) => (
              <div key={idx} className="quality-card">
                <h3>{item.title}</h3>
                {item.desc && <p>{item.desc}</p>}
                {item.details && (
                  <ul className="quality-list">
                    {item.details.map((detail, i) => (
                      <li key={i}><CheckCircle2 size={16} /> {detail}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <div className="disclaimer-box mt-xl">
            <strong>Please Note:</strong> Specific quality, inspection and certification requirements vary by product, destination and buyer requirements. These are agreed individually for each order.
          </div>
        </div>
      </section>

      <section className="section text-center">
        <div className="container">
          <Link to="/quote" className="btn btn-primary btn-lg">
            Discuss Your Quality Requirements <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
