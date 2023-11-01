import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import { HomePage } from './pages/Home/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
      </Routes>
    </>
  )
}

export default App
