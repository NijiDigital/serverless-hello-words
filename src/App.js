import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import axios from 'axios'

function App() {
  const [message, setMessage] = useState()
  const [input, setInput] = useState()

  const fetchData = async () => {
    const length = input ? Number(input) : 1
    const params = new URLSearchParams([['length', length]])
    const results = await axios.get('/.netlify/functions/hello', { params })
    setMessage(results.data.message)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Word generator</h2>
        <p>
          <input value={input} onChange={(e) => setInput(e.target.value)} />
        </p>
        <p>
          <button onClick={fetchData}>Click to generate words</button>
        </p>
        <p>{message}</p>
      </header>
    </div>
  )
}

export default App
