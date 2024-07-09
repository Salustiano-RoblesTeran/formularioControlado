import { useState } from 'react'
import './App.css'

function App() {

  const [ValorInput, setValorInput] = useState("");

  const handleChange = (event) => {
    const valor = event.target.value;
    setValorInput(valor);
    console.log(event.target.value);
  }

  return (
    <>
      <input type="text" value={ValorInput} onChange={(event) => handleChange(event)}/>

      <p>{ValorInput}</p>
    </>
  )
}

export default App
