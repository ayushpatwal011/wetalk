'use client';
import React, { useState } from 'react'
import ProfilePhoto from './shared/ProfilePhoto'
import { Input } from './ui/input'
import { PostDialog } from './PostDialog'

const PostInput = ({ user }) => {
    const [open , setOpen] = useState(false);
    const inputHandler = () => {
        setOpen(true);
    }
    return (
        <div className='bg-white p-4 m-4 md:m-0 border-gray-300  rounded-lg'>
            <div className='flex items-center gap-3'>
                <ProfilePhoto src={user?.imageUrl} />
                <Input
                    type="text"
                    placeholder='"Click" to  a Post'
                    className='rounded-full hover:bg-gray-100 h-12 cursor-pointer'
                    onClick={inputHandler}
                />
                <PostDialog setOpen={setOpen} open={open} src={user?.imageUrl}/>
            </div>
        </div>
    )
}

export default PostInput