
import { useState } from 'react';
import './App.css'
import QuoteBox from './Components/QuoteBox';
import db from './db/quotes.json'

const arrayColors = [ '#001f36', '#190a12', '#340a0b', '#ba3c3d', '#7e5686', '#5a5239', '#1c5560', '#87313f',
                       '#7d1a0c', '#825e65' ]

function App() {
  
  const getRandom = (arrayElements) => {
    const quantityValues = arrayElements.length
    const randomIndex = Math.floor( Math.random() * quantityValues )
    return arrayElements[ randomIndex ]
  };

  const [ quote, setQuote ] = useState(getRandom(db));
  const [ color, setColor ] = useState(getRandom(arrayColors));

  const newQuote = () => {
    setQuote(getRandom(db));
    setColor(getRandom(arrayColors));
  }

  return (
    <div className="App" style={{backgroundColor:color}}>
     <QuoteBox 
        quote={quote} 
        newQuote = { newQuote } 
        color = { color }
        />
    
    </div>
  )
}

export default App
