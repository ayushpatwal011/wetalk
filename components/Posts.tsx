import React from 'react'
import Post from './Post'
import { IPostDocument } from '@/models/post.model'

const Posts = ({ posts }: { posts: IPostDocument[] }) => {
    
  
  return (
    <div className='mt-2'>
      {
        posts?.map((post) => {
          return (
            <Post key={post._id as number} post={post} />
          )
        })
      }
    </div>
  )
}

export default Posts