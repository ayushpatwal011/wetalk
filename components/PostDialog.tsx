import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import ProfilePhoto from "./shared/ProfilePhoto";
import { Textarea } from "./ui/textarea";
import React, { useRef, useState } from "react";
import { readFileAsDataUrl } from "@/lib/utils";
import Image from "next/image";
import { Images } from "lucide-react";
// import { createPostAction } from "@/lib/serveraction";

export function PostDialog({
  setOpen,
  open,
  src,
}: {
  setOpen: (value: boolean) => void;
  open: boolean;
  src: string;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<string>("");
  const [inputText, setInputText] = useState<string>("");

  const changeHandler = (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputText(e.target.value);
  };

  const fileChangeHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const dataUrl = await readFileAsDataUrl(file);
      setSelectedFile(dataUrl);
    }
  };
  const postActionHandler = async (formData: FormData) => {
    const data = formData.get("inputText");
    try {
      console.log(data);
      
        // await createPostAction(inputText, selectedFile)
        // setInputText("")
        // setOpen(false)
    } catch  {
        console.log("Error Occure");
    }
}

  return (
    <Dialog open={open}>
      <DialogContent
        onInteractOutside={() => setOpen(false)}
        className="sm:max-w-[425px] max-h-screen bg-slate-200"
      >
        <DialogHeader>
          <DialogTitle>
            <div className="flex gap-2 text-black">
              <ProfilePhoto src={src} />
              <h1 className=" text-xl ">Make Your Post Live with : TalkAyu</h1>
            </div>
          </DialogTitle>
        </DialogHeader>
        <form action={""}>
          <div className="flex flex-col  text-gray-800 rounded-md">
            <Textarea
              placeholder="Type your message here."
              value={inputText}
            //   onChange={changeHandler}
              id="name"
              name="inputText"
              className="border-none text-base focus-visible:ring-0 "
            />
            <div className="my-1 flex justify-center">
              {selectedFile && (
                <Image
                  src={selectedFile}
                  alt="post image"
                  width={250}
                  height={250}
                />
              )}
            </div>
          </div>
          <DialogFooter>
            <div className="flex items-center gap-4">
              <Input
                type="file"
                name="image"
                className="hidden"
                accept="image/*"
                ref={inputRef}
                onChange={fileChangeHandler}
              />
              <div className=" flex gap-2">
                <Button type="submit" className="mt-4">
                 Post
                </Button>
                <Button  className="mt-4 " onClick={()=>{
                  setOpen(false)
                }}>
                 Go Back
                </Button>
              </div>
            </div>
          </DialogFooter>
        </form>
        <Button
          onClick={() => inputRef?.current?.click()}
          variant={"ghost"}
          className=" bg-slate-800"
        >
          <Images className="text-slate-100" />
          <p>Media</p>
        </Button>
      </DialogContent>
    </Dialog>
  );
}