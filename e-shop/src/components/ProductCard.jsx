
import './ProductCard.css';

export default function Products() {
  return (
    <div className="product-card">
      <div className="product-img-placeholder"></div>

      <h3 className="product-name">Product Name</h3>
      <p className="product-price">$00.00</p>

      <button className="product-btn">View Details</button>
    </div>
  );
}