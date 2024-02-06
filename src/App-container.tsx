import React from 'react'
import Navbar from './component/Navbar'
import { Route, Routes } from 'react-router-dom'
import Feed from './component/Feed/Feed'
import Profile from './component/profile/Profile'
import User from './component/user/User'
import SignIn from './Sign-in'
import FormEdit from './component/user/From-edit'
import ComentContainer from './component/comment/comment-container'
import ViewUser from './component/view_user/viewuser'

export default function AppContainer() {
  return (
    <main className='bg-emerald-800  min-h-screen w-full'>
      <Navbar />
      <div className='content p-2  mt-5 mx-2 rounded-lg'>
          <Routes>
            <Route path='/feed' element={<Feed />} />
            <Route path='/feed' element={<Feed />} />
            <Route path='/profile/*' element={<Profile />} />
            <Route path='/user' element={<User />} />
            <Route path='/edit/:id' element={<FormEdit  />} />
            <Route path='/view/:id' element={<ComentContainer/>} />
            <Route path='/viewuser/:username' element={<ViewUser/>} />
          </Routes>
      </div>

    </main>
  )
}
