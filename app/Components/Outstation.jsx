import React from 'react'
import SvgIcons from '@/icons/SvgIcons'
function Outstation() {
  return (
    <>
  

   
   <div className='m-auto w-1/2 py-5'>
    <div className='flex justify-center'>
    <button className='bg-[#38B000] m-2 w-36 text-white rounded-md  p-1.5'>One Way</button>
    <button className='bg-[#38B000] m-2 w-36 text-white rounded-md p-1.5'>Round Trip</button>
   </div>
   </div>
   
   <div className='flex justify-center'>
    
    <div className='flex flex-col m-2'>
    <h1 className='font-bold  m-2 text-black'>From</h1>
    <div className='flex'>
    <input type='text ' placeholder='Start Typing Text' className=' border-b-2 outline-none text-sm'></input>
    {SvgIcons.location}
    </div>  
   </div>

    <div className='flex flex-col m-2'>
    <h1 className='font-bold  m-2 text-black'>To</h1>
    <div className='flex'>
    <input type='text ' placeholder='Start Typing Text' className=' border-b-2 outline-none text-sm'></input>
    {SvgIcons.location}
    </div>  
   </div>

    <div className='flex flex-col m-2'>
    <h1 className='font-bold  m-2 text-black'>Pickup Date</h1>
    <div className='flex'>
    <input type='text ' placeholder='Start Typing Text' className=' border-b-2 outline-none text-sm'></input>
    {SvgIcons.date}
</div>  
</div>

     <div className='flex flex-col m-2'>
    <h1 className='font-bold  m-2 text-black'>Pickup Time</h1>
    <div className='flex'>
    <input type='text ' placeholder='Start Typing Text' className=' border-b-2 outline-none text-sm'></input>
   {SvgIcons.date}
</div>  
</div>

   <div className='flex flex-col m-2'>
    <h1 className='font-bold  m-2 text-black'>Pickup Time</h1>
    <div className='flex'>
    <input type='text ' placeholder='Start Typing Text' className=' border-b-2 outline-none text-sm'></input>
   {SvgIcons.time}
</div>  
</div>
   
</div>
 <div className='flex justify-center'>
     <button className='bg-[#38B000] m-2 w-36 shadow-md text-white rounded-md p-1.5'>Explore Cabs</button>
</div>


 
   </>
  )
}

export default Outstation