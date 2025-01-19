import React, { useState } from "react";
import { Button } from "./ui/button";
import { Heart, MessageCircle, Repeat, Send } from "lucide-react";
import { useUser } from "@clerk/nextjs";

const SocialOption = ({ post }: { post: any }) => {
  const { user } = useUser();
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(post.likes);

  const likeOrDislikeHandler = async () => {
    if (!user) throw new Error(" User not athenticated");
    const tempLiked = liked;
    const tempLikes = likes ?? []
    const dislike = (Array.isArray(likes)? likes : []).filter((userId ) => {userId !== user.id});
    const like = [...((Array.isArray(likes)? likes : [])), user.id];
    const newLike = liked ? dislike : like;

    setLiked(!liked);
    setLikes(newLike);

    const res = await fetch(
      `/api/posts/${post._id}/${liked ? "/dislike" : "/like"}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user.id),
      }
    );
    if (!res.ok) {
      setLiked(tempLiked);
      throw new Error("Failed to like or dislike");
    }

    const fetchAllLikes = await fetch(`/api/posts/${post._id}/like`);
    if (!fetchAllLikes.ok) {
      setLikes(tempLikes);
      throw new Error("Failed to fetch like");
    }

    const likeData = await fetchAllLikes.json();
    setLikes(likeData);
  };
  return (
    
    <div>
       <div className='text-sm mx-2 p-2 flex items-center justify-between border-b border-gray-300'>
                {
                    (likes && likes.length > 0) && (<p className='text-xm text-gray-500 hover:text-blue-500 hover:underline hover:cursor-pointer'>{likes.length} likes</p>)
                }
                
            </div>
      <div className="text-sm px-2 p-2 flex items-center justify-between border-b border-gray-300 bg-black rounded-md">
        <Button
          variant={"ghost"}
          onClick={likeOrDislikeHandler}
          className="flex justify-center  gap-1 rounded-lg text-white hover:text-black"
        >
          <Heart  className={`${liked && 'fill-[#378FE9]'}`}/>
          <p className={`${liked && 'text-[#378FE9]'}`}>Like</p>
        </Button>
        <Button
          variant={"ghost"}
          className="flex justify-center  gap-1 rounded-lg text-white hover:text-black"
        >
          <MessageCircle />
          <p>Comment</p>
        </Button>
        <Button
          variant={"ghost"}
          className="flex justify-center  gap-1 rounded-lg text-white hover:text-black"
        >
          <Repeat />
          <p>Repost</p>
        </Button>
        <Button
          variant={"ghost"}
          className="flex justify-center  gap-1 rounded-lg text-white hover:text-black"
        >
          <Send />
          <p>Send</p>
        </Button>
      </div>
    </div>
  );
};

export default SocialOption;
