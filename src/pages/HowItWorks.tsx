import { Link } from 'react-router-dom';
import {
  ClipboardList, Search, BarChart3, Box,
  Factory, ShieldCheck, Ship, PackageCheck, ArrowRight,
} from 'lucide-react';
import './HowItWorks.css';

export default function HowItWorks() {
  const steps = [
    {
      num: '01', title: 'Tell Us What You Need',
      desc: 'Submit your product, quantity, specifications, destination and requirements.',
      icon: <ClipboardList size={32} />,
    },
    {
      num: '02', title: 'We Find Suitable Suppliers',
      desc: 'We identify potential manufacturing partners in Bangladesh for your exact product profile.',
      icon: <Search size={32} />,
    },
    {
      num: '03', title: 'Compare Options',
      desc: 'We evaluate pricing, MOQ, production capability and lead time across suitable suppliers.',
      icon: <BarChart3 size={32} />,
    },
    {
      num: '04', title: 'Sample & Refine',
      desc: 'We coordinate product samples and revisions until you approve the specification.',
      icon: <Box size={32} />,
    },
    {
      num: '05', title: 'Production',
      desc: 'Once specifications are approved, production begins according to agreed requirements.',
      icon: <Factory size={32} />,
    },
    {
      num: '06', title: 'Quality Coordination',
      desc: 'We coordinate quality checks according to the agreed requirements.',
      icon: <ShieldCheck size={32} />,
    },
    {
      num: '07', title: 'Export Coordination',
      desc: 'We work with appropriate logistics and export professionals.',
      icon: <Ship size={32} />,
    },
    {
      num: '08', title: 'Delivery',
      desc: 'The finished order reaches your designated destination.',
      icon: <PackageCheck size={32} />,
    },
  ];

  return (
    <div className="page-wrapper animate-fade-in-up">
      <section className="section bg-secondary pb-0">
        <div className="container text-center">
          <h1 className="mb-md">How It Works</h1>
          <p className="subtitle" style={{ maxWidth: '800px', margin: '0 auto 3rem', fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
            We handle the complexities of offshore manufacturing so you don't have to. Here is our step-by-step sourcing and production process.
          </p>
        </div>
      </section>

      <section className="section bg-secondary pt-0">
        <div className="container">
          <div className="process-timeline">
            {steps.map((step, idx) => (
              <div className="process-step" key={idx}>
                <div className="step-number">{step.num}</div>
                <div className="step-content">
                  <div className="step-icon">{step.icon}</div>
                  <div className="step-text">
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                </div>
                {idx < steps.length - 1 && <div className="step-connector"></div>}
              </div>
            ))}
          </div>

          <div className="text-center mt-xl">
            <Link to="/quote" className="btn btn-primary btn-lg">
              Tell Us What You Want to Manufacture <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
