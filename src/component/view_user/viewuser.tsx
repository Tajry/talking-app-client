import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ViewItems from './view-items'

export default function ViewUser() {
    const {username} = useParams()
    const token = localStorage.getItem('token')
    const [data ,setData] =useState<any>([])
    const getUser = async ()=>{
        const res = await fetch('http://localhost:3000/user/getuser/'+username , {
            headers:{
                "Authorization":"Bearer "+token
            }
        })

        if (!res.ok) {
            alert('user not found')
        }

        const json = await res.json();
        setData(json.data)

    }

    useEffect(()=>{
        getUser()
    },[])

  return (
    <div className='w-full'>
        <nav className='bg-emerald-600 p-2 rounded-lg flex justify-between px-3 text-emerald-50'>
            <div className='flex gap-4 items-center'>
                <img src="https://images.pexels.com/photos/20001482/pexels-photo-20001482/free-photo-of-a-lighthouse-on-a-cloudy-day-in-the-middle-of-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
                        alt="avatar" 
                    className='rounded-full w-12 h-12'
                />
                <i>username</i>
                <div className='flex gap-3 text-sm '>
                    <div className='text-center border-solid border-2 p-2 rounded-lg'>
                        <p>follower</p>
                        <p>2000</p>
                    </div>
                    <div className='text-center border-solid border-2 p-2 rounded-lg'>
                        <p>following</p>
                        <p>3000</p>
                    </div>
                </div>
            </div>
            <button className='bg-emerald-900 p-2  rounded-2xl'>follow</button>
        </nav>

        <div className="container w-full">
            {data!.map((e:any)=>{
                return <ViewItems key={e.id} data={e}/>
            })}
        </div>
    </div>
  )
}
