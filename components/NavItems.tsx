import { Bell, BriefcaseBusiness, Home, MessageCircleMore, Users } from 'lucide-react'
import Link from 'next/link';
import React from 'react';
// method-1 to create type
// type NAVITEMS = {
//     src:string,
//     icon:JSX.Element,
//     text:string
// }

// m-2 to create type
interface NAVITEMS {
    src:string,
    icon:JSX.Element,
    text:string
}

const navItems:NAVITEMS[] = [
    {
        src: "/home",
        icon: <Home />,
        text: "Home",
    },
    {
        src: "/networks",
        icon: <Users />,
        text: "My Network",
    },
    {
        src: "/message",
        icon: <MessageCircleMore />,
        text: "Messaging",
    },
]

const NavItems = () => {
  return (
    <div className='flex gap-8'>
        {
            navItems.map((navItem, index)=>{
                return (
                    <div key={index} className='flex flex-col items-center cursor-pointer'>
                        <span>{navItem.icon}</span>
                        <Link className='text-md' href={navItem.src}>{navItem.text}</Link>
                    </div>
                )
            })
        }
    </div>
  )
}

export default NavItems