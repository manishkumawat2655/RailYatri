import React from 'react'
import Menu from './Menu'
import { useState } from 'react'

function Navbar() {

    const [sidebar,setSidebar]=useState(false);
    const logo='https://images.pexels.com/photos/2790396/pexels-photo-2790396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
    const menu='https://cdn-icons-png.flaticon.com/512/6015/6015685.png'

  return (
    <div className='m-0 bg-black-gradient w-full flex flex-1 flex-row  justify-between  items-center overflow-auto'>
      <div className='flex flex-row flex-1 items-center'>
        <img className=' ml-4 md:w-52 w-[150px]  rounded-full' src={logo} alt='train'/>
        <h1 className=' text-gradient text-xl xs:text-3xl md:text-5xl xs:ml-14  '>Smart Ticket System</h1>
      </div>
      <div onClick={()=>setSidebar((side)=>!side)}>
        <img className='bg-gradient w-[30px] xs:w-[50px] md:w-[70px] bg-slate-600 mr-2 xs:mr-7 md:mr-14 rounded-full cursor-pointer'  src={menu} alt='menu'/>
        {
          sidebar&&<Menu/>
        }
        
      </div>
    </div>
  )
}

export default Navbar