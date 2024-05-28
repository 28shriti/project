import React from 'react'

const Navbar = () => {
  return (
    <div className='nav bg-slate-400 h-16 w-full px-28 flex justify-between items-center'>
      <div className="logo">
        logo
      </div>
      <div className="navList">
        <ul className='flex gap-32'>
            <li>ph_no</li>
            <li>button</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
