import axios from 'axios'

const API_ENDPONIT = `https://cataas.com/cat/says/${catFact}fontSize=50&fontColor=red`

axios.get('https://cataas.com/cat/says/hello')
    .then(response => {
        response.data
    })