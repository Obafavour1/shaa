import React from 'react'
import Header from './Component/Header';
import Section from "./Component/Section"
import Footer from './Component/Footer';
import NavBar from './Component/NavBar';




const App = () => {
  return (
    <div className=' bg-black text-white'>
      <div className='max-container'>
        <NavBar />
        <Header />
        <Section />
      </div>
      <Footer />
    </div>
  )
}

export default App;