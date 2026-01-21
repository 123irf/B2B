import { useState, useEffect, useRef } from 'react';
import './App.css';

function ProductRow({ title, products }) {
  const rowRef = useRef(null);

  const scrollLeft = () => {
    rowRef.current.scrollBy({
      left: -300,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    rowRef.current.scrollBy({
      left: 300,
      behavior: 'smooth',
    });
  };

  if (products.length === 0) return null;

  return (
    <div className="row-section">
      <h1>{title}</h1>

      <div className="row-wrapper">
        <button className="arrow left" onClick={scrollLeft}>
          ‹
        </button>

        <div className="products-row horizontal" ref={rowRef}>
          {products.map(product => (
            <div className="card" key={product.id}>
              <img src={product.image_url} alt={product.name} />
              <h4>{product.name}</h4>
              <p>₹ {product.price}</p>
            </div>
          ))}
        </div>

        <button className="arrow right" onClick={scrollRight}>
          ›
        </button>
      </div>
    </div>
  );
}

function App() {
  const [products, setProducts] = useState([]);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    fetc(`${API_BASE_URL}/api/products`)
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="products-container">
      <ProductRow
        title="In Stock"
        products={products.filter(p => p.stock_status === 'in_stock')}
      />
      <ProductRow
        title="Pre Order"
        products={products.filter(p => p.stock_status === 'pre_order')}
      />
      <ProductRow
        title="Inquiry"
        products={products.filter(p => p.stock_status === 'inquiry')}
      />
    </div>
  );
}
export default App;