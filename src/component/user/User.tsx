import React, { useEffect, useState } from 'react'
import From from './From'
import PostsItems from './Posts-items'

export default function User() {

  const token = localStorage.getItem('token')
  
  const [data , setData] = useState([]);
  const fetchData = async ()=>{
    const res = await fetch('http://localhost:3000/posts/postsuser',{
        headers:{
          "authorization":'Bearer '+token
        }
      })
    if (!res.ok) {
     return window.location.href = '/signin'
    }
    const json =  await res.json()
    setData(json.data)
  }


  useEffect(()=>{
    fetchData() 
  },[])


  return (
    <main>
      <From fetchData={fetchData} />
      {data.map((e , i)=>{
        return(
          <PostsItems key={i}  posts={e} fetchdata={fetchData}/>
        )
      })}
    </main>
  )
}
