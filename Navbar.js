import React from 'react';
import CartWidget from './CartWidget'; // Asegúrate de que la ruta sea correcta

const NavBar = () => {
    return (
        <nav className="navbar">
            {/* Otros elementos de navegación */}
            <CartWidget />
        </nav>
    );
};

export default NavBar;
