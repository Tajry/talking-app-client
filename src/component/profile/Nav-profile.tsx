import React from 'react'
import { Link } from 'react-router-dom'

export default function NavProfile({username}:{username:string}) {
  return (
    <ul className='w-full'>
      <li className=' text-emerald-50 px-3 flex justify-between'>
          <h1 className='text-2xl'>{username}</h1>
          <div className='flex gap-3'>
            <div className='text-center'>
              <Link to={'/profile/follower'}>
                <p>follower</p>
                <p>2000</p>
              </Link>
            </div>
            <div className='text-center'>
                <Link to={'/profile/following'}>
                  <p>following</p>
                  <p>3000</p>
                </Link>
            </div>
          </div>
      </li>
      <li className=' text-emerald-50 px-3 mt-4'>
        <Link to={'/profile/change_avatar'} className='flex justify-between items-center'>
          <img 
          width={50}
          height={50}
          className='rounded-full'
          src="https://images.pexels.com/photos/20001482/pexels-photo-20001482/free-photo-of-a-lighthouse-on-a-cloudy-day-in-the-middle-of-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
          <i className="fas fa-arrow-right"></i>
        </Link> 
      </li>
      <li className=' text-emerald-50 px-3 my-4'>
        <Link to={'/profile/change_password'} className='flex justify-between items-center'>
          <i>Change Password</i>
          <i className="fas fa-arrow-right"></i>
        </Link> 
      </li>
    
      
     
    </ul>
  )
}
