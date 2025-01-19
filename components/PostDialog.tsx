
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import ProfilePhoto from "./shared/ProfilePhoto"
import { Textarea } from "./ui/textarea"
import { Images } from "lucide-react"
import { useRef, useState } from "react"
import { readFileAsDataUrl } from "@/lib/utils"
import Image from "next/image"
import { createPostAction } from "@/lib/serveraction"
import { Input } from "./ui/input"
import { toast } from "sonner"
// import { toast } from "sonner"

export function PostDialog({ setOpen, open, src }: { setOpen: any, open: boolean, src: string }) {
    const inputRef = useRef<HTMLInputElement>(null);
    const [selectedFile, setSelectedFile] = useState<string>("");
    const [inputText, setInputText] = useState<string>("");

    const changeHandler = (e: any) => {
        setInputText(e.target.value);
    }

    const fileChangeHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const dataUrl = await readFileAsDataUrl(file);
            setSelectedFile(dataUrl);
        }
    }
    const postActionHandler = async (formData: FormData) => {
        const inputText = formData.get('inputText') as string;
        try {
            await createPostAction(inputText, selectedFile);
        } catch (error) {
            console.log('error occurred', error);
        }
        setInputText("");
        setOpen(false);
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
        <form action={(formData)=> {
          const promise = postActionHandler(formData)
          toast.promise(promise, {
            loading:'Creating post...',
            success:'Post created',
            error:'Failed to create post'
        })
          }}>
          <div className="flex flex-col  text-gray-800 rounded-md">
            <Textarea
              placeholder="Type your message here."
              value={inputText}
              onChange={changeHandler}
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
          className=" bg-blue-800"
        >
          <Images className="text-slate-100" />
          <p>Media</p>
        </Button>
      </DialogContent>
        </Dialog>
    )
}
