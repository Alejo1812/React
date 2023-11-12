import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; // Asegúrate de instalar react-icons

const CartWidget = () => {
    const itemCount = 10; // Este es el número hardcodeado

    return (
        <div className="cart-widget">
            <FaShoppingCart />
            <span>{itemCount}</span>
        </div>
    );
};

export default CartWidget;
