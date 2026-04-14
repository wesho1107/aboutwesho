import React from 'react'
import { FaAngleRight, FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa'

type SocialItemProps = Readonly<{
  label: string
  url: string
  icon: string
  tag: string
}>

export default function SocialCard({ item }: { item: SocialItemProps }) {
  return (
    <a 
      href={item.url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="group sm:col-span-2 flex justify-between items-center gap-x-2 border rounded-2xl p-4 hover:shadow-md transition-shadow duration-300"
    >
      <div className="flex items-center gap-x-3 text-zinc">
          {item.icon === 'linkedin' && <FaLinkedin className="text-blue-600 w-8 h-8" />}
          {item.icon === 'github' && <FaGithub className="text-black w-8 h-8" />}
          {item.icon === 'telegram' && <FaTelegram className="text-blue-500 w-8 h-8" />}
         <div className="hidden md:flex flex-col">
            <span className="text-md font-medium antialiased subpixel-antialiased">{item.label}</span>
            <span className="text-sm text-zinc-500 antialiased subpixel-antialiased">{item.tag}</span>
          </div>
      </div>
      <FaAngleRight className="hidden md:block w-4 h-4 shrink-0 text-zinc-400 transition-colors group-hover:text-zinc-500" />
    </a>
  )
}
