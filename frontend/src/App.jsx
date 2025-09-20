import React from 'react'
import SignIn from './SignIn.jsx'
import SignUp from './SignUp.jsx'
import NavBar from './NavBar.jsx'
import Home from './Home.jsx'
import {  Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <Routes>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/SignIn" element={<SignIn/>}/>
      <Route path="/SignUp" element={<SignUp/>}/>

    </Routes>
  )
}

export default App