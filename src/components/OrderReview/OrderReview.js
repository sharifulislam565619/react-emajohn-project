import React from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import OrderItem from '../OrderItem/OrderItem';


const Order = () => {

    const [products] = useProducts([])
    const [cart, setCart] = useCart(products)

    const handleRemove = (key) => {
        const newCart = cart.filter(item => item.key !== key)
        setCart(newCart)
        removeFromDb(key)

    }
    const history = useHistory()
    const handleOrderPlace = () => {
        history.push('/orderPlace')
        clearTheCart()
    }
    return (
        <div className="main-container">
            <div className="shop-container">
                {
                    cart.map(product => <OrderItem
                        product={product}
                        key={product.key}
                        handleRemove={handleRemove}
                    >

                    </OrderItem>)
                }

            </div>



            <div className="cart-container">

                <Cart cart={cart} >
                    <button onClick={handleOrderPlace} className="add-cart-btn">Order place</button>
                </Cart>
            </div>
        </div>
    );
};

export default Order;