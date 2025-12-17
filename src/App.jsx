import { useState } from 'react'
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import './App.css'
import Home from './component/Home'
import NotFound from './component/NotFound'
import TaxRegistrationList from './component/Taxpayer Registration List/TaxRegistrationList';
import { Header } from './component/Header';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HashRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/menue' element={<TaxRegistrationList/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
