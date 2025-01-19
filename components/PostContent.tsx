import { IPostDocument } from '@/models/post.model'
import Image from 'next/image'
import React from 'react'

const PostContent = ({post} : {post:IPostDocument}) => {
  return (
    <div className='py-2 flex justify-center items-center  flex-col'>
      <p className='font-bold text-2xl pb-3 text-white'>{post?.description}</p>
      {post?.imageUrl && <Image
      src={post?.imageUrl}
      alt='img'
      width={200}
      height={200}
      />}
    </div>
  )
}

export default PostContent