import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Index from './component/Index'
// import NotFound from './component/NotFound'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter basename='/Sigtas/'>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
