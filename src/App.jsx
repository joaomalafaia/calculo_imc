import { useState } from 'react'

import Formulário from './components/Formulário'

function App() {

  return (
    <div className='container'>
      <h1 className='title'>Calcule aqui o seu IMC</h1>
      <Formulário/>
    </div>
  )
}

export default App