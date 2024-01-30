import { useState } from 'react'
import { Routes , Route } from 'react-router-dom'
import './App.css'
import Navbar from './component/Navbar'
import Feed from './component/Feed/Feed'
import Profile from './component/profile/Profile'
import User from './component/user/User'

function App() {
  
  

  return (
    <main className='bg-emerald-800  h-screen w-full'>
      <Navbar />
      <div className='content p-2 bg-emerald-600 mt-5 mx-2 rounded-lg'>

        <Routes>
          <Route path='/' element={<Feed />} />
          <Route path='/feed' element={<Feed />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/user' element={<User />} />
        </Routes>
      </div>

    </main>
  )
}

export default App
