import { useState } from 'react'
import './App.css'
import Form from './formValidation/form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Form/>
    </div>
  )
}

export default App
