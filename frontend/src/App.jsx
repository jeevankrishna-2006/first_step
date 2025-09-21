import React from 'react'
import SignIn from './SignIn.jsx'
import SignUp from './SignUp.jsx'
import NavBar from './NavBar.jsx'
import Home from './Home.jsx'
import {  Routes, Route } from "react-router-dom";
// w-1/3
// sm 40rem (640px)
// md 48rem (768px)
// lg 64rem (1024px)
//xl 80rem (1280px)
//2xl 96rem (1536px)
const App = () => {
  return (
    <Routes>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/SignIn" element={<SignIn/>}/>
      <Route path="/SignUp" element={<SignUp/>}/>
      {/* <Route path="/SignIn" element={<Sign/>}/>  */}

    </Routes>
  )
}

export default App