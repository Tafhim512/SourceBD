import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './ProductCard.css';

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  customization?: string[];
}

export default function ProductCard({ image, title, description, customization = [] }: ProductCardProps) {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={image} alt={title} className="product-image" />
      </div>
      <div className="product-details">
        <h3 className="product-title">{title}</h3>
        <p className="product-desc">{description}</p>
        
        {customization.length > 0 && (
          <div className="product-customization">
            <span className="custom-label">Customization:</span>
            <ul className="custom-list">
              {customization.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        )}
        
        <Link to="/quote" className="btn btn-outline product-btn">
          Request Details <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
