import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Signin from './pages/Signin'
import SignUp from './pages/SignUp'
import About from './pages/About'
import Profile from './pages/Profile'
import Header from './components/Header'


function App() {
  return (
  //   <h1 className="text-red-600 text-3xl font-bold underline">
  //   Hello world!
  // </h1>
  <BrowserRouter>
  <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/sign-in" element={<Signin/>} />
      <Route path="/sign-up" element={<SignUp/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/profile" element={<Profile/>} />

    </Routes>
  </BrowserRouter>
  )
}

export default App
