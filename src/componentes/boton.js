import React from 'react';
import '../hoja-de-estilo/boton.css';

function Boton({texto , manejarClick}){
    return (
        <button
        className={`boton-${texto}`}
        onClick={manejarClick}>
            {texto}
        </button>

    );
}

export default Boton;