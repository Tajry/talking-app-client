import React from 'react'
import { Link } from 'react-router-dom'

export default function ViewItems({data}:{data:any}) {
  return (

    <div className='item bg-emerald-600 w-full rounded-lg mt-4'>
        <div className='flex flex-row p-2 justify-between items-center'>
            <div className='flex '>
                <Link to={`/viewuser/${data.username}`} className='flex'>
                    <img src="https://images.pexels.com/photos/20001482/pexels-photo-20001482/free-photo-of-a-lighthouse-on-a-cloudy-day-in-the-middle-of-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
                    alt="avatar" 
                    className='rounded-full w-12 h-12'
                    />
                    <i className='m-2 text-emerald-50'>{data.username}</i>
                </Link>
            </div>
            <i className='text-emerald-50'>{data.created_at}</i>
        </div>
        <div className="body p-2 min-h-46 text-emerald-50">
            <p>{data.content}</p>
        </div>
        <hr />
        <div className="foot p-2 flex justify-end">
            <Link to={`/view/${data.id}`} className='text-sm text-emerald-50 text-right'>veiw commend</Link>
        </div>
        
    </div>
  )
}
