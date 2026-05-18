import React, { useState, useMemo } from "react";
import { ProductCard } from "../components/ProductCard";
import { products } from "../data/product";
import "./Products.css";

export const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortNewest, setSortNewest] = useState(false);

  // Get unique categories
  const categories = ["All", ...new Set(products.map((p) => p.category))];

  // Filter + Search + Sort Logic
  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory,
      );
    }

    if (searchTerm) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    if (sortNewest) {
      filtered.reverse();
    }

    return filtered;
  }, [selectedCategory, searchTerm, sortNewest]);

  return (
    <div className="products-page">
      {/* HERO */}
      <section className="products-hero fade-in">
        <h1>
          Our <span className="orange">Medical Equipment</span>
        </h1>
        <div className="divider"></div>
        <p>
          Explore our wide range of high-quality laboratory and hospital
          equipment designed to meet modern healthcare standards.
        </p>
      </section>

      {/* FILTERS */}
      <section className="filters-section">
        {/* Category Buttons */}
        <div className="category-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={
                selectedCategory === category
                  ? "filter-btn active"
                  : "filter-btn"
              }
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Search + Sort */}
        <div className="search-sort">
          <input
            type="text"
            placeholder="Search equipment..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <button
            className="sort-btn"
            onClick={() => setSortNewest(!sortNewest)}
          >
            {sortNewest ? "Sort by Oldest" : "Sort by Newest"}
          </button>
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section className="products-section fade-in">
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};
