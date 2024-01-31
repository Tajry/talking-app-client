import { useState } from 'react'
import { Routes , Route } from 'react-router-dom'
import './App.css'

import SignIn from './Sign-in'
import AppContainer from './App-container'
function App() {
  
  

  return (
    <main className='bg-emerald-800  h-full w-full'>
      <Routes>

        
        <Route path='/*' element={<AppContainer />} />
        <Route path='/signin' element={<SignIn />} />
      </Routes>


    </main>
  )
}

export default App
