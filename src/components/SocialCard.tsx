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
    <div className="col-span-2 flex justify-between items-center gap-x-2 border rounded-2xl p-4">
      <div className="flex items-center gap-x-3">
          {item.icon === 'linkedin' && <FaLinkedin className="text-blue-600 w-8 h-8" />}
          {item.icon === 'github' && <FaGithub className="text-black w-8 h-8" />}
          {item.icon === 'telegram' && <FaTelegram className="text-blue-500 w-8 h-8" />}
          <div className="flex flex-col">
            <span className="text-xs font-medium">{item.label}</span>
            <span className="text-xs text-zinc-500">{item.tag}</span>
          </div>
      </div>
      <a className="text-xs text-zinc-400 hover:text-zinc-500 rounded-full transition-colors" href={item.url} target="_blank" rel="noopener noreferrer">
        <FaAngleRight className="w-4 h-4" />
      </a>
    </div>
  )
}
