import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from './Components/NavBar/Footer'
// import Banner from './Components/Banner/Banner'

function App() {
  

  return (
    <>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
