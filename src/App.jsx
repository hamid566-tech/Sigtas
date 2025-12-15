import { useState } from 'react'
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import './App.css'
import Index from './component/Index'
import NotFound from './component/NotFound'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
