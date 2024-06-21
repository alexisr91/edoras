import { useState } from 'react'
import './App.css'
import Dashboard from './components/Dashboard'

function App() {


  // JSX = HTML + JS 
  return (
    <>
      <div className="App">
      
        <main>
          <img src='https://wallpapercave.com/wp/wp10054456.jpg' alt='lotr-bg' className='bg-image' />
          <Dashboard/>
        </main>
      </div>
    </>
  )
}

export default App;
