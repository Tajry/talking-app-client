import React from 'react'
import { Link } from 'react-router-dom'

export default function PostsItems({posts , fetchdata}:{posts:any ,fetchdata:any}) {
  const token = localStorage.getItem('token')
  const handleDelete  = async (e:React.MouseEvent<HTMLButtonElement>) => {
    if (confirm('Do you want to Deletet is posts ??')) {

      const id = e.currentTarget.id
      const res = await fetch('http://localhost:3000/posts/delete/'+id ,{
        headers:{
          "authorization":'Bearer '+token
        }
      })
  
      if (res.ok) {
        fetchdata()
      } else {
        window.location.href = "/signin"
      }
    } 
  }


  return (

    <div className='item bg-emerald-600 rounded-lg mt-4'>
        <div className='flex flex-row p-2 justify-between items-center'>
            <div className='flex flex-row'>
              <img src="https://images.pexels.com/photos/20001482/pexels-photo-20001482/free-photo-of-a-lighthouse-on-a-cloudy-day-in-the-middle-of-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
                alt="avatar" 
                className='rounded-full w-12 h-12'
              />
              <i className='m-2 text-emerald-50'>{posts.username}</i>
            </div>
            <i className='text-emerald-50'>{posts.created_at}</i>
        </div>
        <div className="body p-2 min-h-46 text-emerald-50">
            <p>{posts.content}</p>
        </div>
        <hr />
        <div className="foot p-2 flex justify-end">
            <Link to={`/view/${posts.id}`} className='text-sm text-emerald-50 text-right'>veiw commend</Link>
            <Link to={`/edit/${posts.id}`} className='text-sm text-emerald-50 text-right mx-2'>Edit</Link>
            <button className='text-sm text-emerald-50 text-right mx-2' id={posts.id} onClick={handleDelete}>Delete</button>
        </div>
    </div>
  )
}
