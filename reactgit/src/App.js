import { useState } from 'react';
import Input from './Input';
import ListaPostIt from './ListaPostIt';

import './bootstrap.min.css';
import './style.css';

function App() {

  const [postits, setPostIts] = useState([
    { id: 1, titulo: 'Jugar', descripcion: 'Rankear hasta subir de elo.' },
    { id:2, titulo: 'Estudiar', descripcion: 'Repasar proyectos de React' },
    { id:3, titulo: 'Dormir', descripcion: 'zzzzzzzz' },
    { id:4, titulo: 'Cocinar', descripcion: 'Hacer el almuerzo para mañana.' },
    { id:5, titulo: 'Ordenar', descripcion: 'Hacer el aseo de mi cueva, también llamado "pieza.' }
  ])

  return (
    <main className='mx-5'>
      <h1>Post It Simulator!</h1>
      <Input setPostIts={setPostIts}/>
      <ListaPostIt lista={postits} setPostIts={setPostIts}/>
    </main>
  );
}

export default App;
