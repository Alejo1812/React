import React from 'react';
import NavBar from './NavBar'; // Asegúrate de que la ruta sea correcta
import ItemListContainer from './ItemListContainer'; // Asegúrate de que la ruta sea correcta

function App() {
    return (
        <div className="App">
            <NavBar />
            <ItemListContainer greeting="¡Hola, mundo!" />
        </div>
    );
}

export default App;
