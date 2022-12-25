import { useState, useEffect } from 'react';
import GoodsCard from '../GoodsCard/GoodsCard';
import './style.css';

const GoodsInfo = () => {
    const [items, setItems] = useState([]);

    useEffect(() => { 
        fetch('https://dummyjson.com/products?limit=6')
        .then(res => res.json())
        .then(data => setItems(data.products));   
    }, []);

    if (!items) {
        return <span>Please wait...</span>;
    }

    return (
        <div className="goodsInfo">
            {items.map(({ id, title, price, thumbnail }) => {
                return (
                    <GoodsCard key={id} name={title} price={price} link={thumbnail} />
                );
            })}
        </div>
    )
}

export default GoodsInfo;