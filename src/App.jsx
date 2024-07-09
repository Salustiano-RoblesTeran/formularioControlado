import { useState } from 'react'
import './App.css'

function App() {

  const [ValorInput, setValorInput] = useState("");
  const [gifs, setGifs] = useState();

  const handleChange = (event) => {
    const valor = event.target.value;
    setValorInput(valor);
    console.log(event.target.value);
  }

  const getGifs = async () => {
    const url = "https://api.giphy.com/v1/gifs/search?api_key=2xxlV44o6d1jbv1JQcJ265qb0jBNE22E&q=cheeseburgers";

      const response = await fetch(url);
      if(!response.ok){
        console.log("Error");
      }

      const data = await response.json();
      console.log(data)
  }

  getGifs();

  return (
    <>
      <input type="text" value={ValorInput} onChange={(event) => handleChange(event)}/>

      <p>{ValorInput}</p>
    </>
  )
}

export default App
