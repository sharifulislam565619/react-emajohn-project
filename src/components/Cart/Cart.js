import './Cart.css'
import React from 'react';

const Cart = (props) => {
    const { cart } = props
    let totalQuantity = 0;
    let total = 0;
    for (const item of cart) {
        if (!item.quantity) {
            item.quantity = 1
        }
        total = total + item.price * item.quantity;
        totalQuantity = totalQuantity + item.quantity
    }



    const shipping = total > 0 ? 20 : 0;
    const tax = (shipping + total) / 10;
    const totalPrice = total + shipping + tax;

    return (
        <div className="my-cart">
            <h3>Cart order summary</h3>
            <h5>Items ordered:{totalQuantity}</h5>
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
            {props.children}




        </div >
    );
};

export default Cart;