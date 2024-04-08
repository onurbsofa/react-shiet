import './App.css'
import { useState, useEffect } from "react"
import axios from 'axios'


const RANDOM_FACT_URL = 'https://catfact.ninja/fact'
const CAT_IMAGE_URL = 'https://cataas.com'

function App() {
  
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  useEffect(() =>{
          axios.get(RANDOM_FACT_URL)
              .then(response => {

                  const { fact } = response.data
                  setFact(response.data)
                  const ThreeWords = fact.split(' ',3).join(' ')
                  console.log(ThreeWords)

                  const url = `https://cataas.com/cat/says/${ThreeWords}?size=50&color=red`;
                  setImageUrl(url);
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
    {imageUrl && <img src={imageUrl} alt="cat" />}


    </main>
    
    </>
  )
}

export default App
