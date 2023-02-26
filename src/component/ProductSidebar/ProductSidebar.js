import React from 'react';
import 'bootstrap/dist/css/bootstrap-grid.css';
import ProductCard from "../productCard/ProductCard";
import useFetch from "../../hooks/useFetching";

import './ProductSidebar.scss'

const ProductSidebar = () => {
    const { products, error, isLoading } = useFetch("https://damir-fe.github.io/shop/products");
    
    return (
        <div className="product-sidebar">
            <div className="product-sidebar__title">
                Gadgets
                <span>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.33334 12L16 22.6667L26.6667 12" stroke="#403E3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </span>
            </div>
            <div className="product-sidebar__sort">
                <button className="product-sidebar__sort-item active">by Popular</button>
                <button className="product-sidebar__sort-item">by Date</button>
            </div>
            <div className="product-sidebar__list">
                {products.slice(0, 5).map(product => (
                    <ProductCard
                        url={product.url}
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        color={product.color}
                        capacity={product.capacity}
                        key={product.id}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductSidebar;