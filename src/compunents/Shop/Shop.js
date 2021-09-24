import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css"

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [searchProduct, setSearchProduct] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch("./products.JSON")
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setSearchProduct(data);
            }

            )
    }, []);

    useEffect(() => {

        if (products.length) {
            const saveCart = getStoredCart()
            const showCart = []
            for (const key in saveCart) {
                const addedProduct = products.find(product => product.key === key
                )
                showCart.push(addedProduct)

            }
            setCart(showCart)

        }
    }, [products])


    const productAddToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
        addToDb(product.key)

    }

    const searchResult = (event) => {
        const key = event.target.value
        const matchedProduct = products.filter(product => product.name.toLowerCase().includes(key.toLowerCase()))
        setSearchProduct(matchedProduct)
    }

    return (
        <>
            <div className="search-field">
                <input
                    onChange={searchResult}
                    type="text"
                    placeholder="Search product"

                />
            </div>
            <div className="main-container">
                <div className="shop-container">
                    {searchProduct.map(product => <Product
                        key={product.key}
                        product={product}
                        productAddToCart={productAddToCart}
                    ></Product>)}
                </div>
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>

            </div>
        </>
    );
};

export default Shop;