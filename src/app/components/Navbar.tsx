import Link from 'next/link'
import React from 'react'
import { IoIosMenu } from 'react-icons/io'

export default function Navbar() {
  return (
    <nav className='mx-auto flex'>
        <div className='bg-red-700 p-2 rounded-br-xl md:p-4 md:rounded-br-3xl'>
            <h1 className='text-2xl font-black tracking-widest md:text-3xl'>PFLEXH</h1>
            <h2 className='text-nowrap text-xs md:text-lg'>Projetos Flexíveis Humanizados</h2>
        </div>
        <ul className='hidden md:flex justify-around items-center gap-4 w-full '>
            <li><Link href='#projects'>Projetos</Link></li>
            <li><Link href='#projects'>Projetos</Link></li>
            <li><Link href='#projects'>Projetos</Link></li>
            <li><Link href='#projects'>Projetos</Link></li>
            <li><Link href='#projects'>Projetos</Link></li>
        </ul>
        <div className='w-full p-2 text-5xl flex justify-end cursor-pointer md:hidden'>
          <IoIosMenu />
        </div>
      </nav>
  )
}
