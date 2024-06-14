import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className='mx-auto flex'>
        <div className='bg-red-700 p-4 rounded-br-3xl'>
            <h1 className='text-3xl font-black'>PFLEXH</h1>
            <h2 className='text-nowrap'>Projetos Flexíveis Humanizados</h2>
        </div>
        <ul className='flex justify-around items-center gap-4 w-full'>
            <li><Link href='#projects'>Projetos</Link></li>
            <li><Link href='#projects'>Projetos</Link></li>
            <li><Link href='#projects'>Projetos</Link></li>
            <li><Link href='#projects'>Projetos</Link></li>
            <li><Link href='#projects'>Projetos</Link></li>
        </ul>

      </nav>
  )
}
