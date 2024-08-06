import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loginpage from "./Componant/Loginpage";
import Ragisterpage  from "./Componant/Ragisterpage";
import Home from "./Componant/HomePage";
import './App.css'


const Context = createContext();
function App() {
  const [editMode , setEditMode] = useState(false)

  const contextValue = {
    editMode,
    setEditMode
  }
  return (  

    <Context.Provider value={contextValue}>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Loginpage />} />
            <Route path="/login" element={<Loginpage />} />
            <Route path="/ragister" element={<Ragisterpage />} />
            <Route path="/home" element={<Home />} />
          </Routes>    
      </BrowserRouter>
    </Context.Provider>


  )
}

export default App
