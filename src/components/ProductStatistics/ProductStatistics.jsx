import React, { useEffect, useState } from 'react';
import './productStatistics.css';

function ProductStatistics({ product }) {
    const [statistics, setStatistics] = useState({
        views: 0,
        purchases: 0,
        favorites: 0
    });

    useEffect(() => {
        // Simulate fetching data
        const fetchData = async () => {
            const stats = await fetch(`api/products/${product.id}/statistics`);
            const data = await stats.json();
            setStatistics(data);
        };

        fetchData();
    }, [product.id]);

    return (
        <div className="product-statistics">
            <h3>Statistics for {product.name}</h3>
            <ul>
                <li>Views: {statistics.views}</li>
                <li>Purchases: {statistics.purchases}</li>
                <li>Favorites: {statistics.favorites}</li>
            </ul>
        </div>
    );
}

export default ProductStatistics;
