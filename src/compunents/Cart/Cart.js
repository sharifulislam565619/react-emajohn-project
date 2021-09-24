import './Cart.css'
import React from 'react';

const Cart = (props) => {
    const { cart } = props
    const total = cart.reduce((pre, cart) => pre + cart.price, 0)
    const shipping = total > 0 ? 20 : 0;
    const tax = (shipping + total) / 10;
    const totalPrice = total + shipping + tax;

    return (
        <div className="cart">
            <h3>Cart order summary</h3>
            <h5>Items ordered:{props.cart.length}</h5>
            <table>
                <tbody>
                    <tr>
                        <th>Price:  </th>
                        <td>${total.toFixed(2)}</td>
                    </tr>


                    <tr>
                        <th>Shipping: </th>
                        <td>${shipping} </td>
                    </tr>
                    <tr>
                        <th>Tax: </th>
                        <td> ${tax.toFixed(2)} </td>
                    </tr>
                    <tr>
                        <th>Grand Total: </th>
                        <td> ${totalPrice.toFixed(2)}</td>

                    </tr>
                </tbody>

            </table>



        </div >
    );
};

export default Cart;