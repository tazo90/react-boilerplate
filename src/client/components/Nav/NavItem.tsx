import React from 'react'

export interface NavItemProps {
  href: string
  isActive?: boolean
  children: string
}

export function NavItem({ href, isActive, children }: NavItemProps) {
  return (
    <a
      href={href}
      className={`inline-block text-sm px-4 py-2 mx-1 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0
        ${isActive ? 'bg-white text-gray-800' : ''}`}
    >
      {children}
    </a>
  )
}
