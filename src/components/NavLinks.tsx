import Link from 'next/link'
import React from 'react'

const sampleNavItems = [
  {
    label: 'Blog',
    href: '/'
  },
  {
    label: 'Projects',
    href: '/projects'
  },
  {
    label: 'Resume',
    href: '/resume'
  }
]

type NavItemProps = Readonly<{
  label: string
  href: string
}>

function CircleNavItem({ item }: { item: NavItemProps }) {
  return (
    <li key={item.href}>
      <Link className="text-zinc-500 hover:text-zinc-900 hover:bg-zinc-200 py-1 px-2 rounded-full transition-colors" 
        href={item.href} key={item.label}>
        {item.label}
      </Link>
    </li>
  )
}

export function NavLinks() {
  return (
    <ul className="text-xs flex flex-wrap gap-x-2 border rounded-full p-2">
      {sampleNavItems.map((item) => (
        <CircleNavItem key={item.label} item={item} />
      ))}
    </ul>
  )
}
