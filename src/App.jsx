import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './assets/components/header'
import Navbar from './assets/components/navbar'
import Show from './assets/components/show'
import Cards from './assets/components/cards'
import Yelers from './assets/components/yelers'
import User from './assets/components/user'
import Imgles from './assets/components/imgles'
import Footer from './assets/components/footer'
import ScrollToTopButton from './assets/components/ScrollToTopButton'
function App() {
  return (
    <>
<Header/>
<Navbar/>
<Show/>
<Cards/>
<Yelers/>
<User/>
<Imgles/>
<Footer/>
<ScrollToTopButton/>
    </>
  )
}

export default App
