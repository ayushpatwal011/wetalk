"use client";
import React from "react";
import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";
import { IPostDocument } from "@/models/post.model";
import ProfilePhoto from "./shared/ProfilePhoto";
import { useUser } from "@clerk/nextjs";
import PostContent from "./PostContent";
import SocialOption from "./SocialOption";
import { deletePostAction } from "@/lib/serveraction";
import { toast } from "sonner";


const Post = ({ post }: { post: IPostDocument }) => {
  const { user } = useUser();

  const fullName = post?.user?.firstName + " " + post?.user?.lastName;

  return (
    <div className= "bg:black md:border border-gray-500 rounded-md">
      <div className="flex p-4">
        {post?.user?.profilePhoto && (
          <ProfilePhoto src={post.user.profilePhoto} />
        )}

        <div className="flex items-center justify-between px-3 w-full">
          <div>
            <h1 className="text-sm text-slate-100">{fullName}</h1>
            <p className="text-xs text-slate-400">
              {user?.emailAddresses[0].emailAddress}
            </p>
          </div>
          { user?.id == post?.user?.userId  &&
          <Button
           onClick={() => {
            const promise = deletePostAction(post._id as string)
            toast.promise(promise, {
              loading:'Deleting post...',
              success:'Post deleted',
              error:'Failed to delete post'
          })
           }}
           className="rounded-full bg-yellow-400" size={"icon"}>
            <Trash2 className="text-black" />
          </Button>}
        </div>
      </div>
      <PostContent post={post!} />
      <SocialOption post={post} />
    </div>
  );
};

export default Post;