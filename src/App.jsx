import { useState } from 'react'
import './App.css'

function App() {

  const [ValorInput, setValorInput] = useState("");
  const [gifs, setGifs] = useState([]);

  const handleChange = (event) => {
    const valor = event.target.value;
    setValorInput(valor);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("enviado");
    const gifs = await getGifs(ValorInput)
    setGifs(gifs);
  }

  const getGifs = async (search) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=2xxlV44o6d1jbv1JQcJ265qb0jBNE22E&q=${search}`;

      const response = await fetch(url);
      if(!response.ok){
        console.log("Error");
      }

      const data = await response.json();

      return data.data;
  }



  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" value={ValorInput} onChange={(event) => handleChange(event)}/>
      </form>
      {
        gifs.map((gif)=>(
          <img key={gif.id} src={gif.images.original.url} alt={gif.title}/>
        ))
      }
    </>
  )
}

export default App
