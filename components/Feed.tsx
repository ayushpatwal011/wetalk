import React from 'react'
import PostInput from "./PostInput"

const Feed = ({user}: {user:any}) => {
    const userData = JSON.parse(JSON.stringify(user));
  return (
    <PostInput user={userData}/>
  )
}

export default Feed