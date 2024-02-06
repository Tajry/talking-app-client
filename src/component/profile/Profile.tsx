import React, { useEffect, useState } from 'react'
import { Route, Routes, json } from 'react-router-dom'
import NavProfile from './Nav-profile'
import ChangePassword from './change-password'
import ChangeAvatar from './change-avatar'
import Follower from './follower'
import Following from './following'

export default function Profile() {
  const [data , setData] = useState<any>('')
  const token = localStorage.getItem('token')
  const getProfile = async ()=>{
    const res = await fetch("http://localhost:3000/profile" , {
      headers:{
        "Authorization":"Bearer "+token
      }
    })

    if (!res.ok) {
      window.location.href = "/signin"
    }

    const json = await res.json();
    setData(json.data[0])
  }

  useEffect(()=>{
    getProfile()
  },[])



  return (
    <div className='container p-2 bg-emerald-600 rounded '>
      <Routes>
        <Route path='/' element={<NavProfile username={data.username} />} />
        <Route path='/change_password' element={<ChangePassword  />} />
        <Route path='/change_avatar' element={<ChangeAvatar  />} />
        <Route path='/follower' element={<Follower  />} />
        <Route path='/following' element={<Following  />} />
        
      </Routes>
        
    </div>
  )
}
