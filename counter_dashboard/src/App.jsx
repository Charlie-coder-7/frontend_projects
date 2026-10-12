import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Histroy from './pages/Histroy'
import NotFound from './pages/NotFound'

const App = () => {
      const [history, setHistory] = useState(()=>{
        const savedHistory = localStorage.getItem("counter-history");

       return savedHistory ? JSON.parse(savedHistory) : []
      })
      useEffect(() => {
        localStorage.setItem("counter-history",JSON.stringify(history))
      }, [history])
      
    
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home history={history} setHistory={setHistory} />}
        />
        <Route
          path="/history"
          element={<Histroy history={history} setHistory={setHistory} />}
        />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App