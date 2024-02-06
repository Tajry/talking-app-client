import React from 'react'

export default function CommentList({comment}:{comment:any}) {
  return (
    <div className='item bg-emerald-600 rounded-lg mt-4 w-full'>
        <div className='flex flex-row p-2 justify-between items-center'>
            <div className='flex flex-row'>
            <img src="https://images.pexels.com/photos/20001482/pexels-photo-20001482/free-photo-of-a-lighthouse-on-a-cloudy-day-in-the-middle-of-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
                alt="avatar" 
                className='rounded-full w-12 h-12'
            />
            <i className='m-2 text-emerald-50'>{comment.username}</i>
            </div>
            <i className='text-emerald-50'>{comment.created_at}</i>
        </div>
        <div className="body p-2 min-h-46 text-emerald-50">
            <p>{comment.content}</p>    </div>
        <hr />
        <div className="foot p-2 flex justify-end">
            {/* <Link to={'/view'} className='text-sm text-emerald-50 text-right'>veiw commend</Link> */}
            {/* <Link to={`/edit/${posts.id}`} className='text-sm text-emerald-50 text-right mx-2'>Edit</Link>
            <button className='text-sm text-emerald-50 text-right mx-2' id={posts.id} onClick={handleDelete}>Delete</button> */}
            </div>
    </div>
  )
}
