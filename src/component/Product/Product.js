import React from 'react';
import './Product.css';

const Product = (props) => {
    console.log(props.product)
    const { name, img, seller, price, stock } = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 style={{ color: 'blue', fontWeight: '600' }}>{name}</h4>
                <p><small>by:{seller}</small></p>
                <p>Price:{price}</p>
                <p><small>Only {stock} stock left in-soon</small></p>
                <button onClick={() => props.handleAddToCart(props.product)} className='regular-btn'>Add to cart</button>

            </div>
        </div>
    );
};

export default Product;