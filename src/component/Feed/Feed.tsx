import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import FeedContainer from './Feed-container'

export default function Feed() {
  const [searchParams , setSearchParams]= useSearchParams()
 


  return (
    <main>
      <FeedContainer />
    </main>
  )
}
