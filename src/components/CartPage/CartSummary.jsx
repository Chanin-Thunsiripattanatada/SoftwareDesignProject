import React from 'react';

const CartSummary = ({ totalPrice, onCheckout }) => {
    return (
        <div className="cart-summary">
            <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
            <button onClick={onCheckout}>Checkout</button>
        </div>
    );
};

export default CartSummary;
