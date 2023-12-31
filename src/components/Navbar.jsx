import React, { useState} from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const [nav, setnav] = useState(true)

  const handleNav = () => {
    setnav(!nav)
  }
  return (
    <div className=' flex justify-between items-center h-24 max-w-[1240px] mx-auto text-white px-4'>
      <h1 className=" w-full text-3xl font-bold text-[#00df9a] cursor-pointer">Yvan.</h1>
      <ul className='hidden md:flex'> 
        <li className='p-4 cursor-pointer'>Home</li>
        <li className='p-4 cursor-pointer'>Company</li>
        <li className='p-4 cursor-pointer'>Resources</li>
        <li className='p-4 cursor-pointer'>About</li>
        <li className='p-4 cursor-pointer'>Contact</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden cursor-pointer'>
        {nav ? <MenuIcon size={20} /> :  <CloseIcon size={20}  />}
      </div>
      <div className={!nav ? `fixed left-0 top-0 w-[60%] h-full border-r-gray-900 bg-[#000300] ease-in-out duration-500 md:left-[-100%] ` : " fixed left-[-100%]"}>
      <h1 className=" w-full text-3xl font-bold text-[#00df9a] m-4 ">React.</h1>

        <ul className='pt-4 uppercase'>
        <li className='p-4 border-b border-gray-600'>Home</li>
        <li className='p-4 border-b border-gray-600'>Company</li>
        <li className='p-4 border-b border-gray-600'>Resources</li>
        <li className='p-4 border-b border-gray-600'>About</li>
        <li className='p-4'>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar