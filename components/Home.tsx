import React from 'react'
import Slider from './Slider'
import Feed from './Feed'
import { currentUser } from '@clerk/nextjs/server'

const Home = async () => {

    const user = await currentUser()
  return (
    <div className='w-full flex justify-center gap-12 pt-16 md:pt-24 '>
    <Slider user={user!} />
    <Feed user={user!}/>
    </div>
  )
}

export default Home