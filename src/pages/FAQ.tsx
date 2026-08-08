import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './FAQ.css';

export default function FAQ() {
  const faqs = [
    {
      q: 'What does SourceBD do?',
      a: 'SourceBD helps international businesses source and manufacture custom products through Bangladeshi manufacturing partners. We handle supplier discovery, quotation, samples, production coordination, quality inspection and export logistics.',
    },
    {
      q: 'Do you manufacture the products yourselves?',
      a: 'We work with manufacturing partners rather than presenting ourselves as a factory. Our value is in identifying, coordinating and managing suitable manufacturers on behalf of the buyer.',
    },
    {
      q: 'What products can you source?',
      a: 'We are initially focused on custom textile and lifestyle products — including bags, pouches, organizers and textile accessories. We can explore other categories based on buyer requirements and manufacturing capability.',
    },
    {
      q: 'What is the minimum order quantity?',
      a: 'MOQ depends entirely on the product, materials and specific manufacturer. Contact us with your requirements and we will provide an accurate MOQ.',
    },
    {
      q: 'Can you make products under our brand?',
      a: 'Private-label customization — including logos, tags, packaging and custom branding — may be available depending on the product and manufacturer.',
    },
    {
      q: 'Can I request a sample?',
      a: 'Yes. Sample coordination is part of the sourcing process. We arrange samples before committing to bulk production.',
    },
    {
      q: 'Do you ship internationally?',
      a: 'We coordinate with appropriate logistics and export professionals for international shipments to your destination.',
    },
    {
      q: 'Do you work with small businesses?',
      a: 'Yes. We are particularly interested in helping small and medium-sized international brands that need a reliable Bangladesh sourcing partner.',
    },
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div className="page-wrapper animate-fade-in-up">
      <section className="section bg-secondary text-center">
        <div className="container">
          <h1 className="mb-md">Frequently Asked Questions</h1>
          <p className="subtitle" style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
            Common questions about working with SourceBD for sourcing and manufacturing.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="faq-list">
            {faqs.map((faq, idx) => (
              <div
                className={`faq-item ${openIdx === idx ? 'open' : ''}`}
                key={idx}
                onClick={() => toggleFaq(idx)}
              >
                <div className="faq-question">
                  <h3>{faq.q}</h3>
                  <button className="faq-toggle" aria-label="Toggle answer">
                    {openIdx === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                </div>
                <div className={`faq-answer ${openIdx === idx ? 'open' : ''}`}>
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-2xl">
            <h3 style={{ marginBottom: '1.5rem' }}>Still have questions?</h3>
            <Link to="/quote" className="btn btn-primary btn-lg">
              Start a Sourcing Request
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
