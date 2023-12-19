import SvgIcons from '@/icons/SvgIcons'
import React from 'react'

function Navbar() {
  return (
   <>
   <div className=' p-0.5 bg-white flex justify-between items-center'>
    <img src='/logo.png'></img>
    <img src='/contact.png'></img>
    
    <div className='flex gap-x-4 justify-center items-center'>
    
    <div className='flex gap-2 justify-center items-center'>
    <h1 className='text-black text-center self-center text-xs font-semibold'>Customer Sign In</h1>
    <button className=" shadow-md h-10 text-xs rounded-md p-1.5 bg-[#38B000] text-white"> Vendor Sign In</button> 
    
    {SvgIcons.cross} 

</div>  
 </div>
   </div>
   </>
  )
}

export default Navbar