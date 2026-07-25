
import React, { useState, useEffect } from 'react';
import './product.css'; // Styling for side-by-side layout
import { useContext } from 'react';
import { useCart } from '../../../context/cartContext';


function Products() {

    
    const { addToCart } = useCart()
    const handleAdd = (product) => {
        addToCart(product);
        alert("Item added to cart")
    };
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [loading, setLoading] = useState(true);

    // 1. Fetch categories list
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then((res) => res.json())
            .then((data) => setCategories(['All', ...data]))
            .catch((err) => console.error('Error fetching categories:', err));
    }, []);

    // 2. Fetch products whenever selectedCategory changes
    useEffect(() => {
        setLoading(true);
        const url =
            selectedCategory === 'All'
                ? 'https://fakestoreapi.com/products'
                : `https://fakestoreapi.com/products/category/${encodeURIComponent(selectedCategory)}`;

        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error('Error fetching products:', err);
                setLoading(false);
            });
    }, [selectedCategory]);

    return (
        <div className="product-page-container">
            {/* LEFT SIDEBAR: Categories */}
            <aside className="sidebar">
                <h3>Categories</h3>
                <ul className="category-list">
                    {categories.map((cat) => (
                        <li
                            key={cat}
                            className={selectedCategory === cat ? 'active' : ''}
                            onClick={() => setSelectedCategory(cat)}
                        >
                            {cat.toUpperCase()}
                        </li>
                    ))}
                </ul>
            </aside>

            {/* RIGHT CONTENT AREA: Products Grid */}
            <main className="products-content">
                <h2>{selectedCategory.toUpperCase()} PRODUCTS</h2>

                {loading ? (
                    <div className="loading">Loading products...</div>
                ) : (
                    <div className="products-grid">
                        {products
                        .map((product) => (
                            <div key={product.id} className="product-card">
                                <img src={product.image} alt={product.title} className="product-img" />
                                <h4 className="product-title">{product.title}</h4>
                                <p className="product-price">${product.price}</p>
                                <button className="add-btn" onClick={() => handleAdd(product)}>Add to Cart</button>
                            </div>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
}

export default Products;