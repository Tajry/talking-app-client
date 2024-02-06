import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {

    const token = localStorage.getItem('token')
    const [inputsearch , setInputsearch] = useState(false);

    const toggleSearch = ()=>{
        if (inputsearch) {
            setInputsearch(false);
        }else {
            setInputsearch(true);
        }
    }

    const haddleSignout = ()=>{
        localStorage.removeItem('token')

        setTimeout(() => {
            window.location.href = "/signin"
        }, 1000);
    }


  return (
    <nav className='w-full  lg:flex justify-between items-center p-3 text-emerald-50 font-sans flex bg-emerald-600 relative'>
        <div>
            <Link to={'/'} className='lg:text-2xl text-lg'><i className="	fas fa-comment"></i> Talking</Link>
        </div>
        <div className=' '>
            <i className='fas fa-search block md:hidden' onClick={toggleSearch}></i>
            <div className={`${ inputsearch ? 'blog' : 'hidden'} md:block absolute top-14 left-1 flex md:relative md:top-0 `}>
                <input type="search" placeholder='search here.....'  className='rounded-lg focus:outline-none  text-emerald-400 p-2 '  />
                <button className='mx-2 p-2 bg-emerald-500 rounded-lg'><i className='fas fa-search'></i></button>
            </div>
        </div>
        <div className='nav d-flex flex-row w-auto justify-start '>
            <Link to={'/feed'} className='lg:mx-4 mx-2 '><i className='fas fa-poll'></i> feed</Link>
            <Link to={'/user'} className='lg:mx-4 mx-2' ><i className="	fas fa-hashtag"></i> posts</Link>
            <Link to={'/profile'} className='lg:mx-4 mx-2' ><i className="fas fa-user-circle"></i> profile</Link>
            {!token && token == '' 
                ? 
                <Link to={'/login'}>Sign In</Link>
                :  
                <button onClick={haddleSignout}><i className="fas fa-power-off"></i> Sign Out</button>    
            }
        </div>
    </nav>
  )
}
