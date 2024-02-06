import { useState } from 'react'
import { Routes , Route } from 'react-router-dom'
import './App.css'

import SignIn from './Sign-in'
import AppContainer from './App-container'
import SignUp from './Sign-up'
function App() {
  
  

  return (
    <main className='bg-emerald-800  h-full w-full'>
      <Routes>

        
        <Route path='/*' element={<AppContainer />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>


    </main>
  )
}

export default App
