import React, { FormEvent, useEffect, useState } from 'react'
import PostsItems from './posts-items'
import { useParams } from 'react-router-dom'
import CommentItems from './comment-items'

export default function ComentContainer() {
  const {id} = useParams()
  const token = localStorage.getItem('token')
  const [cnt , setCnt] = useState(1)
  const [comment , setComment] = useState('')
  const [reload , setReload] = useState(0)
  const page:any = []
  
    
  for (let i = 0; i < cnt ; i++) {
    page.push(<CommentItems id={id!} key={i} index={i}  />)
  }


  const handleSubmit = async (e:FormEvent)=>{
    e.preventDefault()
    const res = await fetch('http://localhost:3000/comment/create/'+id , {
      method:'post',
      headers:{
        "Content-Type":"application/json" , 
        "Authorization":"Bearer "+token
      },
      body:JSON.stringify({content:comment})
    })

    if (!res.ok) {
      
    }

    setComment('')
  }

  

  useEffect(() => {
    
  }, []);

  return (
    <div className='w-full'>
      <PostsItems id={id!}/>
      <div className='flex flex-col justify-center px-5'>
          {page}
      </div>
      <div className='flex justify-center mb-40'>

        <button onClick={e => setCnt(cnt + 1)} className='p-2 bg-emerald-50 text-emerald-500 rounded-lg mt-5 text-center'>show more</button>
      </div>
      <div className='comment fixed left-2 bottom-0 w-full bg-emerald-800 p-2 '>
          <form onSubmit={handleSubmit} className='flex flex-row'>
            <div className='w-10/12'>
                <textarea placeholder='what is heppen....' className='rounded-lg p-2 w-full ' onChange={e => setComment(e.target.value)} value={comment} required>
                  
                </textarea>
            </div>
            <div className='ml-5'>
              <button type='submit' className='p-2 rounded-lg bg-emerald-600 text-emerald-50'>comment</button>
            </div>
          </form>
      </div>
    </div>
  )
}
