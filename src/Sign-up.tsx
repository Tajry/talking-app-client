import React, { FormEvent, useState } from 'react'
import { Link } from 'react-router-dom';

export default function SignUp() {
  const [username ,setUsername] = useState('');
  const [password ,setPassword] = useState('');
  const [passwordConfirm ,setPasswordConfirm] = useState('');

  const handleSubmit = async (e:FormEvent)=>{
    e.preventDefault();

    if (password != passwordConfirm) {
        return alert('Passworld not macth')
    }

    const res = await fetch('http://localhost:3000/authen/signup' , {
      method:'post',
      headers:{
        "Content-Type":'application/json'
      },
      body:JSON.stringify({
        username:username,
        password:password
      })
    })

    if (res.ok) {
      const data = await res.json();
      localStorage.setItem('token' , data.token)
      window.location.href = "/signin"
    }else {
      alert("Username or Password is worng!!!")
    }



    





  }




  return (
    <div className='container h-screen flex justify-center md:items-center'>
        <div className='content p-5 bg-emerald-600 w-96 md:w-72 h-96 mt-5 rounded-lg' >
          <form onSubmit={handleSubmit}>
            <div className='m-4'>
              <h1 className='text-center text-4xl text-emerald-50'>Sign Up</h1>
            </div>
            <div className='flex flex-col my-4'>
                <input 
                  type="text" 
                  className='p-2 rounded-lg text-emerald-900 focus:outline-none'
                  placeholder='Username'
                  onChange={e => setUsername(e.target.value)}
                  value={username}
                />
            </div>
            <div className='flex flex-col my-4'>
                <input 
                  type="password" 
                  className='p-2 rounded-lg text-emerald-900  focus:outline-none'
                  placeholder='Password'
                  onChange={e => setPassword(e.target.value)}
                  value={password}
                />
            </div>
            <div className='flex flex-col my-4'>
                <input 
                  type="password" 
                  className='p-2 rounded-lg text-emerald-900  focus:outline-none'
                  placeholder='Password'
                  onChange={e => setPasswordConfirm(e.target.value)}
                  value={passwordConfirm}
                />
            </div>
            <div className='text-emerald-50'>
                already account ? <Link to={'/signin'} className='text-emerald-300'>Sign In</Link>
            </div>
            <div>
                <button className='p-2 bg-emerald-500 rounded-lg mt-4 text-emerald-50'>submit</button>
            </div>
          </form>
        </div>
    </div>
  )
}
