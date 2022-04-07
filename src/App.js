import {useState, useEffect} from 'react';
import './App.css';
import Pokemon from './Componentes/Pokemon/Pokemon';

function App() {
  const [pokemons, setPokemons] = useState( []);
  const [URL, setURL] = useState( "https://pokeapi.co/api/v2/pokemon/?limit=807")
/*
  useEffect(() =>{
    let configuracion ={
      method : "GET"
    };
    fetch (URL, configuracion)
      .then( respuesta => {
        if( respuesta.ok){
          return respuesta.json();
        }
      })
      .then( listaPokemons =>{
        console.log(listaPokemons);
        if( listaPokemons.results){
          setPokemons( (pokemonPrev) => listaPokemons.results );
        }  
      });
  }, []);*/

  const buscar = (event) => {
    event.preventDefault();
    let configuracion ={
      method : "GET"
    };
    fetch (URL, configuracion)
      .then( respuesta => {
        if( respuesta.ok){
          return respuesta.json();
        }
      })
      .then( listaPokemons =>{
        console.log(listaPokemons);
        if( listaPokemons.results){
          setPokemons( (pokemonPrev) => listaPokemons.results );
        }  
      });
  }

  
  return (
    <div className="App">
     
          <button type="submit"  onClick={buscar}>
            Fetch Pokemon
          </button>
     
      <div className='pokemons'>
        {
          pokemons.map (( pokemons, indice) =>{
            return ( <Pokemon key={'pokemons_' + indice} pokemons={pokemons}/>)
          }
          )
        }
      </div>
    </div>
  );
}

export default App;
