import React from 'react'
import { Avatar, AvatarImage } from '../ui/avatar'

const ProfilePhoto = ({ src }) => {
    return (
        <div>
            <Avatar className='cursor-pointer'>
                <AvatarImage src={src} alt="banner" />
            </Avatar>
        </div>
    )
}


export default ProfilePhoto