import './App.css';
import Boton from './componentes/boton'
import Contador from './componentes/contador';
import { useState } from 'react';

function App() {
  const [numeros, setNum] = useState(0);
  const manejarClick = ()=>{
   setNum(numeros+1);
  };
  const reiniciarContador = ()=>{
    setNum(0);
  };
  return (
    <div className="App">
     <div className='contenedor-principal'>
      <Contador 
      numero={numeros}
      />
        <Boton 
        texto='Click'
        manejarClick={manejarClick}/>
      <Boton 
      texto='Reiniciar'
      manejarClick={reiniciarContador}/>
     </div>
    </div>
  );
}

export default App;
