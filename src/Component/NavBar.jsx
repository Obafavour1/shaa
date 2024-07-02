import React, { useState } from 'react'
import { navItems } from '../constant/Data'
import { logo } from '../assets/Images'

const NavBar = () => {
  const [click, setClick] = useState(false)

  return (
    <nav className='bg-black fixed bg-opacity-90 py-4 w-full'>
      <div className=' w-[90vw]   flex items-center md:justify-between'>
        <div onClick={()=> setClick(!click)} className='mr-5 lg:hidden'>
          <div className=' flex flex-col gap-[4px] absolute top-8 z-50'>
            <div className={`${click && 'absolute top-1 rotate-45'} menu w-5`}></div>
            <div className={`${click && 'hidden'} menu w-5`}></div>
            <div className={`${click && 'absolute top-1 -rotate-45'} menu w-5`}></div>
          </div>

         <div className={`${click ? 'w-60% visible' : 'invisible'}`}>
          <div className={` md:hidden  flex flex-col opacity-95 p-10 transition-all top-0 right-0 ${click ? " w-[80%] translate-x-0" :"w-[80%] translate-x-full"} fixed bg-yellow-400 h-screen pt-16 gap-5`}>
              {navItems.map ((items) => (
                <a href={items.href} className='font-bold text-[24px] text-black'>
                  {items.name} 
                </a>
              ))}
            </div>
         </div>
        </div>

        <div id='header' className=' cursor-pointer'>
          <a className='flex gap-4 max-md:ml-5' href="#header">
            <img src={logo} alt="" className='w-6' />
            <h1 className='text-[32px] font-bold'>Shama</h1>
          </a>
        </div>

        <div className='hidden md:flex gap-5'>
          {navItems.map ((items) => (
            <a href={items.href} className='py-[11px] transition-all ease-in-out  font-bold text-[20px] px-[10px] rounded-[5px]  hover:nav-hover duration-300'>
              {items.name}
            </a>
          ))}
        </div>

        

      </div>
  </nav>
  )
}

export default NavBar