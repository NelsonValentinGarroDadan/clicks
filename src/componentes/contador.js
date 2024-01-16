import React from 'react';
import '../hoja-de-estilo/contador.css'
function Contador({ numero }){
    return (
        <div className='contador'>
            {numero}
        </div>
    );
}

export default Contador;