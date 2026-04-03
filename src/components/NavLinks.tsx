'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const sampleNavItems = [
  {
    label: 'About',
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

function CircleNavItem({
  item,
  pathname
}: {
  item: NavItemProps
  pathname: string
}) {
  const isActive = pathname === item.href

  return (
    <li>
      <Link
        className={
          isActive
            ? 'font-medium py-1 px-2 rounded-full transition-colors'
            : 'text-zinc-500 hover:text-zinc-800 py-1 px-2 rounded-full transition-colors'
        }
        href={item.href}
      >
        {item.label}
      </Link>
    </li>
  )
}

export function NavLinks() {
  const pathname = usePathname()

  return (
    <ul className="text-sm flex flex-wrap gap-x-2 border rounded-full py-2 px-[0.4rem]">
      {sampleNavItems.map((item) => (
        <CircleNavItem key={item.label} item={item} pathname={pathname} />
      ))}
    </ul>
  )
}
