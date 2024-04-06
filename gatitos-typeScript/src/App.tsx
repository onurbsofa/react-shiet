import './App.css'
import { useState, useEffect } from "react"
import axios from 'axios'


const RANDOM_FACT_URL = 'https://catfact.ninja/fact'


function App() {
  
  const [fact, setFact] = useState()
  useEffect(() =>{
          axios.get(RANDOM_FACT_URL)
              .then(response => {
                  setFact(response.data)
              })
              .catch(error => {
                console.error('Error fetching cat fact', error);
              });
      },[]
  )   


  return (
    <>
    <main>

    <h1>App de Gatitos</h1>
    <p>{fact?.fact}</p>


    </main>
    
    </>
  )
}

export default App
