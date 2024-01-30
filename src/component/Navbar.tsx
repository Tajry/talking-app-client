import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {


    const [inputsearch , setInputsearch] = useState(false);

    const toggleSearch = ()=>{
        if (inputsearch) {
            setInputsearch(false);
        }else {
            setInputsearch(true);
        }
        // console.log(inputsearch)
    }


  return (
    <nav className='w-full  lg:flex justify-between items-center p-3 text-emerald-50 font-sans flex bg-emerald-600 relative'>
        <div>
            <Link to={'/'} className='lg:text-2xl text-lg'>Talking</Link>
        </div>
        <div className=' '>
            <i className='fas fa-search block md:hidden' onClick={toggleSearch}></i>
            <div className={`${ inputsearch ? 'blog' : 'hidden'} md:block absolute top-14 left-1 flex md:relative md:top-0 `}>
                <input type="search" placeholder='search here.....'  className='rounded-lg focus:outline-none  text-emerald-400 p-2 '  />
                <button className='mx-2 p-2 bg-emerald-500 rounded-lg'><i className='fas fa-search'></i></button>
            </div>
        </div>
        <div className='nav d-flex flex-row w-auto justify-start '>
            <Link to={'/feed'} className='lg:mx-4 mx-2 '>feed</Link>
            <Link to={'/user'} className='lg:mx-4 mx-2' >posts</Link>
            <Link to={'/profile'} className='lg:mx-4 mx-2' >profile</Link>
            <button>login</button>
        </div>
    </nav>
  )
}
