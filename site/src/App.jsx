import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardList from './components/CardList'
import Card from './components/Card'
import Header from './components/Header'
import {Link, Outlet} from 'react-router-dom'
import Footer from './components/Footer'
import { Toaster } from 'react-hot-toast'
import { LoggedInProvider } from './util/LoggedInContext'


function App() {


  return (
    <LoggedInProvider>
    <Toaster/>
      <div className="App border-2 border-sky-900 text-yellow-50">
        <Header/>
        
        {/* Our individual Page's contents end up going here where the <Outlet> tag is. Default is <HomePage> */}
        <Outlet/>
        
        <Footer/>
        
        

      </div>
      
      
    </LoggedInProvider>
  )
}

export default App
