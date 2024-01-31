import React, { useEffect, useState } from 'react'
import useSWR from 'swr'
import { fetcher } from '../../util/fetcher'
import FeedItems from './Feed-items';

export default function FeedContainer() {
  const [data , setData]  = useState([]);
  const token = localStorage.getItem('token')
  
  
  const getFeed = async ()=>{
    const res = await fetch('http://localhost:3000/posts/feed',{
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

  
    getFeed()
    

  },[])


  
  return (
    <div className='flex flex-col'>
        {data!.map((e , i)=>{
          return(
            <FeedItems key={i} feed={e} />
          )
        })}
        
    </div>
  )
}
