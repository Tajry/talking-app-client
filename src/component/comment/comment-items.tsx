import React, { useEffect, useState } from 'react'
import CommentList from './comment-list';

export default function CommentItems({id , index}:{id:string , index:number}) {
  const token = localStorage.getItem('token')
  const [data , setData ] = useState<any>([]);
  const getComment = async ()=>{
    const res = await fetch(`http://localhost:3000/comment/getcomment?page=${index}&id=${id}`,{
      headers:{
        "Authorization":"Bearer "+token
      }
    });

    const json = await res.json();
    setData(json.data)
    // console.log(json.data)
  }

  useEffect(()=>{
    // const intarvel = setInterval(()=>{

      getComment()
    // },3000)
    // intarvel
  },[])

  // console.log(data)

  return (
   <ul className='w-full'>
      <li>
          {!data && (
            <p>No comment </p>
          )}
          
          {data!.map((e:FeedI)=>{
            return(
              <CommentList key={e.id} comment={e} />
            )
          })}
      </li>
   </ul>
  )
}
