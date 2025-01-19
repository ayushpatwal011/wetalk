import React from 'react'
import Slider from './Slider'
import Feed from './Feed'
import { currentUser } from '@clerk/nextjs/server'

const Home = async () => {

    const user = await currentUser()
  return (
    <div className='flex'>
    <Slider user={user!} />
    <Feed user={user!}/>
    </div>
  )
}

export default Home