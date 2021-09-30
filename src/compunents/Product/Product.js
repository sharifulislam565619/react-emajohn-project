import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import "./Product.css"
import React from 'react';
import Rating from 'react-rating';





const Product = (props) => {
    // console.log(props)
    const { name, img, price, stock, seller, star } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h3 className="product-name">{name}</h3>
                <p>by: {seller}</p>
                <p>${price}</p>
                <p>only {stock} left in stock - order soon
                </p>
                <Rating
                    initialRating={star}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly
                ></Rating><br />
                <button onClick={() => props.productAddToCart(props.product)} className="add-cart-btn"><FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>

            </div>
        </div>
    );
};

export default Product;