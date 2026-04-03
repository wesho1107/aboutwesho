import React from 'react'

export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-5xl mx-auto py-6 sm:py-8 md:py-12 px-4 sm:px-12 md:px-16 bg-white flex flex-col items-stretch">
      {children}
    </div>
  )
}
