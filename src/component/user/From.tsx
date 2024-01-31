import React, { FormEvent, useState } from 'react'

export default function From({fetchData}:{fetchData:any}) {
  const [content , setContent] = useState('');
  const token = localStorage.getItem('token')
  async function handleSubmit(e:FormEvent) {
    e.preventDefault();
    const res  = await fetch('http://localhost:3000/posts/insert' ,{
      method:'post',
      headers:{
        "Content-Type":'application/json',
        "authorization":'Bearer '+token,
      },
      body:JSON.stringify({
        content:content
      })
    })

    if (!res.ok) {
      window.location.href = "/signin"
    }
    setContent('')
    fetchData() // fetchData from function props
    
  }
  return (
    <form onSubmit={handleSubmit}>
        <div >
            <textarea placeholder='what is heppen....' className='rounded-lg p-2 w-full' onChange={e => setContent(e.target.value)} value={content}>
               
            </textarea>
        </div>
        <div>
          <button type='submit' className='p-2 rounded-lg bg-emerald-600 text-emerald-50'>share</button>
        </div>
    </form>
  )
}
