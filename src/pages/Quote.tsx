import { useState, type FormEvent } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import './Quote.css';

export default function Quote() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="page-wrapper animate-fade-in-up">
      <section className="section bg-secondary pb-0">
        <div className="container text-center">
          <h1 className="mb-md">Request a Sourcing Quote</h1>
          <p className="subtitle" style={{ maxWidth: '700px', margin: '0 auto 3rem', fontSize: '1.15rem', color: 'var(--text-secondary)' }}>
            Tell us about the products you want to manufacture. Provide as much detail as possible so we can accurately evaluate feasibility and identify suitable manufacturing partners.
          </p>
        </div>
      </section>

      <section className="section bg-secondary pt-0">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="quote-form-container">
            {submitted ? (
              <div className="success-message">
                <CheckCircle2 size={64} className="success-icon" />
                <h2>Thank you.</h2>
                <p>We've received your request and will review your requirements before contacting you.</p>
                <button onClick={() => setSubmitted(false)} className="btn btn-outline" style={{ marginTop: '2rem' }}>
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="quote-form">
                {/* Contact Info */}
                <div className="form-section">
                  <h3>Contact Information</h3>
                  <div className="form-grid">
                    <div className="form-group">
                      <label htmlFor="fullName">Name *</label>
                      <input type="text" id="fullName" required placeholder="Your full name" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="company">Company *</label>
                      <input type="text" id="company" required placeholder="Company name" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Business Email *</label>
                      <input type="email" id="email" required placeholder="you@company.com" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="whatsapp">WhatsApp / Phone *</label>
                      <input type="tel" id="whatsapp" required placeholder="+1 (555) 000-0000" />
                    </div>
                    <div className="form-group full-width">
                      <label htmlFor="country">Country</label>
                      <input type="text" id="country" placeholder="e.g. United States" />
                    </div>
                  </div>
                </div>

                {/* Product Requirements */}
                <div className="form-section mt-xl">
                  <h3>Product Requirements</h3>
                  <div className="form-grid">
                    <div className="form-group full-width">
                      <label htmlFor="product">Product *</label>
                      <input type="text" id="product" required placeholder="e.g. Custom Canvas Tote Bag" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="quantity">Quantity *</label>
                      <input type="text" id="quantity" required placeholder="e.g. 1,000 units" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="material">Material</label>
                      <input type="text" id="material" placeholder="e.g. 12 oz Cotton Canvas" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="dimensions">Dimensions</label>
                      <input type="text" id="dimensions" placeholder="e.g. 38 × 42 cm" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="color">Color</label>
                      <input type="text" id="color" placeholder="e.g. Natural, Navy" />
                    </div>
                    <div className="form-group full-width">
                      <label htmlFor="branding">Branding Requirements</label>
                      <input type="text" id="branding" placeholder="e.g. Screen print logo front, woven label inside" />
                    </div>
                    <div className="form-group full-width">
                      <label htmlFor="packaging">Packaging Requirements</label>
                      <input type="text" id="packaging" placeholder="e.g. Individual polybags, master carton" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="deliveryDate">Target Delivery Date</label>
                      <input type="date" id="deliveryDate" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="destination">Destination Country</label>
                      <input type="text" id="destination" placeholder="e.g. Germany" />
                    </div>
                    <div className="form-group full-width">
                      <label htmlFor="budget">Budget Range (Optional)</label>
                      <input type="text" id="budget" placeholder="e.g. $3–5 per unit" />
                    </div>
                    <div className="form-group full-width">
                      <label htmlFor="additional">Additional Requirements</label>
                      <textarea id="additional" rows={4} placeholder="Any other context, special requirements or questions..."></textarea>
                    </div>
                    <div className="form-group full-width">
                      <label htmlFor="file">Upload Product Reference / Design / Image</label>
                      <input type="file" id="file" className="file-input" accept="image/*,.pdf,.ai,.psd" />
                    </div>
                  </div>
                </div>

                <div className="form-submit mt-lg text-center">
                  <button type="submit" className="btn btn-primary btn-lg" disabled={loading} style={{ width: '100%', maxWidth: '320px' }}>
                    {loading ? 'Submitting...' : 'Submit Sourcing Request'} <Send size={18} />
                  </button>
                  <p style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--text-tertiary)' }}>
                    Your information is used only by our sourcing team to evaluate your request.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
