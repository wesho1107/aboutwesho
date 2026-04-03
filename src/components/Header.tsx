import Link from 'next/link'
import React from 'react'

type RightItemProps = Readonly<{
    rightItem: React.ReactNode
}>

export function Header({ rightItem }: RightItemProps) {
  return (
    <header className="flex flex-1 mb-4 items-center justify-between">
        <Link href="/" className="text-xl font-medium">Wesley Ho</Link>
        {rightItem}
    </header>
  )
}
