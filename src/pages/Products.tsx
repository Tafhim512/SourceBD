import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import ProductCard from '../components/ui/ProductCard';
import './Products.css';

export default function Products() {
  const products = [
    {
      title: 'Custom Bags',
      description: 'Tote bags, shopping bags, branded bags and other custom designs. Available in canvas, cotton, jute-cotton and various fabric blends.',
      image: '/images/product_tote_bags_1786211960091.png',
      customization: ['Fabric', 'Dimensions', 'Print / Embroidery', 'Handle style'],
    },
    {
      title: 'Pouches & Organizers',
      description: 'Travel pouches, organizers, storage products and lifestyle accessories. Suitable for retail brands and corporate use.',
      image: '/images/product_pouches_1786211983648.png',
      customization: ['Material', 'Zipper type', 'Interior compartments', 'Branding'],
    },
    {
      title: 'Textile Lifestyle Products',
      description: 'Selected fabric-based products for retail and lifestyle brands — from laptop sleeves to drawstring bags.',
      image: '/images/product_textile_1786212006849.png',
      customization: ['Fabric blend', 'Size', 'Color', 'Finish'],
    },
    {
      title: 'Corporate Merchandise',
      description: 'Custom products for corporate gifting, events and branded merchandise. Coordinated packaging available.',
      image: '/images/product_corporate_1786212029490.png',
      customization: ['Logo placement', 'Packaging', 'Color matching', 'MOQ flexibility'],
    },
  ];

  return (
    <div className="page-wrapper animate-fade-in-up">

      <section className="section pb-0">
        <div className="container">
          <div className="section-header text-center">
            <h1>What We Can Help You Manufacture</h1>
            <p className="mt-md" style={{ maxWidth: '700px', margin: '1rem auto' }}>
              We are initially focused on custom textile and lifestyle products. Product categories will expand based on buyer demand and manufacturing capability.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="products-grid">
            {products.map((product, idx) => (
              <ProductCard
                key={idx}
                title={product.title}
                description={product.description}
                image={product.image}
                customization={product.customization}
              />
            ))}
          </div>

          {/* Custom Projects */}
          <div className="custom-project-box mt-xl">
            <MessageCircle size={32} color="var(--accent-primary)" />
            <h3>Have Something Different in Mind?</h3>
            <p>
              Our product categories will expand over time. If your project falls outside the categories above, tell us what you need and we will evaluate whether our manufacturing network can help.
            </p>
            <Link to="/quote" className="btn btn-primary btn-lg" style={{ marginTop: '1.5rem' }}>
              Request a Product Quote <ArrowRight size={20} />
            </Link>
          </div>

          <div className="pricing-notice mt-xl text-center">
            <p>
              <strong>Custom specifications and private-label production available.</strong> B2B pricing depends on quantity, materials, specifications, customization and destination. All pricing is provided per quotation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
