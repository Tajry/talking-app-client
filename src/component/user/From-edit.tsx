import React, { FormEvent, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function FormEdit() {
  const [content , setContent] = useState('');
  const [oldContent , setOldContent] = useState('');
  const token = localStorage.getItem('token')
  const {id} = useParams()
  

  const getPosts =async () => {
    const res = await fetch('http://localhost:3000/posts/getposts/'+id ,{
        headers:{
            "authorization":'Bearer '+token,
        }
    })

    if (!res.ok || res.status == 403) {
        // window.location.href = "/signin"
    }else {
        if (res.status == 404) {
            window.location.href = '/user'
        }else {
            const json  = await res.json();
            setOldContent(json.data.content)
        }


    }


  }

  useEffect(()=>{
    getPosts()
  },[])

  async function handleSubmit(e:FormEvent) {
    e.preventDefault();
    const res  = await fetch('http://localhost:3000/posts/update/'+id,{
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
    window.location.href = '/user'
    
  }
  return (
    <form onSubmit={handleSubmit}>
        <div >
            <textarea placeholder='what is heppen....' className='rounded-lg p-2 w-full' onChange={e => setContent(e.target.value)} defaultValue={oldContent}>
               
            </textarea>
        </div>
        <div>
          <button type='submit' className='p-2 rounded-lg bg-emerald-600 text-emerald-50'>share</button>
        </div>
    </form>
  )
}
