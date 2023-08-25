import React from 'react'

function Menu() {
  return (
    <section className='flex flex-col'>
        <div className='p-6 bg-black-gradient absolute top-20 md:top-24 right-0 mx-4 md:mx-10 my-2 min-w-[140px] rounded-xl sidebar z-[50]'>
            <ul>
                <li className='cursor-pointer mb-3 md:text-3xl md:mx-5'>Home</li>
                <li className='cursor-pointer mb-3 md:text-3xl md:mx-5'><a href='http://127.0.0.1:5173/?#' className='text-white'>Book Tickets</a></li>
                <li className='cursor-pointer md:text-3xl md:mx-5'>Info</li>
            </ul>
        </div>
    </section>
  )
}

export default Menu