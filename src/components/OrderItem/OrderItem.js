import React from 'react';

const OrderItem = (props) => {

    const { img, name, price, quantity, key } = props.product

    return (
        <div>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h4>Price: {price}</h4>
            <h4>Quantity: {quantity}</h4>
            <button className="add-cart-btn" onClick={() => props.handleRemove(key)}>Remove item</button>
        </div>
    );
};

export default OrderItem;