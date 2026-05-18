import { Link } from "react-router-dom";
import { products } from "../data/product";
import { ProductCard } from "../components/ProductCard";

import "./Home.css";

export const Home = () => {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="home-container fade-in">
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Delivering <span className="orange">Quality</span> Medical Equipment
          </h1>
          <p className="hero-subtitle">
            Trusted supplier of laboratory and hospital equipment across
            Nigeria.
          </p>
          <Link to="/contact" className="hero-btn">
            Request a Quote
          </Link>
        </div>
        <div className="hero-image">
          <img src="/images/test tube.webp" alt="Medical Equipment" />
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="about-preview">
        <h2>
          About <span className="orange">EVE GLOBAL</span>
        </h2>
        <p>
          EVE GLOBAL specializes in supplying hospitals and clinics with
          high-quality medical and laboratory equipment. With years of
          experience, we provide reliable solutions to meet every healthcare
          need.
        </p>
        <Link to="/about" className="about-btn">
          Learn More
        </Link>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <Link to="/products" className="view-all-btn">
          View All Products
        </Link>
      </section>

      {/* CALL TO ACTION */}
      <section className="cta-section">
        <h2>Need Reliable Medical Equipment?</h2>
        <p>
          Contact us today and get the best solutions for your hospital or
          clinic.
        </p>
        <Link to="/contact" className="cta-btn">
          Get in Touch
        </Link>
      </section>
    </div>
  );
};
